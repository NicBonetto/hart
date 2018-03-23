import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { Routes } from '../client/components/index';

render(
  <Provider store={ store }>
    <Routes/>
  </Provider>,
  document.querySelectory('#root')
);