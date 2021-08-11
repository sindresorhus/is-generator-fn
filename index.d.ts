/**
Check if something is a generator function.

@example
```
import isGeneratorFunction from 'is-generator-fn';

isGeneratorFunction(function * () {});
//=> true

isGeneratorFunction(function () {});
//=> false
```
*/
export default function isGeneratorFunction(value: unknown): value is GeneratorFunction;
