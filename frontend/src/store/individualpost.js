import { csrfFetch } from "./csrf";

const GET_ONE_POST = "individualpost/GET_ONE_POST";
const EDIT_POST = "individualpost/EDIT_POST";
const EDIT_COMMENT = "comments/EDIT_COMMENT";

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

const editComment = (comment) => {
  return {
    type: EDIT_COMMENT,
    comment,
  };
};

export const loadOnePost = (post) => async (dispatch) => {
  const res = await fetch(`/api/posts/one/${post}`);

  if (res.ok) {
    const onePost = await res.json();

    onePost?.Comments.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
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


export const editCommentThunk = (payload) => async (dispatch) => {
  const { id } = payload;

  const res = await csrfFetch(`/api/comments/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    let editCommennt = await res.json();
    dispatch(editComment(editCommennt));
  }
};
const initialState = {};
const individualPostReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case GET_ONE_POST: {
      return action.post;
    }
    case EDIT_POST:
      newState[action.post.id] = action.post;
      return newState;
    case EDIT_COMMENT:
          for (let comment in newState.Comments) {
            if (newState.Comments[comment].id === action.comment.id) {
              newState.Comments[comment] = action.comment;
            }
      }
      return newState;
    default:
      return state;
  }
};

export default individualPostReducer;
