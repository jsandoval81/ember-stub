# ember-stub

This is a dead-simple Ember skeleton whose initial focus is on app structure, folder structure, build process, etc.

Ember CLI brought too much opinionated abstraction for me to use before I learned Ember itself. I took some ideas from Ember CLI regarding folder structure. For now, I'm just using a simple concatenation step rather than and AMD approach. That will change after I play around with Ember itself.

For now, the automation processes:

 * Concat the dependency files (Ember, jQuery, Handlbars, etc.)
 * Compile and concat the Handlebars templates into JS
 * Concat and Lint the application-specific source JS files
 * Concat and minify all of the above into a single application JS file
 
There is also other standard stuff, such as LESS pre-processing, CSS Linting, test support, etc.

Broccoli was not used (as it is in Ember CLI). If it becomes necessary later on then I will use it to replace some of the Grunt build steps.

### Framework versions
Ember 1.9 with Handlebars 2.0.

As of the initial commit these were the most recent stable builds of each. They were also the versions that were compatible with `grunt-ember-templates`, which is used for template compilation/concatenation.