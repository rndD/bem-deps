'use strict';

const test = require('ava');
const fulfill = require('../../lib/formats/deps.js/fulfill');

test('fulfull should support cut left from scope', t => {
    const entity = { elem: 'elem' };
    const scope = { block: 'block', elem: 'elem2', mod: 'mod', val: 'val' };

    t.deepEqual(fulfill(entity, scope), {
        block: 'block', elem: 'elem'
    });
});

test('entity should dominate under scope', t => {
    const entity = { block: 'block' };
    const scope = { block: 'scopeBlock' };

    t.deepEqual(fulfill(entity, scope), { block: 'block' });
});

test('entity should grab underlying scope', t => {
    const entity = { elem: 'elem' };
    const scope = { block: 'block' };

    t.deepEqual(fulfill(entity, scope), { block: 'block', elem: 'elem' });
});
