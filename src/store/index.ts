import { createStore, Store } from 'redux';
import { ContactsState } from './ducks/contacts/types';

import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
  contacts: ContactsState;
}
const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
