import test from 'ava';
import fn from './';

test(t => {
	let pu = fn('https://raw.githubusercontent.com/ragingwind/mobile-chromeapp-starter-kit/patch/app.js');
	t.is(pu.root, 'raw.githubusercontent.com');
	t.is(pu.username, 'ragingwind');
	t.is(pu.repo, 'mobile-chromeapp-starter-kit');
	t.is(pu.type, 'blob');
	t.is(pu.branch, 'patch');
	t.is(pu.dir, '');
	t.is(pu.base, 'app.js');

	pu = fn('https://raw.githubusercontent.com/ragingwind/mobile-chromeapp-starter-kit/patch/gulpfile.js');
	t.is(pu.type, 'blob');
	t.is(pu.base, 'gulpfile.js');

	pu = fn('https://github.com/ragingwind/mobile-chromeapp-starter-kit/tree/master/src');
	t.is(pu.root, 'github.com');
	t.is(pu.type, 'tree');
	t.is(pu.dir, '');
	t.is(pu.base, 'src');

	pu = fn('https://github.com/ragingwind/mobile-chromeapp-starter-kit/blob/master/src/platform/config.xml');
	t.is(pu.type, 'blob');
	t.is(pu.branch, 'master');
	t.is(pu.dir, 'src/platform');
	t.is(pu.base, 'config.xml');

	t.end();
});
