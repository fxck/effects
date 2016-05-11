"use strict";
require('rxjs/add/observable/merge');
var store_1 = require('@ngrx/store');
var Observable_1 = require('rxjs/Observable');
var core_1 = require('@angular/core');
var metadata_1 = require('./metadata');
var util_1 = require('./util');
exports.BOOTSTRAP_EFFECTS = new core_1.OpaqueToken('@ngrx/effects Bootstrap Effects');
function mergeEffects() {
    var instances = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        instances[_i - 0] = arguments[_i];
    }
    var observables = instances.map(function (i) { return metadata_1.getEffectKeys(i).map(function (key) { return i[key]; }); });
    return Observable_1.Observable.merge.apply(Observable_1.Observable, util_1.flatten(observables));
}
exports.mergeEffects = mergeEffects;
function connectEffectsToDispatcher(dispatcher, effects) {
    return function () {
        mergeEffects.apply(void 0, effects).subscribe(dispatcher);
        return Promise.resolve(true);
    };
}
exports.connectEffectsToDispatcher = connectEffectsToDispatcher;
exports.CONNECT_EFFECTS_PROVIDER = new core_1.Provider(core_1.APP_INITIALIZER, {
    multi: true,
    deps: [store_1.Dispatcher, exports.BOOTSTRAP_EFFECTS],
    useFactory: connectEffectsToDispatcher
});
//# sourceMappingURL=effects.js.map