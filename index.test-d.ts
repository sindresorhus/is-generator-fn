import {expectType} from 'tsd';
import isGeneratorFn = require('.');

expectType<boolean>(isGeneratorFn(function * () {return '🦄'}));
expectType<boolean>(isGeneratorFn(function * () {
	yield '🦄';
}));
expectType<boolean>(isGeneratorFn(null));
expectType<boolean>(isGeneratorFn(undefined));
expectType<boolean>(isGeneratorFn(() => {}));
expectType<boolean>(isGeneratorFn(''));
