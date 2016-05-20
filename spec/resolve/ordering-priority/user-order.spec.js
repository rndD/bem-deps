'use strict';

const test = require('ava');
const expect = require('chai').expect;

const resolve = require('../../../lib').resolve;

test('should save user order for ordered dependencies', () => {
    const decl = [{ block: 'A' }];
    const relations = [
        {
            entity: { block: 'A' },
            dependOn: [
                {
                    entity: { block: 'B' },
                    order: 'dependenceBeforeDependants'
                },
                {
                    entity: { block: 'C' },
                    order: 'dependenceBeforeDependants'
                }
            ]
        }
    ];

    const resolved = resolve(decl, relations);

    expect(resolved.entities).to.deep.equal([
        { block: 'B' },
        { block: 'C' },

        { block: 'A' }
    ]);
});

test('should save user order for unordered dependencies', () => {
    const decl = [{ block: 'A' }];
    const relations = [
        {
            entity: { block: 'A' },
            dependOn: [
                {
                    entity: { block: 'B' }
                },
                {
                    entity: { block: 'C' }
                }
            ]
        }
    ];

    const resolved = resolve(decl, relations);

    expect(resolved.entities).to.deep.equal([
        { block: 'A' },

        { block: 'B' },
        { block: 'C' }
    ]);
});