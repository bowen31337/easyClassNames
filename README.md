# easyClassNames

This is a simplified version of [classnames](https://github.com/JedWatson/classnames) with high performance in ES6.

## Installation

### Node JS (>=8.4.0)

```bash
    npm install easy-classnames
    or
    yarn add easy-classnames
```

### browser

```js
<script src="https://unpkg.com/easy-classnames@1.0.0/dist/easyClassNames.umd.js" />
```

## Usage

### ES Modules

```js
import classnames from 'easy-classnames'
```

### common js

```js
const classnames = require('easy-classnames')
```

### browser

```js
var classnames = window.easyClassNames
```

## Usage

### easyClassnames only support an object as argument to achieve the best performance without speed penalty.

```js
classNames({ foo: true, bar: true }) // => 'foo bar'
```

## License

MIT
