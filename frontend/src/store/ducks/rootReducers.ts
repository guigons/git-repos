import { combineReducers } from 'redux';
import repositories from './repositories';
import languages from './languages';


export default combineReducers({
  repositories,
  languages,
});
