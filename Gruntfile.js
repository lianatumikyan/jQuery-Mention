module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express: {
            all: {
                options: {
                    bases: ['.'],
                    port: 9000,
                    hostname: "localhost",
                    livereload: true
                }
            }
        },
        watch: {
            all: {
                files: '**/*.*',
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express');
    grunt.registerTask('default', ['express', 'watch'])
};
