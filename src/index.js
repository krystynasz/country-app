import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './devtools/DevTools';
import { GET_COUNTRIES } from './actions/actions-countries';

render(
    <Provider store={store}>
       <div>
        <h1>Inicjalizacja projektu</h1>
        <button onClick={() => store.dispatch({type:GET_COUNTRIES})}>Kliknij tutaj i załaduj listę krajów.</button>
        <DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
);