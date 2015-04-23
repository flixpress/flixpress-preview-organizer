module.exports = function (grunt) {
  'use strict';
  
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);
  // Show elapsed time at the end
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed MIT */\n',
    pathToServer: '/Volumes/MediaRobot', // No trailing slash
    folderOnServer: 'scripts/flixpress-preview-organizer', // No leading or trailing slash
    // Task configuration.
    clean: {
      dev: {
        src: ['.tmp']
      },
      dist: {
        files: ['dist','.tmp']
      }
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['src/<%= pkg.name %>.js'],
        dest: 'dist/jquery.<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/jquery.<%= pkg.name %>.min.js'
      }
    },
    qunit: {
      all: {
        options: {
          urls: ['http://localhost:9000/test/<%= pkg.name %>.html']
        }
      }
    },
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      gruntfile: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: 'Gruntfile.js'
      },
      src: {
        options: {
          jshintrc: 'src/.jshintrc'
        },
        src: ['src/**/*.js']
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/**/*.js']
      }
    },
    sass: {
      options: {
        sourcemap: 'none',
        compass: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src/sass',
          src: ['**.{scss,sass}'],
          dest: 'dist',
          ext: '.css'
        }]
      },
      dev: {
        files: [{
          expand: true,
          cwd: 'src/sass',
          src: ['**.{scss,sass}'],
          dest: '.tmp',
          ext: '.css'
        }]
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      src: {
        files: '<%= jshint.src.src %>',
        tasks: ['jshint:src', /*'qunit'*/]
      },
      sass: {
        files: 'src/**/*.{sass,scss}',
        tasks: ['sass:dev']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', /*'qunit'*/]
      },
      livereload: {
        options: {
          livereload: '<%= connect.server.options.livereload %>'
        },
        files: [
          'local-flixpress/*',
          'src/*',
          '.tmp/*'
        ]
      }
    },
    copy: {
      options: {
        timestamp: true
      },
      all: {
        files: [
          {
            expand: true,
            cwd: 'dist/',
            src: [
              '*.*' // can be many matching files or patterns
            ],
            dest: '<%= pathToServer %>/<%= folderOnServer %>/'
          }
        ]
      },
    },
    connect: {
      server: {
        options: {
          hostname: '*',
          port: 9000,
          livereload: 35728,
          open: {
            target: 'http://localhost:9000/local-flixpress/',
            appName: 'google chrome'
          }
        }
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['jshint', 'connect', /*'qunit',*/ 'clean', 'concat', 'uglify']);
  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });
  grunt.registerTask('serve', ['clean:dev', 'sass:dev', 'connect', 'watch']);
  // I'm not familiar with how testing works
  //grunt.registerTask('test', ['jshint', 'connect', 'qunit']);
};
