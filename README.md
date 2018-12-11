Author: Lia Vernaet

Languages: HTML, CSS, JS

Plugins and tools: Gulp, Sass

This is a prototype for the All Nations University College Student Portal. 

The tools used in this program are Gulp, Sass, and JavaScript objects.

Gulp condenses the final CSS file. Sass is used to unite the individual SCSS models and compile them into the single CSS document. As the other SCSS files are imported into the main SCSS file, any changes to one will effect the main CSS document.

To continue with updates to the CSS, run this command in your terminal: sass --watch sass/main.scss:css/connect.css

Information such as professor, course info, and images are stored in their own JS objects. These objects can be transfered into the HTML through the main JavaScript document to fill the page content.
