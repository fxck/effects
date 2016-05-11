import { Action, Dispatcher, State } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Provider } from '@angular/core';
export interface StateUpdate {
    state: any;
    action: Action;
}
export declare class StateUpdates extends ReplaySubject<StateUpdate> {
    constructor(actions$: Dispatcher, state$: State<any>);
    next(update: StateUpdate): void;
    error(err: any): void;
    complete(): void;
    whenAction(actionType: string): Observable<StateUpdate>;
}
export declare const STATE_UPDATES_PROVIDER: Provider;
