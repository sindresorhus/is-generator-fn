import test from 'ava';
import fn from './';

test(t => {
	t.true(fn(function * () {}));

	t.true(fn(function * () {
		yield 'unicorn';
	}));

	t.false(fn(null));
	t.false(fn(undefined));
	t.false(fn(function () {}));
	t.false(fn(''));

	t.end();
});
