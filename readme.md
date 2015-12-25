# pathize-github-url [![Build Status](https://travis-ci.org/ragingwind/pathize-github-url.svg?branch=master)](https://travis-ci.org/ragingwind/pathize-github-url)

> Parse URL and return result with username, repo, type, branch, filename of github


## Install

```
$ npm install --save pathize-github-url
```


## Usage

```js
const pathizeGithubUrl = require('pathize-github-url');

pathizeGithubUrl('https://raw.githubusercontent.com/ragingwind/mobile-chromeapp-starter-kit/patch/gulpfile.js');
//=>
{
	root: 'raw.githubusercontent.com',
	dir: '',
	base: 'gulpfile.js',	// file or dir
	name: 'gulpfile',
	ext: '.js',
	paths: [Array],
	url: [Object],
	username: 'ragingwind',	 // username or organization of github url
	repo: 'mobile-chromeapp-starter-kit',	// repo name of github url
	type: 'blob',	// type of github url
	branch: 'patch'	// branch name of github url
}

pathizeGithubUrl('https://github.com/ragingwind/mobile-chromeapp-starter-kit/blob/master/src/platform/config.xml');
//=>
{
	root: 'github.com',
	dir: 'src/platform',
	base: 'config.xml',
	name: 'config',
	ext: '.xml',
	paths: [Array],
	url: [Object],
	username: 'ragingwind',
	repo: 'mobile-chromeapp-starter-kit',
	type: 'blob',
	branch: 'master'
}
```

## API

### pathizeGithubUrl(url)

Type: `string`

URL related to github to parse.

## License

MIT © [ragingwind](http://ragingwind.me)
