'use strict';

const test = require('node:test');
const assert = require('node:assert');

const angularcontext = require('../lib/main.js');

test('onDispose callbacks are invoked with context', () => {
    const context = angularcontext.Context();
    let callbacks = 0;
    let passedContext;

    context.onDispose((ctx) => {
        callbacks++;
        passedContext = ctx;
    });

    context.onDispose(() => {
        callbacks++;
    });

    context.dispose();

    assert.strictEqual(passedContext, context, 'onDispose receives context instance');
    assert.strictEqual(callbacks, 2, 'both callbacks were invoked');
});
