// Generated by CoffeeScript 1.12.3
(function() {
  'use strict';
  var spec;

  spec = require('ddry/modular')();

  spec.apply({
    title: 'Selenium FireFox testing',
    spec: 'spec',
    matchers: 'ddry-selenium-matchers',
    moduleTitles: {
      firefox: 'Selenium FireFox testing',
      instance: 'FireFox driver as it is'
    },
    outside: {
      firefox: 'index',
      instance: 'index'
    },
    use: ['firefox'],
    initial: {
      instance: []
    }
  });

}).call(this);
