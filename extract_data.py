#!/usr/bin/env python3
import zipfile, re, json

XLSX = 'MANAGEMENT.ITEMS.VER2.XLSX'

with zipfile.ZipFile(XLSX, 'r') as z:
    shared = z.read('xl/sharedStrings.xml').decode('utf-8', errors='replace')
    sheet  = z.read('xl/worksheets/sheet1.xml').decode('utf-8', errors='replace')

# Build shared string list
texts = re.findall(r'<si>(.*?)</si>', shared, re.DOTALL)
strings = []
for t in texts:
    parts = re.findall(r'<t[^>]*>(.*?)</t>', t)
    strings.append(''.join(parts))

# Parse rows
rows = re.findall(r'<row[^>]*>(.*?)</row>', sheet, re.DOTALL)

def cell_value(cell_xml):
    t_attr = re.search(r't="([^"]*)"', cell_xml)
    v = re.search(r'<v>(.*?)</v>', cell_xml)
    if v:
        if t_attr and t_attr.group(1) == 's':
            idx = int(v.group(1))
            return strings[idx] if idx < len(strings) else ''
        return v.group(1)
    return ''

def col_index(ref):
    col = re.sub(r'\d', '', ref)
    idx = 0
    for c in col:
        idx = idx * 26 + (ord(c.upper()) - ord('A') + 1)
    return idx - 1

# Column mapping from header row
header_row = rows[0]
headers = {}
cells = re.findall(r'<c r="([^"]+)"[^>]*>(.*?)</c>', header_row, re.DOTALL)
for ref, content in cells:
    val = cell_value(f'<c r="{ref}">{content}</c>')
    headers[col_index(ref)] = val

print("Headers:", json.dumps(headers, ensure_ascii=False, indent=2))
print("\nTotal rows:", len(rows))
print("\nFirst row XML (first 500 chars):", rows[0][:500] if rows else "NO ROWS")
print("\nSecond row XML (first 500 chars):", rows[1][:500] if len(rows)>1 else "NO ROW 2")

# Try parsing row 2 as data
if len(rows) > 1:
    cells2 = re.findall(r'<c r="([^"]+)"[^>]*>(.*?)</c>', rows[1], re.DOTALL)
    print("\nRow 2 cells:")
    for ref, content in cells2[:15]:
        val = cell_value(f'<c r="{ref}">{content}</c>')
        print(f"  {ref} ({col_index(ref)}): {val}")
