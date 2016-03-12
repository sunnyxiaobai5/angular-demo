module.exports = function (grunt) {
    // Do grunt-related things in here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                //separator: ';',
                //stripBanners: true
            },
            dist: {
                src: [
                    'app/demo/**/*.js',
                    'app/js/*.js',
                    'app/static/**/*.js',
                    'app/tpls/**/*.js'
                ],
                dest: 'build/build.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'build/build.js',
                dest: 'build/build.min.js'
            }
        },
        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            compress: {
                files: {
                    'build/assets/css/default.css': [
                        'app/css/app.css',
                        'css/pops.css',
                        'css/index.css'
                    ]
                }
            }
        }
    });

    //载入concat，用于合并
    grunt.loadNpmTasks('grunt-contrib-concat');
    //载入uglify，用于压缩
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //载入cssmin，用于css压缩及合并
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //注册默认task
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};