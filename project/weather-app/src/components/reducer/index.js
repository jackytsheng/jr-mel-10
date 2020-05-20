import locationReducer from "./location";
import typingReducer from './typing';
import dateReducer from './date';
import favouriteLocationReducer from './favouriteLocation';
import weatherReducer from './weather';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  favourite: favouriteLocationReducer,
  location: locationReducer,
  word: typingReducer,
  date: dateReducer,
  weather: weatherReducer,
});

export default allReducers;