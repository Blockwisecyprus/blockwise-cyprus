HOME PAGE Yacht Care Greek translation fix

Upload ONLY these 2 files to the root of your GitHub Pages repository:
1. index.html
2. v27.js

Overwrite both existing files.
The bug was in v27.js: the page used data-v27-i18n attributes but the script was reading v20I18n.
The corrected index.html loads v27.js?v=35 to bypass browser cache.
