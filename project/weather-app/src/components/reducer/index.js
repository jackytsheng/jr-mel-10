import locationReducer from "./location";
import typingReducer from './typing';
import dateReducer from './date';
import favouriteLocationReducer from './favouriteLocation';
import weatherReducer from './weather';
import imgReducer from './img';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  favourite: favouriteLocationReducer,
  location: locationReducer,
  word: typingReducer,
  date: dateReducer,
  weather: weatherReducer,
  imgLink: imgReducer,
});

export default allReducers;