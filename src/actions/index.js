import axios from 'axios';
import qs from 'qs';
export const FETCH_ITEMS="fetch_items";
export const FETCH_ITEM="fetch_item";
export const CREATE_ITEM="create_item";
export const DELETE_POST = "delete_item"
const ROOT_URL = "http://localhost:8000";
// export const getSettings = () => ({
//   type:"GET_SETTINGS",
//   payload : ""
// });
//
// export const updateAfterSubmit = response => ({
//   type: 'CHANGE_REQUEST_STATUS',
//   payload: response,
// });
//
// export const inputChanged = (inputName, input) => ({
//   type: 'INPUT_CHANGED',
//   payload: {"name":inputName, "input": input},
// });

export const getOwnProfile = (inputName, input) => ({
  type: 'GET_OWN_PROFILE',
  payload: {"name":inputName, "input": input},
});


//example without thunk
// export default function fetchItems(){ //fetch all items
//   const request = axios.get(`$(ROOT_URL)/items`);
//
//   return{
//     type:FETCH_ITEMS,
//     payload: request
//   };
// }
//
export function fetchItems(){ //fetch all items
  const request = axios.get(`$(ROOT_URL)/items`);

  return (dispatch) =>{
    request.then((data)=>{
      dispatch({
        type:FETCH_ITEMS,
        payload: data});
    })
  }
}



export function fetchItem(id){ //fetch single item
  const request = axios.get(`$(ROOT_URL)/items/${id}`);

  return{
    type:FETCH_ITEM,
    payload: request
  };
}

export function createItem(values, callback){
  console.log(values);
  let key = localStorage.getItem("key");
  if(!key){
    key = Math.floor(Math.random()*999999);
    localStorage.setItem("key", key);
  }

  console.log(key);
  const valueWithKey = {...values, key:key}
  let jsonString = qs.stringify(valueWithKey);
  console.log(jsonString);
  const request = axios.post(`${ROOT_URL}/apply`, jsonString)
  .then(()=>callback());
  return {
    type:CREATE_ITEM,
    payload:request
  }
}

export function deleteItem(id, callback){
  const request = axios.delete(`$(ROOT_URL)/items/${id}`)
  .then(()=>callback());

  return{
    type:DELETE_POST,
    payload: id
  }
}
