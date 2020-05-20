import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/containers/AppContainer';
import { Provider } from './app/store';

const render = (AppComponent: typeof App) =>
  ReactDOM.render(
    <Provider>
      <AppComponent />
    </Provider>,
    document.getElementById('root')
  );

render(App);

if (module.hot) {
  module.hot.accept('./app/containers/AppContainer', () => {
    const { App: AppComponent }: { App: typeof App } = require('./app/containers/AppContainer');
    render(AppComponent);
  });
}
