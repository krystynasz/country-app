import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
//import DevTools from './devtools/DevTools';
//import Navigation from './presentational/navigation.component';
import routes from './routes';
//import { getCountries } from './actions/actions-countries';

render(
    <Provider store={store}>
<div>
        <Router history={hashHistory} routes={routes} />
      
  </div>     
    </Provider >,
    document.getElementById('root')
);

//store.dispatch(getCountries)