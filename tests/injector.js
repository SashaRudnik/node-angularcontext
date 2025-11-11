'use strict';

const test = require('node:test');
const assert = require('node:assert');

const angularcontext = require('../lib/main.js');

async function loadFakeAngular(context) {
    return new Promise((resolve, reject) => {
        context.runFile(
            'res/fakeangular.js',
            function (result, error) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            }
        );
    });
}

test('injector provides fake services', async () => {
    const context = angularcontext.Context();
    try {
        await loadFakeAngular(context);
        const injector = context.injector(['ng']);

        assert.ok(injector, 'injector was returned');

        const fake = injector.get('anything');
        assert.ok(fake.fake, 'injector returns fake dependency');
    }
    finally {
        context.dispose();
    }
});
