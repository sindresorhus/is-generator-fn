'use strict';
const {toString} = Object.prototype;

module.exports = value => {
	if (typeof value !== 'function') {
		return false;
	}

	return (value.constructor && value.constructor.name === 'GeneratorFunction') ||
		toString.call(value) === '[object GeneratorFunction]';
};

module.exports.default = module.exports;
