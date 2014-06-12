#!/usr/bin/env node
var tTest = require('transformer-test');
var conv = require('./');

// run stock conversion tests, and try expected input/output pairs
var test = tTest.conversion(conv, [
  ['YmVlcCBib29w', new Buffer('beep boop', 'ascii')]
])
