cordova.define("maxrocky-plugins-deviceId.MRDeviceId", function(require, exports, module) { var cordova = require('cordova');

var MRDeviceId = function() {};
MRDeviceId.prototype.getDeviceId = function(success, error) {
	cordova.exec(success, error, 'MRDeviceId', 'getDeviceId', []);
}

var MRDeviceId = new MRDeviceId();
module.exports = MRDeviceId;

});
