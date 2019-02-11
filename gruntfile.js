module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('test', ['jshint', 'gunit']);

    grunt.registerTask('default', ['jshint',  'gunit', 'concat', 'uglify']);
};