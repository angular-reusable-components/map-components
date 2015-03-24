module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['browserify','jasmine'],
    reporters: ['progress', 'osx', 'mocha'],
    preprocessors: {
      'spec/**/*.js': [ 'browserify' ],
      'src/index.js': [ 'browserify' ]
    },
    browserify: {
      debug: true,
      transform: [ 'browserify-ngannotate', 'brfs'  ]
    },
    files: [
      './node_modules/angular/angular.js',
      './node_modules/angular-mocks/angular-mocks.js',
      'src/index.js',
      'spec/**/*_spec.js'
    ]
  });
};
