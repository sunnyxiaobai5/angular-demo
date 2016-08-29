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
                dest: 'build/build.js'
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
                    'build/build.min.css': [
                        'app/assets/styles/app.css'
                    ]
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
};