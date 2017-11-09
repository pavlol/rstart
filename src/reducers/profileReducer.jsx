export const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_OWN_PROFILE":
      state = {...state, user:action.payload};
  }
  return state;
};
