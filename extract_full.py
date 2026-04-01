#!/usr/bin/env python3
import zipfile, re, json

XLSX = '/Users/unagar/A&A Supermarket/MANAGEMENT.ITEMS.VER2.XLSX'

with zipfile.ZipFile(XLSX, 'r') as z:
    shared = z.read('xl/sharedStrings.xml').decode('utf-8', errors='replace')
    sheet  = z.read('xl/worksheets/sheet1.xml').decode('utf-8', errors='replace')

# Build shared string list
si_items = re.findall(r'<si>(.*?)</si>', shared, re.DOTALL)
strings = []
for si in si_items:
    parts = re.findall(r'<t[^>]*>(.*?)</t>', si, re.DOTALL)
    strings.append(''.join(parts))

def get_cell_val(cell_xml):
    # Get type attribute
    t_match = re.search(r'\bt="([^"]*)"', cell_xml)
    v_match = re.search(r'<v>(.*?)</v>', cell_xml)
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
    return result - 1  # 0-based

# Parse ALL rows
rows_data = []
row_xmls = re.findall(r'<row\b[^>]*>(.*?)</row>', sheet, re.DOTALL)

for row_xml in row_xmls:
    # Find all cells - r attr might be anywhere in the opening tag
    cell_parts = re.findall(r'<c\b([^>]*)>(.*?)</c>', row_xml, re.DOTALL)
    row_dict = {}
    for attrs, content in cell_parts:
        r_match = re.search(r'\br="([^"]*)"', attrs)
        if not r_match:
            continue
        ref = r_match.group(1)
        col = get_col(ref)
        full_cell = f'<c{attrs}>{content}</c>'
        row_dict[col] = get_cell_val(full_cell)
    rows_data.append(row_dict)

# First row is headers
header_row = rows_data[0]
print("Column headers:")
for col_idx in sorted(header_row.keys()):
    print(f"  Col {col_idx}: '{header_row[col_idx]}'")

# Map header names to column indices
col_by_name = {v: k for k, v in header_row.items()}
print("\nKey columns found:", {k: col_by_name[k] for k in col_by_name if k in ['BARCODE','ARTIKELSGRUPPE','MARKE','BESCHREIBUNG','PRICE','MWST','EINHEIT','STATUS']})

# Extract products
products = []
for row in rows_data[1:]:
    prod = {
        'barcode':   row.get(col_by_name.get('BARCODE', -1), ''),
        'category':  row.get(col_by_name.get('ARTIKELSGRUPPE', -1), ''),
        'brand':     row.get(col_by_name.get('MARKE', -1), ''),
        'name':      row.get(col_by_name.get('BESCHREIBUNG', -1), ''),
        'price':     row.get(col_by_name.get('PRICE', -1), ''),
        'vat':       row.get(col_by_name.get('MWST', -1), ''),
        'unit':      row.get(col_by_name.get('EINHEIT', -1), ''),
        'status':    row.get(col_by_name.get('STATUS', -1), ''),
    }
    if prod['name'] and prod['price'] and prod['category']:
        products.append(prod)

print(f"\nTotal products with name+price+category: {len(products)}")

# Show by category
by_cat = {}
for p in products:
    cat = p['category']
    if cat not in by_cat:
        by_cat[cat] = []
    by_cat[cat].append(p)

for cat, items in sorted(by_cat.items()):
    print(f"\n=== {cat} ({len(items)} items) ===")
    for item in items[:5]:
        print(f"  {item['barcode']} | {item['brand']} | {item['name']} | €{item['price']} | {item['unit']}")
    if len(items) > 5:
        print(f"  ... and {len(items)-5} more")

# Save full data as JSON
with open('/Users/unagar/A&A Supermarket/products_raw.json', 'w', encoding='utf-8') as f:
    json.dump({'headers': header_row, 'products': products}, f, ensure_ascii=False, indent=2)
print("\n\nFull data saved to products_raw.json")
