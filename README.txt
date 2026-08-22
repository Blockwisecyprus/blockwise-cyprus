BlockWise Cyprus - Mobile Menu Fix V37

I found the exact problem: v27.css contained `.main-nav{display:flex!important;}`.
That rule overrode the normal mobile rule that hides the dropdown until the hamburger is pressed.

This package fixes the behaviour so that on phones/tablets:
- the menu is CLOSED by default
- tapping the hamburger OPENS it
- tapping the X closes it
- tapping a menu item closes it
- the menu keeps the correct order:
  Home, About, Our Approach, Property Care, Building Admin, Yacht Care, Contact
- the menu can scroll vertically on short screens

Upload all files in this ZIP to the ROOT of the GitHub Pages repository and overwrite the existing files.
The HTML pages now load v27.css?v=37 and v27.js?v=37 so mobile browsers do not keep the old cached version.
