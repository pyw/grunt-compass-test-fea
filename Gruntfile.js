module.exports = function (grunt) {
	var config = {
		pkg: grunt.file.readJSON('component.json'),
		
		watch: {
  		files: 'src/*',
  	  tasks: ['compass']
  	},

		bower: {
			install: {
				options: {
					targetDir: 'src/vendor/',
					cleanup: true
				}
			}
		},
		
		sass: {
			dist: {
				files: {
			  	'dist/reset.css': 'src/reset.scss'
			  }
			}
		},
		compass: {                  // Task
		    dist: {                   // Target
		      options: {              // Target options
		        relativeAssets: true,
						sassDir: 'src',
						cssDir: 'dist',
		        environment: 'production',
						outputStyle: 'expanded',
						imagesDir: 'img'
						
		      }
		    }
		},
		styleguide: {

			options: {
		    // global options
		  },

		  styledocco: {

		  	options: {
		    	framework: {
						name: 'styledocco'
					},
					
					overwrite: 'overwrite',

					name: 'Style Guide',

					template: {
						include: ['dist/reset.css']
					}
		    },

		    files: {
		    	'doc/': 'src/*.scss'      
		    }

		  }

		}
		
  }

	grunt.initConfig(config);
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-styleguide');
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('install', ['bower']);
  grunt.registerTask('build', 'sass');

};
