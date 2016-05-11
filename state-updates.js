"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var withLatestFrom_1 = require('rxjs/operator/withLatestFrom');
var filter_1 = require('rxjs/operator/filter');
var store_1 = require('@ngrx/store');
var ReplaySubject_1 = require('rxjs/ReplaySubject');
var core_1 = require('@angular/core');
var StateUpdates = (function (_super) {
    __extends(StateUpdates, _super);
    function StateUpdates(actions$, state$) {
        var _this = this;
        _super.call(this, 1);
        withLatestFrom_1.withLatestFrom
            .call(actions$, state$)
            .subscribe(function (_a) {
            var action = _a[0], state = _a[1];
            _super.prototype.next.call(_this, { action: action, state: state });
        });
    }
    StateUpdates.prototype.next = function (update) { };
    StateUpdates.prototype.error = function (err) { };
    StateUpdates.prototype.complete = function () { };
    StateUpdates.prototype.whenAction = function (actionType) {
        return filter_1.filter.call(this, function (_a) {
            var action = _a.action;
            return action.type === actionType;
        });
    };
    StateUpdates = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof store_1.Dispatcher !== 'undefined' && store_1.Dispatcher) === 'function' && _a) || Object, (typeof (_b = typeof store_1.State !== 'undefined' && store_1.State) === 'function' && _b) || Object])
    ], StateUpdates);
    return StateUpdates;
    var _a, _b;
}(ReplaySubject_1.ReplaySubject));
exports.StateUpdates = StateUpdates;
exports.STATE_UPDATES_PROVIDER = new core_1.Provider(StateUpdates, {
    useClass: StateUpdates
});
//# sourceMappingURL=state-updates.js.map