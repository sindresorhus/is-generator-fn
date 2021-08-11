# is-generator-fn

> Check if something is a [generator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)

## Install

```
$ npm install is-generator-fn
```

## Usage

```js
import isGeneratorFunction from 'is-generator-fn';

isGeneratorFunction(function * () {});
//=> true

isGeneratorFunction(function () {});
//=> false
```

## Related

- [is](https://github.com/sindresorhus/is) - Type check values
