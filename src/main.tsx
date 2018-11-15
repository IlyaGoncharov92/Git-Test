import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Application } from './components/application';
import { store } from './state/state';

const t = 444;




ReactDOM.render(
  (<Provider store={store}>
    <Application/>
  </Provider>),
  document.getElementById('application')
);
