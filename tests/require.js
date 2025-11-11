'use strict';

const test = require('node:test');
const assert = require('node:assert');

const angularcontext = require('../lib/main.js');

test('module can be required', () => {
    assert.ok(angularcontext, 'angularcontext is truthy');
});
