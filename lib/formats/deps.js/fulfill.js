'use strict';

module.exports = function (entity, scope) {
    let result = entity;
    let seq = {
        block: ['elem', 'mod', 'val'],
        elem: ['mod', 'val'],
        mod: ['val'],
        val: []
    };

    for (let scopeKey of Object.keys(scope)) {
        if (!result[scopeKey]) {
            for (let seqNext of seq[scopeKey]) {
                if (result[seqNext]) {
                    result[scopeKey] = scope[scopeKey];
                    break;
                }
            }
        }
    }

    return result;
};
