import { csrfFetch } from "./csrf";

const GET_ONE_POST = "individualpost/GET_ONE_POST";
const EDIT_POST = "individualpost/EDIT_POST";

const getOnePost = (post) => {
  return {
    type: GET_ONE_POST,
    post,
  };
};

const editPost = (post) => {
  return {
    type: EDIT_POST,
    post,
  };
};

export const loadOnePost = (post) => async (dispatch) => {
  const res = await fetch(`/api/posts/one/${post}`);
  if (res.ok) {
    const onePost = await res.json();
    dispatch(getOnePost(onePost));
    return onePost;
  }
};

export const editOnePost = (payload, id) => async (dispatch) => {
  const res = await csrfFetch(`/api/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    let post = await res.json();
    dispatch(editPost(post));
  }
};

const initialState = {};
const individualPostReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case GET_ONE_POST: {
        return action.post;
    //   return {
    //     ...state,
    //     ...action.post,
    //   };
    }
    case EDIT_POST:
      newState[action.post.id] = action.post;
      return newState;
    default:
      return state;
  }
};

export default individualPostReducer;
