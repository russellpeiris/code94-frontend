import { combineReducers } from 'redux';
import { productReducer } from './reducer';
import { Reducer } from 'redux';

const rootReducer: Reducer = combineReducers({
  product: productReducer,
});

export default rootReducer;
