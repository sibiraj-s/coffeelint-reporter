'use-strict';

module.exports = function (grunt) {

    grunt.initConfig({
        eslint: {
            target: [
                'coffeelint-reporte.js',
                'scripts/**/*.js',
                'Gruntfile.js'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('default', ['eslint']);

};
