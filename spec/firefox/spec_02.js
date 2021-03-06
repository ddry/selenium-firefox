// Generated by CoffeeScript 1.12.3
(function() {
  'use strict';
  module.exports = function(dd, that) {
    return context("FireFox Selenium testing with 'text' general matcher", function() {
      before(function() {
        return that.get("http://localhost:3333");
      });
      after(function() {
        return that.close();
      });
      return dd.drive({
        it: function(i, e) {
          return i + " tag contains " + e;
        },
        matcher: 'selenium_text',
        data: [
          {
            i: {
              'Header title': {
                css: 'h1 span'
              }
            },
            e: {
              'Brunch title': 'Brunch'
            }
          }, {
            i: {
              'Header subtitle': {
                css: 'h1 small'
              }
            },
            e: {
              'Brunch subtitle': '• A simple demo'
            }
          }, {
            i: {
              'Paragraph': {
                css: 'h1 + p'
              }
            },
            e: {
              'paragraph text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            }
          }, {
            i: {
              'Subheader': {
                css: 'h2'
              }
            },
            e: {
              'ToDo list title': 'Things to do:'
            }
          }, {
            i: {
              'First ToDo list item': {
                css: 'ul#mainTodo li'
              }
            },
            e: {
              'first ToDo': 'Learn Brunch'
            }
          }, {
            i: {
              'Second ToDo list item': {
                css: 'ul#mainTodo li+li'
              }
            },
            e: {
              'second ToDo': 'Apply to my projects'
            }
          }, {
            i: {
              'Third ToDo list item': {
                css: 'ul#mainTodo li+li+li'
              }
            },
            e: {
              'third ToDo': '…'
            }
          }, {
            i: {
              'Fourth ToDo list item': {
                css: 'ul#mainTodo li+li+li+li'
              }
            },
            e: {
              'fourth ToDo': 'Profit!'
            }
          }
        ]
      });
    });
  };

}).call(this);
