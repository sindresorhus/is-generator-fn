import test from 'ava';
import isGeneratorFn from '.';

test('main', t => {
	t.true(isGeneratorFn(async function * () {}));
	t.true(isGeneratorFn(async function * () {
		yield Promise.resolve('unicorn');
	}));
	t.true(isGeneratorFn(function * () {}));
	t.true(isGeneratorFn(function * () {
		yield 'unicorn';
	}));
	t.false(isGeneratorFn(null));
	t.false(isGeneratorFn(undefined));
	t.false(isGeneratorFn(() => {}));
	t.false(isGeneratorFn(''));
});
