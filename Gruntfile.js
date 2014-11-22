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
        },
        connect: serverConfig()
    });
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('serve', ['connect:server']);
    grunt.registerTask('default', ['karma:dev']);
}

function serverConfig() {
    return {
        server: {
            options: {
                port: 3333,
                keepalive: true,
                debug: true
            }
        }
    };
}