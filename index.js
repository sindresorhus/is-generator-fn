const {toString} = Object.prototype;

export default function isGeneratorFunction(value) {
	if (typeof value !== 'function') {
		return false;
	}

	return (value.constructor && value.constructor.name === 'GeneratorFunction')
		|| toString.call(value) === '[object GeneratorFunction]';
}
