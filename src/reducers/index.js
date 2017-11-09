import {combineReducers} from "redux"
import profileReducer from './profileReducer'
import itemsReducer from './itemsReducer'
//import settingsReducer from './settingsReducer'
export default reducers = combineReducers({
  user: profileReducer,
  items: itemsReducer,
});
