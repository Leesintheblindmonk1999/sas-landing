import re

with open('index.html', encoding='utf-8') as f:
    content = f.read()

# Find hc_err occurrences and show following 250 chars
for m in re.finditer(r'hc_err:', content):
    start = m.start()
    print('---')
    print(repr(content[start:start+250]))
