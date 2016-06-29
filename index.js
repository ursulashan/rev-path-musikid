//更改文件命名规则连接线为 _
'use strict';
var modifyFilename = require('modify-filename');

module.exports = function (pth, hash, namesplit) {
	var namesplit=namesplit?namesplit:'-';
	if (arguments.length < 2) {
		throw new Error('`path` and `hash` required');
	}

	return modifyFilename(pth, function (filename, ext) {
		return filename + namesplit + hash + ext;
	});
};

module.exports.revert = function (pth, hash, namesplit) {
	var namesplit=namesplit?namesplit:'-';
	if (arguments.length <2) {
		throw new Error('`path` and `hash` required');
	}

	return modifyFilename(pth, function (filename, ext) {
		return filename.replace(new RegExp(namesplit + hash + '$'), '') + ext;
	});
};
