module.exports = function(grunt) {


	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			compress: {
				files: {
					'./build/simple-share.min.js': ['./lib/simple-share.js']
				}
			}
		},
		jshint: {
			files: ['lib/*.js'],
		},
		watch: {
			scripts: {
				files: ['lib/*.js'],
				tasks: ['jshint', 'uglify:compress']
			}
		}

	});


	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jshint', 'uglify', 'watch']);

};