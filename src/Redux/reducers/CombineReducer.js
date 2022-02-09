import { combineReducers } from 'redux';
import { ThemeReducer } from './ThemeReducer';

const CombineReducer = combineReducers({
	theme: ThemeReducer,
});

export default CombineReducer;
