export const itemsReducer = function(state = [], action){
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
  }

  return state;
}
