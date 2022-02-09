import { createStore } from 'redux';
import CombineReducer from './reducers/CombineReducer';

const Store = createStore(
	CombineReducer,
	{},
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;
