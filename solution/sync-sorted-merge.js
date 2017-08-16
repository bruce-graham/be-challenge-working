'use strict'

const arraySort = require('array-sort');

module.exports = (logSources, printer) => {
  arraySort(logSources, 'date')
    .forEach( log => {
      printer.print(log);
    });

  printer.done();
};