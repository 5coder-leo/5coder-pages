# 5coder-pages

[![Build Status][travis-image]][travis-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![NPM Version][version-image]][version-url]
[![License][license-image]][license-url]
[![Dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

> static web app workflow

## Installation

```shell
$ npm install 5coder-pages

# or yarn
$ yarn add 5coder-pages
```

## Usage

<!-- TODO: Introduction of API use -->

```javascript
const 5CoderPages = require('5coder-pages')
const result = 5CoderPages('zce')
// result => 'zce@zce.me'
```

## API

<!-- TODO: Introduction of API -->

### 5CoderPages(name[, options])

#### name

- Type: `string`
- Details: name string

#### options

##### host

- Type: `string`
- Details: host string
- Default: `'zce.me'`

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; Leo <19924519007@163.com>



[travis-image]: https://img.shields.io/travis/leo/5coder-pages/master.svg
[travis-url]: https://travis-ci.org/leo/5coder-pages
[downloads-image]: https://img.shields.io/npm/dm/5coder-pages.svg
[downloads-url]: https://npmjs.org/package/5coder-pages
[version-image]: https://img.shields.io/npm/v/5coder-pages.svg
[version-url]: https://npmjs.org/package/5coder-pages
[license-image]: https://img.shields.io/github/license/leo/5coder-pages.svg
[license-url]: https://github.com/leo/5coder-pages/blob/master/LICENSE
[dependency-image]: https://img.shields.io/david/leo/5coder-pages.svg
[dependency-url]: https://david-dm.org/leo/5coder-pages
[devdependency-image]: https://img.shields.io/david/dev/leo/5coder-pages.svg
[devdependency-url]: https://david-dm.org/leo/5coder-pages?type=dev
[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: https://standardjs.com
