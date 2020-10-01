const sh = require('shelljs');
const path = require('path');

const destPath = path.resolve(path.dirname(__filename), '../docs');

sh.rm('-rf', `${destPath}/*`)
