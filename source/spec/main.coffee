'use strict'

spec = require('ddry/modular')()

spec.apply
  title: 'Selenium FireFox testing'
  spec: 'spec'
  matchers: 'ddry-selenium-matchers'
  moduleTitles:
    firefox: 'Selenium FireFox testing'
    instance: 'FireFox driver as it is'
  outside:
    firefox: 'index'
    instance: 'index'
  use: [ 'firefox' ]
  initial:
    instance: []
