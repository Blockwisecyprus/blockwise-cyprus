Greek Yacht Care translation fix

Upload these 2 files to the ROOT of your GitHub Pages repository and overwrite the existing files:
1. v27.js
2. yacht-care.html

The problem was a JavaScript attribute-name mismatch, so the Yacht Care Greek translations existed but were not being applied.
The yacht-care page now loads the corrected script with ?v=33 to avoid browser cache.
