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
function toPayload(update) {
    return update.action;
}
exports.toPayload = toPayload;
function all() {
    return false;
}
exports.all = all;
//# sourceMappingURL=util.js.map