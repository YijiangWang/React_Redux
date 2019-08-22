import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(reducer,
  // window.devToolsExtension ? window.devToolsExtension() : () => { }
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;