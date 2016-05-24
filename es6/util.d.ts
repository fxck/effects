import { Action } from '@ngrx/store';
import { StateUpdate } from './state-updates';
export declare function flatten(list: any[]): any[];
export declare function toPayload(update: StateUpdate<any>): Action;
export declare function all(): boolean;
