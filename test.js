import test from 'ava';
import m from './';

test(t => {
	t.true(m(function * () {}));
	t.true(m(function * () {
		yield 'unicorn';
	}));
	t.false(m(null));
	t.false(m(undefined));
	t.false(m(() => {}));
	t.false(m(''));
});
