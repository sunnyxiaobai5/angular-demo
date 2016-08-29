module.exports = function (grunt) {
    // Do grunt-related things in here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                //�ϲ�ʱÿ���ļ�֮�����ø���
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
                //ѹ�����ļ�banner˵��
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                //�Ƿ���� true:�ǣ�false:��
                mangle: true,
                compress: {
                    //�Ƿ�ɾ��console.*�Ⱥ�������
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

    //����concat�����ںϲ�
    grunt.loadNpmTasks('grunt-contrib-concat');
    //����uglify������ѹ��
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //����cssmin������cssѹ�����ϲ�
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //ע��Ĭ��task
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