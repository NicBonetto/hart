import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../utils/history';
import routes from '../utils/route-data';

const Routes = () => (
  <Router history={ history }>
    <Switch>
      {
        routes.map((route, index) => (
          <Route
            key={ index }
            exact={ route.exact }
            path={ route.path }
            component={ route.component }
          />
        ))
      }
    </Switch>
  </Router>
);

export default Routes;