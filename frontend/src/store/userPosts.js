import { csrfFetch } from "./csrf";
//CONSTANTS
const GET_USERS_POSTS = "userPosts/GET_USERS_POSTS";


//ACTION CREATORS

const getUsersPostsAction = (posts) => {
  return {
    type: GET_USERS_POSTS,
    posts,
  };
};



//THUNKS
// Profile Page
export const getAllUserPostsThunk = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/posts/users/${id}`);

  if (response.ok) {
    let posts = await response.json();

    dispatch(getUsersPostsAction(posts));
  }
};

//REDUCER
const initialState = {};
export default function userPostsReducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case GET_USERS_POSTS:
      const allUserPosts = {};
      action.posts.forEach((post) => {
        allUserPosts[post.id] = post;
      });
      return {...allUserPosts };
    default:
      return state;
  }
}
