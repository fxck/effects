import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Action, Dispatcher, State } from '@ngrx/store';
import { Provider } from '@angular/core';
export interface StateUpdate<S> {
    state: S;
    action: Action;
}
export declare class StateUpdates<S> extends ReplaySubject<StateUpdate<S>> {
    constructor(actions$: Dispatcher, state$: State<S>);
    next(update: StateUpdate<S>): void;
    error(err: any): void;
    complete(): void;
    whenAction(...actionTypes: string[]): Observable<StateUpdate<S>>;
}
export declare const STATE_UPDATES_PROVIDER: Provider;
