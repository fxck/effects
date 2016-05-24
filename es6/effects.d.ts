import 'rxjs/add/observable/merge';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { OpaqueToken, Provider } from '@angular/core';
export declare const BOOTSTRAP_EFFECTS: OpaqueToken;
export declare function mergeEffects(...instances: any[]): Observable<any>;
export declare function connectEffectsToStore(store: Store<any>, effects: any[]): () => Promise<boolean>;
export declare const CONNECT_EFFECTS_PROVIDER: Provider;
