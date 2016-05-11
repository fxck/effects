"use strict";
function flatten(list) {
    return list.reduce(function (items, next) {
        if (Array.isArray(next)) {
            return items.concat(flatten(next));
        }
        return items.concat(next);
    }, []);
}
exports.flatten = flatten;
//# sourceMappingURL=util.js.map