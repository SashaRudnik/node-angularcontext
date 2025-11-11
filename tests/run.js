'use strict';

const test = require('node:test');
const assert = require('node:assert');

const angularcontext = require('../lib/main.js');

async function runFile(context, fileName) {
    return new Promise((resolve, reject) => {
        context.runFile(
            fileName,
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

test('runFile executes file without error', async () => {
    const context = angularcontext.Context();
    try {
        await assert.doesNotReject(() => runFile(context, 'res/fakeangular.js'));
    }
    finally {
        context.dispose();
    }
});
