module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            options: {
                configFile: 'karma.conf.js',
            },
            ci: {
                singleRun: true,
            },
            dev: {
                reporters: 'dots'
            }
        }
    });
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('default', ['karma:dev']);
}