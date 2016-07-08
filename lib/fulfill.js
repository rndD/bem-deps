'use strict';

const stream = require('stream');
const defaultFulfiller = require('./formats/deps.js/fulfill');

module.exports = function fulfill(fulfiller) {
    fulfiller || (fulfiller = defaultFulfiller);

    return new stream.Transform({
        objectMods: true,
        transform: function (entities, encoding, done) {
            this.push(fulfiller(entities.entity, entities.scope));
            done();
        }
    });
};
