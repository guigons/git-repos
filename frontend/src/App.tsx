import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';

import Main from './pages/Main';

import store from './store';

const App: React.FC = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Main />
  </Provider>
);

export default App;
