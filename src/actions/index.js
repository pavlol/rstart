import axios from 'axios';

export const FETCH_ITEMS="fetch_items";
const ROOT_URL = "someurl";
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


//example
export default function fetchItems(){
  const request = axios.get(`$(ROOT_URL)/items`);

  return{
    type:FETCH_ITEMS,
    payload: request
  };
}
