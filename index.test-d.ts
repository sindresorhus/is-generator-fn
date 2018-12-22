import {expectType} from 'tsd-check';
import isGeneratorFn from '.';

expectType<boolean>(isGeneratorFn(function * () {}));
expectType<boolean>(isGeneratorFn(function * () {
	yield 'unicorn';
}));
expectType<boolean>(isGeneratorFn(null));
expectType<boolean>(isGeneratorFn(undefined));
expectType<boolean>(isGeneratorFn(() => {}));
expectType<boolean>(isGeneratorFn(''));
