import _ from 'lodash';
import * as actions from '../actions';
import {FETCH_ITEMS, FETCH_ITEM, DELETE_POST} from '../actions';

// export const FETCH_POSTS="fetch_items";


const itemsReducer = function(state = [], action){
  switch(action.type){
    case "GET_NEXT_ITEM":
        //find next item in the store
        let index = state.items.filter((item, index) =>
        {item.id == action.payload.id
          return index;
        })
        let next = state.items[index+1];
        console.log(next);
        state = {...state, currentItem: next};
      return state + action.payload;
      break;
    case "SET_SELECTED":
      return state = {...state, currentItem: action.payload};
      break;
    case FETCH_ITEMS:
      console.log(action.payload.data);
      return _.mapKeys(action.payload.data, "id"); //convert [] into list of objects with keys "id" from original array, "id" to be chnaged accordingly
      break;
    case FETCH_ITEM:
      console.log(action.payload.data);
      return {...state, [action.pauload.data.id] : action.payload.data};
      break;
    case DELETE_POST:
      return _.omit(state, action.payload);//returns new object, omit removes the pauload object from state object.
      break;
    default: return state;
  }

  return state;
}
export default itemsReducer;
