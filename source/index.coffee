'use strict'

selenium = require 'selenium-webdriver'

geckodriver = require('geckodriver').path
customGecko = selenium.Capabilities.phantomjs()
customGecko.set "firefox.binary.path", geckodriver

Driver = ->
  @.use = new selenium.Builder()
    .withCapabilities customGecko
    .build()
  @.use.getWindowHandle()
  true

Driver.prototype.close = ->
  @.use.quit()

module.exports = Driver
