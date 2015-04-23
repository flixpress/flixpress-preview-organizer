module.exports = function (grunt) {
  'use strict';
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Configurable paths
    pathToServer: '/Volumes/MediaRobot',
    helpPath: 'help',
    watch: {
      sass: {
        files: ['files/**/*.{scss,sass}'],
        tasks: ['sass']
      },
      javascript: {
        files: ['files/**/*.js'],
        tasks: ['jshint:all', 'copy:javascript']
      },
      html: {
        files: ['files/**/*.html'],
        tasks: ['copy:html']
      },
      css: {
        files: ['files/**/*.css'],
        tasks: ['copy:css']
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          // '<%= pathToServer %>/destination.css': 'files/source.scss'
        }
      }
    },
    // autoprefixer: {
    //   options: {
    //     browsers: ['last 2 versions']
    //   },
    //   dist: {
    //     files: [{
    //       expand: true,
    //       cwd: 'files',
    //       src: '**/*.css',
    //       dest: '<%= yeoman.dist %>/css'
    //     }]
    //   },
    // },
    copy: {
      options: {
        timestamp: true
      },
      javascript: {
        files: [
          {
            expand: true,
            cwd: 'files/',
            src: [
              '*.js' // can be many matching files or patterns
            ],
            dest: '<%= pathToServer %>/<%= helpPath %>/'
          }
        ]
      },
      html: {
        files: [
          {
            expand: true,
            cwd: 'files/',
            src: [
              '*.html' // can be many matching files or patterns
            ],
            dest: '<%= pathToServer %>/<%= helpPath %>/'
          }
        ]
      },
      css: {
        files: [
          {
            expand: true,
            cwd: 'files/',
            src: [
              '*.css' // can be many matching files or patterns
            ],
            dest: '<%= pathToServer %>/<%= helpPath %>/'
          }
        ]
      },
    },
    jshint: {
      options: {
        reporter: require('jshint-stylish'),
        globals: {
          jQuery: true,
          debug: true
        }
      },
      gruntfile: {
        files: {
          src: ['Gruntfile.js']
        },
      },
      all: [
        'files/**/*.js'
      ]
    },
  });

  grunt.registerTask('default', [
    'jshint:gruntfile',
    'watch'
  ]);
};
