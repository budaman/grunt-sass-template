module.exports = function(grunt) {
  grunt.initConfig({
    //basic settings
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      combine: {
        files: {
          'html/dist/css/styles.css' : ['html/css/**/*.css']
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'html/dist/js/scripts.js' : ['html/js/**/*.js']
        }
      }
    },
    concat: {
      js: {
        src: ['html/js/*.js'],
        dest: 'html/dist/js/scripts.js'
      },
      css: {
        src: ['html/css/*.css'],
        dest: 'html/dist/css/styles.css'
      }
    },
    sass: {
      build: {
        files: [{
          src: 'html/sass/styles.scss',
          dest: 'html/css/styles.css'
        }]
      }
    },
    watch: {
      sass: {
        files: ['html/sass/*.scss'],
        tasks: ['sass']
      },
      js: {
        files: ['html/js/**/*.js'],
        tasks: ['concat:js'],
      },
      css: {
        files: ['html/css/**/*.css'],
        tasks: ['concat:css'],
      }
    }
  })
  //load plug in
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-sass')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-express')
  //Do the task
  grunt.registerTask('app', ['sass', 'concat', 'watch'])
}
