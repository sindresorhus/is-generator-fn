'use strict';
const {toString} = Object.prototype;

module.exports = value => {
	if (typeof value !== 'function') {
		return false;
	}

	return (value.constructor && value.constructor.name === 'GeneratorFunction') ||
		toString.call(value) === '[object GeneratorFunction]' || 
		(value.constructor && value.constructor.name === 'AsyncGeneratorFunction') ||
		toString.call(value) === '[object AsyncGeneratorFunction]';
};

// TODO: Remove this for the next major release
module.exports.default = module.exports;
