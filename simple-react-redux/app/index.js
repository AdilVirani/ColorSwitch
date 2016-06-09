// For adding CSS styles to index.html with Webpack
require("./styles/style.css");

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { state } from './store/base';
import { createStore } from 'redux';
import initialization from './store/initialization';
import Application from './containers/application'

const store = initialization(state);

render(
  <Application store={store} />,
    document.getElementById('container')
);
