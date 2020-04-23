import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

const render = (AppComponent: typeof App) => ReactDOM.render(<AppComponent />, document.getElementById('root'));

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const { App: AppComponent }: { App: typeof App } = require('./App');
    render(AppComponent);
  });
}
