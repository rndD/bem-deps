'use strict';

const stream = require('stream');
const defaultNormalizer = require('./formats/deps.js/normalize');

module.exports = function normalize(normalizer) {
    normalizer || (normalizer = defaultNormalizer);

    var transform = new stream.Transform({ objectMode: true });

    transform._transform = function (entityDeps, encoding, done) {
        this.push(normalizer(entityDeps));
        done();
    };

    return transform;
};
