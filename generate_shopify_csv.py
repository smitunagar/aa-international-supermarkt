#!/usr/bin/env python3
"""
Generate Shopify product import CSV from MANAGEMENT.ITEMS.VER2.XLSX
"""
import zipfile, re, csv, json

XLSX = '/Users/unagar/A&A Supermarket/MANAGEMENT.ITEMS.VER2.XLSX'
OUTPUT = '/Users/unagar/A&A Supermarket/shopify_products.csv'

with zipfile.ZipFile(XLSX, 'r') as z:
    shared = z.read('xl/sharedStrings.xml').decode('utf-8', errors='replace')
    sheet  = z.read('xl/worksheets/sheet1.xml').decode('utf-8', errors='replace')

# Build shared string list
si_items = re.findall(r'<si>(.*?)</si>', shared, re.DOTALL)
strings = []
for si in si_items:
    parts = re.findall(r'<t[^>]*>(.*?)</t>', si, re.DOTALL)
    strings.append(''.join(parts))

def get_cell_val(attrs, content):
    t_match = re.search(r'\bt="([^"]*)"', attrs)
    v_match = re.search(r'<v>(.*?)</v>', content)
    if not v_match:
        return ''
    raw = v_match.group(1)
    if t_match and t_match.group(1) == 's':
        idx = int(raw)
        return strings[idx] if idx < len(strings) else ''
    return raw

def get_col(ref):
    col_str = re.sub(r'\d', '', ref.upper())
    result = 0
    for c in col_str:
        result = result * 26 + (ord(c) - ord('A') + 1)
    return result - 1

# Parse ALL rows
rows_data = []
row_xmls = re.findall(r'<row\b[^>]*>(.*?)</row>', sheet, re.DOTALL)

for row_xml in row_xmls:
    cell_parts = re.findall(r'<c\b([^>]*)>(.*?)</c>', row_xml, re.DOTALL)
    row_dict = {}
    for attrs, content in cell_parts:
        r_match = re.search(r'\br="([^"]*)"', attrs)
        if not r_match:
            continue
        ref = r_match.group(1)
        col = get_col(ref)
        row_dict[col] = get_cell_val(attrs, content)
    rows_data.append(row_dict)

# First row is headers
header_row = rows_data[0]
col_by_name = {v: k for k, v in header_row.items()}

# Category to Shopify type mapping
category_map = {
    'GEWÜRZE ': 'Spices & Masalas',
    'GEWÜRZE': 'Spices & Masalas',
    'REIS': 'Rice & Grains',
    'MEHL': 'Rice & Grains',
    'KONSERVEN': 'Canned Goods',
    'VAKUUM PRUDUKTE': 'Canned Goods',
    'TEE': 'Tea & Coffee',
    'Cafe': 'Tea & Coffee',
    'FERTIGVEPACKTE': 'Packaged Goods',
    'SNAKES': 'Snacks & Sweets',
    'SÜSSWARE': 'Snacks & Sweets',
    'schokoriegel': 'Snacks & Sweets',
    'OBS und GEMÜSE': 'Fresh Produce',
    'GEMÜSSE/OBST': 'Fresh Produce',
    'GEMÜSE O BARCODE': 'Fresh Produce',
    'Wiegeartikel Gemüsse': 'Fresh Produce',
    'MILCH PRUDUKTE': 'Dairy & Refrigerated',
    'KÜHLTHEKE': 'Dairy & Refrigerated',
    'GETRÄNKE': 'Beverages',
    'Säfte': 'Beverages',
    'Fleischtheke': 'Meat & Deli',
    'WURST': 'Meat & Deli',
    'Fisch': 'Fish & Seafood',
    'SUPPEN': 'Soups & Noodles',
    'SIRUP': 'Sauces & Condiments',
    'Sossen': 'Sauces & Condiments',
    'Pasten': 'Sauces & Condiments',
    'Konfitüre': 'Jams & Preserves',
    'Brot': 'Bread & Bakery',
    'GETROCKNETE FRÜCHTE': 'Dried Fruits & Nuts',
    'Trocken frucht gramm preis': 'Dried Fruits & Nuts',
    'Haushaltswaren ': 'Household',
    'Haushaltswaren': 'Household',
    'Haushaltsware o barcode': 'Household',
    'kosmetik': 'Cosmetics & Beauty',
    'Öle': 'Oils',
    'Reis ohne Barcode': 'Rice & Grains',
}

def make_handle(name, barcode):
    """Create URL-friendly Shopify handle"""
    h = name.lower()
    h = re.sub(r'[äÄ]', 'ae', h)
    h = re.sub(r'[öÖ]', 'oe', h)
    h = re.sub(r'[üÜ]', 'ue', h)
    h = re.sub(r'[ß]', 'ss', h)
    h = re.sub(r'[^a-z0-9\s-]', '', h)
    h = re.sub(r'\s+', '-', h.strip())
    h = re.sub(r'-+', '-', h)
    if len(h) < 3:
        h = f"product-{barcode}"
    return h[:100]

def format_price(raw):
    try:
        p = float(raw)
        if p <= 0:
            return None
        return f"{p:.2f}"
    except:
        return None

