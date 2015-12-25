'use strict';

const pathize = require('pathize-url');
const path = require('path');

module.exports = function (u) {
	const p = pathize(u);

	p.username = p.paths[0];
	p.repo = p.paths[1];

	if (p.root === 'raw.githubusercontent.com') {
		p.type = 'blob';
		p.branch = p.paths[2];
		p.dir = p.paths.slice(3, -1).join(path.sep);
	} else if (p.root === 'github.com') {
		p.type = p.paths[2];
		p.branch = p.paths[3];
		p.dir = p.paths.slice(4, -1).join(path.sep);
	} else {
		throw new TypeError('Unknown github host');
	}

	return p;
};
