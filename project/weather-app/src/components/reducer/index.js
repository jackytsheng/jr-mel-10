import locationReducer from "./location";
import typingReducer from './typing';
import dateReducer from './date';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  location: locationReducer,
  word: typingReducer,
  date: dateReducer,
});

export default allReducers;