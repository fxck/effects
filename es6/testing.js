import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Provider } from '@angular/core';
import { StateUpdates } from './state-updates';
export class MockStateUpdates extends ReplaySubject {
    constructor() {
        super();
    }
    send(state, action) {
        this.next({ state, action });
    }
    sendAction(action) {
        this.next({ state: null, action });
    }
    sendState(state) {
        this.next({ state, action: null });
    }
}
export const MOCK_EFFECTS_PROVIDERS = [
    new Provider(MockStateUpdates, {
        useClass: MockStateUpdates
    }),
    new Provider(StateUpdates, {
        useExisting: MockStateUpdates
    })
];
//# sourceMappingURL=testing.js.map