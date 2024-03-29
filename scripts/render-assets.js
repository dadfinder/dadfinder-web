'use strict';
const fs = require('fs');
const path = require('path');
const sh = require('shelljs');

module.exports = function renderAssets() {
    const sourcePath = path.resolve(path.dirname(__filename), '../src/assets');
    const destPath = path.resolve(path.dirname(__filename), '../docs/.');

    sh.cp('-R', sourcePath, destPath)
    sh.cp('-R', path.resolve(path.dirname(__filename), '../src/CNAME'), destPath)
};
