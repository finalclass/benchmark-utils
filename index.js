'use strict';

module.exports.measureTime = function measureTime(msg, callback, thisArg) {
  if (module.exports.verbose) {
    var hrtime = process.hrtime();
    callback.call(thisArg);
    hrtime = process.hrtime(hrtime);
    console.log(msg, (hrtime[0] * 1e9 + hrtime[1]) * 1e-3 + 'µs');
  } else {
    callback.call(thisArg);
  }
};