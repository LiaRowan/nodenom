#!/usr/bin/env node
const shell = require('shelljs');

const nodenom = require('yargs') // eslint-disable-line no-unused-vars
  .command({
    command: '*',
    desc: 'remove node_modules directories',
    handler: deleteNodeModules,
  })
  .argv;

function deleteNodeModules() {
  shell.rm('-rf', './node_modules');
}