# Build Shopify CSV rows
shopify_rows = []
seen_handles = {}

skip_categories = {'KLEINIGKEITEN', 'Ria Gebühr', 'Wiegeartikel Gemüsse'}
skip_names = {'A', '10 euro', 'Bankeinlage', 'bank einlage ', '[EditValue is null]', 'Obst/ Gemüsse', 'Trocken/Früchte', 'Diverse'}

for row in rows_data[1:]:
    barcode  = row.get(col_by_name.get('BARCODE', -1), '').strip()
    category = row.get(col_by_name.get('ARTIKELSGRUPPE', -1), '').strip()
    name     = row.get(col_by_name.get('BESCHREIBUNG', -1), '').strip()
    price    = row.get(col_by_name.get('PRICE', -1), '').strip()
    unit     = row.get(col_by_name.get('EINHEIT', -1), '').strip()
    
    # Skip invalid / misc entries
    if not name or not price or not category:
        continue
    if category in skip_categories:
        continue
    if name in skip_names:
        continue
    if not barcode or barcode == '[EditValue is null]':
        barcode = ''
    
    price_fmt = format_price(price)
    if not price_fmt:
        continue

    handle = make_handle(name, barcode)
    
    # Deduplicate: same name+price → add as variant
    base_key = handle
    if base_key in seen_handles:
        idx = seen_handles[base_key]
        # append variant row
        shopify_rows.append({
            'Handle': handle,
            'Title': '',
            'Body (HTML)': '',
            'Vendor': 'A&A International Supermarkt',
            'Product Category': '',
            'Type': category_map.get(category, category),
            'Tags': category_map.get(category, category).lower().replace(' & ', ', ').replace(' ', '-'),
            'Published': 'TRUE',
            'Option1 Name': 'Size',
            'Option1 Value': unit or 'Stk',
            'Variant SKU': barcode,
            'Variant Grams': '',
            'Variant Inventory Tracker': 'shopify',
            'Variant Inventory Qty': '100',
            'Variant Inventory Policy': 'deny',
            'Variant Fulfillment Service': 'manual',
            'Variant Price': price_fmt,
            'Variant Compare At Price': '',
            'Variant Requires Shipping': 'TRUE',
            'Variant Taxable': 'TRUE',
            'Variant Barcode': barcode,
            'Image Src': '',
            'Image Position': '',
            'Image Alt Text': '',
            'Gift Card': 'FALSE',
            'SEO Title': '',
            'SEO Description': '',
            'Status': 'active',
        })
    else:
        seen_handles[base_key] = len(shopify_rows)
        shopify_rows.append({
            'Handle': handle,
            'Title': name,
            'Body (HTML)': f'<p>{name} — {category_map.get(category, category)}</p>',
            'Vendor': 'A&A International Supermarkt',
            'Product Category': 'Food & Grocery',
            'Type': category_map.get(category, category),
            'Tags': category_map.get(category, category).lower().replace(' & ', ', ').replace(' ', '-'),
            'Published': 'TRUE',
            'Option1 Name': 'Size',
            'Option1 Value': unit or 'Stk',
            'Variant SKU': barcode,
            'Variant Grams': '',
            'Variant Inventory Tracker': 'shopify',
            'Variant Inventory Qty': '100',
            'Variant Inventory Policy': 'deny',
            'Variant Fulfillment Service': 'manual',
            'Variant Price': price_fmt,
            'Variant Compare At Price': '',
            'Variant Requires Shipping': 'TRUE',
            'Variant Taxable': 'TRUE',
            'Variant Barcode': barcode,
            'Image Src': '',
            'Image Position': '1',
            'Image Alt Text': name,
            'Gift Card': 'FALSE',
            'SEO Title': f'{name} | A&A International Supermarkt',
            'SEO Description': f'Buy {name} at A&A International Supermarkt. {category_map.get(category, category)} — authentic international products.',
            'Status': 'active',
        })

# Write CSV
fieldnames = [
    'Handle', 'Title', 'Body (HTML)', 'Vendor', 'Product Category', 'Type', 'Tags',
    'Published', 'Option1 Name', 'Option1 Value', 'Variant SKU', 'Variant Grams',
    'Variant Inventory Tracker', 'Variant Inventory Qty', 'Variant Inventory Policy',
    'Variant Fulfillment Service', 'Variant Price', 'Variant Compare At Price',
    'Variant Requires Shipping', 'Variant Taxable', 'Variant Barcode',
    'Image Src', 'Image Position', 'Image Alt Text',
    'Gift Card', 'SEO Title', 'SEO Description', 'Status'
]

with open(OUTPUT, 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(shopify_rows)

print(f"✅ Shopify CSV written: {OUTPUT}")
print(f"   Total rows: {len(shopify_rows)}")
print(f"   Unique products: {len(seen_handles)}")

# Print category breakdown
cat_counts = {}
for row in shopify_rows:
    if row['Title']:  # only first rows (not variant rows)
        t = row['Type']
        cat_counts[t] = cat_counts.get(t, 0) + 1

print("\nProducts by category:")
for cat, count in sorted(cat_counts.items(), key=lambda x: -x[1]):
    print(f"  {cat}: {count}")
