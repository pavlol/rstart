import React from 'react'
import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';

export const store = createStore(reducers, {
  user:{name:"Dave", age:"30", pic:["url1", "url2"],},
  items:{
    currentItem:{id:"1", name:"Beth", age:"29", pic:[]},
    availableItems:[
      {id:"1", name:"Beth", age:"29", pic:[]},
      {id:"2", name:"Kate", age:"30", pic:[]},
      {id:"3", name:"Niky", age:"31", pic:[]},
      {id:"4", name:"Grace", age:"40", pic:[]},
      {id:"5", name:"Sib", age:"20", pic:[]},
    ],
    selectedItems:[],
  }
});

store.subscribe(()=>{
  console.log("store changed", store.getState());
});

store.dispatch({type:"UPDATE_OWN_PROFILE", payload:{name:"Dave2", age:"30", pic:["url1", "url2"]}});
// store.dispatch({type:"GET_NEXT_ITEM", payload:{store.items.currentItem}});
store.dispatch({type:"SET_SELECTED", payload:{id:"2", name:"Kate", age:"30", pic:[]}});
