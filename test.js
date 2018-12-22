import test from 'ava';
import isGeneratorFn from '.';

test('main', t => {
	t.true(isGeneratorFn(function * () {}));
	t.true(isGeneratorFn(function * () {
		yield 'unicorn';
	}));
	t.false(isGeneratorFn(null));
	t.false(isGeneratorFn(undefined));
	t.false(isGeneratorFn(() => {}));
	t.false(isGeneratorFn(''));
});
