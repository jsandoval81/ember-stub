
'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //=================
        //== Watch files ==
        //=================
        watch: {
            //== Re-compile the LESS files to CSS after LESS updates
            less: {
                files: ['app/styles/less/*.less'],
                tasks: ['less:dev'],
                options: {
                    spawn: true
                }
            },
            //== Lint and re-build the CSS .min file after CSS updates
            css: {
                files: ['app/styles/*.css'],
                tasks: ['csslint:strict', 'concat:css', 'cssmin'],
                options: {
                    spawn: true
                }
            },
            //== Lint and re-build the client JS .min file after client JS updates
            clientjs: {
                files: ['app/**/*.js', '!app/assets/**/*.js'],
                tasks: ['concat:emberjs', 'jshint:clientjs', 'concat:appjs', 'uglify'],
                options: {
                    spawn: true
                }
            },
            //== Lint and run JS test code after updates
            testjs: {
                files: ['tests/unit/*.js'],
                tasks: ['jshint:testjs', 'karma:unit:run'],
                options: {
                    spawn: true
                }
            },
            handlebars: {
                files: ['app/templates/*.hbs'],
                tasks: ['emberTemplates'],
                options: {
                    spawn: true
                }
            },
            //== Reload the web page after updates to CSS, JS, and HTML builds (requires server app)
            livereload: {
                options: { livereload: true },
                files: ['app/assets/build/**/*.css', 'app/assets/build/**/*.js', 'app/*.html']
            }
        },

        //=====================
        //== LESS Processing ==
        //=====================
        less: {
            dev: {
                files: [
                    {
                        expand: true,
                        cwd: 'app/styles/less/',
                        src: ['global.less'],
                        dest: 'app/styles/',
                        ext: '.css'
                    }
                ]
            }
        },

        //==============
        //== CSS Lint ==
        //==============
        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            strict: {
                options: {
                    import: 2
                },
                src: ['app/styles/*.css']
            },
            lax: {
                options: {
                    import: false
                },
                src: ['app/styles/*.css']
            }
        },

        //=====================
        //== JavaScript Lint ==
        //=====================
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            //== Lint the client application file
            clientjs: ['app/assets/pre-build/ember-app.js'],
            //== Lint the unit test files
            testjs: ['tests/unit/*.js']
        },

        //=================================
        //== Handlebars template compile ==
        //=================================
        emberTemplates: {
            compile: {
                options: {
                   templateBasePath: 'app/templates/'
                },
                files: {
                    'app/templates/compiled/templates.js': ['app/templates/*.hbs']
                }
            }
        },

        //========================
        //== File concatination ==
        //========================
        concat: {
            //== Concat the CSS files
            css: {
                src: [
                    'bower_components/bootstrap/dist/css/bootstrap.css',
                    'app/styles/global.css',
                    'app/styles/style.css'
                ],
                dest: 'app/assets/build/css/application.css'
            },
            //== Concat the dependency JS libraries
            dependencyjs: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js',
                    'bower_components/handlebars/handlebars.js',
                    'bower_components/ember/ember.js',
                    'bower_components/ember-data/ember-data.js'
                ],
                dest: 'app/assets/pre-build/dependencies.js',
                nonull: true
            },
            //== Concat the Ember app JS files
            emberjs: {
                src: [
                    'app/app.js',
                    'app/routes/router.js'
                ],
                dest: 'app/assets/pre-build/ember-app.js',
                nonull: true
            },
            //== Concat the dependency files, app files, and template file
            appjs: {
                src: [
                    'app/assets/pre-build/dependencies.js',
                    'app/assets/pre-build/ember-app.js',
                    'app/templates/compiled/templates.js'
                ],
                dest: 'app/assets/build/js/application.js',
                nonull: true
            }
        },

        //======================
        //== CSS minification ==
        //======================
        cssmin: {
            minify: {
                expand: true,
                flatten: true,
                cwd:   'app/assets/build/css/',
                src:  ['application.css'],
                dest:  'app/assets/build/css/',
                ext:   '.min.css'
            }
        },

        //=============================
        //== JavaScript minification ==
        //=============================
        uglify: {
            options: {
                //report: 'gzip'
            },
            build: {
                src:  'app/assets/build/js/application.js',
                dest: 'app/assets/build/js/application.min.js'
            }
        },

        //=============================
        //== JavaScript client tests ==
        //=============================
        karma: {
            options: {
                configFile: 'karma.conf.js'
            },
            unit: {

            }
        }

    });

    //=============================
    //== Load Grunt NPM packages ==
    //=============================
    require('load-grunt-tasks')(grunt);

    //====================
    //== Register tasks ==
    //====================
    //== Default task
    grunt.registerTask('default', ['']);
    //== Test server task (Concat JS dependencies and start server)
    //grunt.registerTask('test-server', [ 'concat:testDependencies', 'karma:unit' ]);
    //== Test task (Lint and run JS tests)
    //grunt.registerTask('test', [ 'jshint:testjs', 'karma:unit:run' ]);
    //== Dev task (Prepare assets, start application, watch for changes)
    grunt.registerTask('dev', [ 'less:dev', 'csslint:strict', 'concat:css', 'cssmin', 'concat:dependencyjs', 'concat:emberjs', 'jshint:clientjs', 'emberTemplates', 'concat:appjs', 'uglify', 'watch' ]);

};