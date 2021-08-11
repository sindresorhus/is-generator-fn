import {expectType} from 'tsd';
import isGeneratorFunction from './index.js';

// eslint-disable-next-line require-yield
expectType<boolean>(isGeneratorFunction(function * () {
	return '🦄';
}));
expectType<boolean>(isGeneratorFunction(function * () {
	yield '🦄';
}));
expectType<boolean>(isGeneratorFunction(null));
expectType<boolean>(isGeneratorFunction(undefined));
expectType<boolean>(isGeneratorFunction(() => {})); // eslint-disable-line @typescript-eslint/no-empty-function
expectType<boolean>(isGeneratorFunction(''));
