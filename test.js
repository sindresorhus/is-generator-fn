import test from 'ava';
import isGeneratorFunction from './index.js';

test('main', t => {
	t.true(isGeneratorFunction(function * () {}));
	t.true(isGeneratorFunction(function * () {
		yield 'unicorn';
	}));
	t.false(isGeneratorFunction(null));
	t.false(isGeneratorFunction(undefined));
	t.false(isGeneratorFunction(() => {}));
	t.false(isGeneratorFunction(''));
});
