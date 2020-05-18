import locationReducer from "./location";
import typingReducer from './typing';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  location: locationReducer,
  word:typingReducer,
});

export default allReducers;