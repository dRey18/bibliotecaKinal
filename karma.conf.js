// Karma configuration file, see link for more information
<<<<<<< HEAD
// https://karma-runner.github.io/1.0/config/configuration-file.html
=======
// https://karma-runner.github.io/0.13/config/configuration-file.html
>>>>>>> 72df6c0... profile

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
<<<<<<< HEAD
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/biblioteca-kinal'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
=======
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, 'coverage'), reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    
>>>>>>> 72df6c0... profile
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
<<<<<<< HEAD
    singleRun: false,
    restartOnFileChange: true
=======
    singleRun: false
>>>>>>> 72df6c0... profile
  });
};
