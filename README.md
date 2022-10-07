# Express Request Size
[![npm](https://img.shields.io/npm/v/express-request-size?style=flat-square)](https://www.npmjs.com/package/express-request-size)
![npm type definitions](https://img.shields.io/npm/types/express-request-size?style=flat-square)
[![Coverage Status](https://img.shields.io/badge/dynamic/json?style=flat-square&color=brightgreen&label=coverage&suffix=%25&query=%24.covered_percent&url=https%3A%2F%2Fcoveralls.io%2Fgithub%2FMaytha8%2Fexpress-request-size.json)](https://coveralls.io/github/Maytha8/express-request-size?branch=main)
[![GitHub](https://img.shields.io/github/license/Maytha8/express-request-size?style=flat-square)](https://github.com/Maytha9/express-request-size/blob/main/LICENSE)

A middleware for Express that determines the size of each request in bytes.

## Install
This package is available on npm as [express-request-size](https://www.npmjs.com/package/express-request-size).
Therefore, it can be installed using the following command:
```sh
npm install express-request-size
```
or, if you're using yarn or pnpm:
```sh
yarn add express-request-size
pnpm install express-request-size
```

## Usage
This middleware adds the `size` property to the request object.

Example usage:
```js
const express = require('express');
const requestSize = require('express-request-size');

const app = express();
app.use(requestSize());

app.get('/', function(req, res) {
    // The request size will be available as req.size
});
// ...
```

This middleware also comes in with built-in types for use in Typescript:
```ts
import express from 'express';
import requestSize from 'express-request-size');

const app = express();
app.use(requestSize());

app.get('/', function(req, res) {
    // The request size will be available as req.size
});
// ...
```

## License
[MIT](https://github.com/Maytha9/express-request-size/blob/main/LICENSE)
