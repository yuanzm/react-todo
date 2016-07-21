import React         from 'react';
import ReactDOM      from 'react-dom';
import {createStore} from 'redux';
import {Provider}    from 'react-redux';
import App           from './containers/index.jsx';
import todoApp       from './reducers/index.js';

let store = createStore(todoApp);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('todoapp')
);
