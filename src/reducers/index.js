import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import profileReducer from './profileReducer';
import itemsReducer from './itemsReducer';
//import settingsReducer from './settingsReducer'
const reducers = combineReducers({
  user: profileReducer,
  items: itemsReducer,
  form:formReducer,
});

export default reducers;
