import 'rxjs/add/observable/merge';
import { Dispatcher } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { OpaqueToken, Provider } from '@angular/core';
export declare const BOOTSTRAP_EFFECTS: OpaqueToken;
export declare function mergeEffects(...instances: any[]): Observable<any>;
export declare function connectEffectsToDispatcher(dispatcher: Dispatcher, effects: any[]): () => any;
export declare const CONNECT_EFFECTS_PROVIDER: Provider;
