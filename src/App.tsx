import React from 'react';
import { Provider } from 'react-redux';
import ContactList from './screens/contactList';
import store from './store';

const App: React.FC = () => (
  <Provider store={store}>
    <ContactList />
  </Provider>
);

export default App;