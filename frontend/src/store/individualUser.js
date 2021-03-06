import { csrfFetch } from "./csrf";

const GET_ONE_USER = "individualuser/GET_ONE_USER";


const getOneUser = (user) => {
  return {
    type: GET_ONE_USER,
    user,
  };
};

export const loadOneUser = (userId) => async (dispatch) => {
  
  const res = await csrfFetch(`/api/users/${userId}`);
  if (res.ok) {
    const oneUser = await res.json();
    dispatch(getOneUser(oneUser));
    // return oneUser;
  }
};

const initialState = {user: null};
const individualUserReducer = (state = initialState, action) => {
//   const newState = { ...state };
  switch (action.type) {
    case GET_ONE_USER: {
        const newState = {...state}
        newState.user = action.user
      return newState;
    }
    default:
      return state;
  }
};

export default individualUserReducer;
