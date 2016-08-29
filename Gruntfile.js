module.exports = function (grunt) {
    // Do grunt-related things in here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                //合并时每个文件之间插入该隔符
                separator: ';'
                //stripBanners: true
            },
            dist: {
                src: [
                    'app/demo/**/*.js',
                    'app/js/*.js',
                    'app/static/**/*.js',
                    'app/tpls/**/*.js'
                ],
                dest: 'app/build/build.js'
            }
        },
        uglify: {
            options: {
                //压缩后文件banner说明
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                //是否混淆 true:是，false:否
                mangle: true,
                compress: {
                    //是否删除console.*等函数调用
                    drop_console: true
                }
            },
            build: {
                src: 'app/build/build.js',
                dest: 'app/build/build.min.js'
            }
        },
        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            compress: {
                files: {
                    'app/build/build.min.css': [
                        'app/assets/styles/app.css'
                    ]
                }
            }
        },
        useminPrepare: {
            html: 'index.html',
            options: {
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglify'],
                            css: ['concat', 'cssmin']
                        },
                        post: {}
                    }
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

    //simple build task
    grunt.registerTask('build', [
        'useminPrepare',
        // 'concat:generated',
        // 'cssmin:generated',
        // 'uglify:generated',
        'concat',
        'cssmin',
        'uglify',
        // 'filerev',
        'usemin'
    ]);
};