# underscore-to-camelcase

Underscore and camelCase naming styles interchangeable.

## Install

```
npm i underscore-to-camelcase
or
yarn add underscore-to-camelcase
```

## Usage

```javascript
// convert to camelcase
import convert from "underscore-to-camelcase";
const data = [{ first-name: 1, last-time: '10:10' }]
convert(data, 'camelcase') // [{ firstName: 1, lastTime: '10:10' }]

// convert to underscore
import convert from "underscore-to-camelcase";
const data = [{ firstName: 1, lastTime: '10:10' }]
convert(data, 'underscore') // [{ first-name: 1, last-time: '10:10' }]

// convert a single string
import { formatCamelcase, formatUnderscore } from "underscore-to-camelcase";
formatCamelcase('first-name') // firstName
formatUnderscore('firstName') // first-name
```

### API

```javascript

```
