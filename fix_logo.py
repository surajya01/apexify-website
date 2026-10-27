import os
import glob

html_files = glob.glob('*.html')
for f in html_files:
    try:
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Replace the problematic inline style
        updated_content = content.replace(' style="filter: brightness(0) invert(1);"', '')
        
        if content != updated_content:
            with open(f, 'w', encoding='utf-8') as file:
                file.write(updated_content)
            print(f"Updated {f}")
    except Exception as e:
        print(f"Error processing {f}: {e}")
