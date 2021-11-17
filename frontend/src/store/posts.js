import { csrfFetch } from "./csrf";
//CONSTANTS
const GET_POSTS = "posts/LOAD";
const GET_ONE_POST = "posts/GET_ONE_POST";
const CREATE_POST = "posts/CREATE_POST";
// const UPDATE_POST = "posts/UPDATE_POST";
const DELETE_POST = "posts/DELETE";

//ACTION CREATORS
const getAllPostsAction = (posts) => {
    console.log("fffffff",posts)
  return {
    type: GET_POSTS,
    posts,
    
  };
};

const getOnePostAction = (post) => {
  return {
    type: GET_ONE_POST,
    post,
  };
};

const createPostAction = (post) => {
  return {
    type: CREATE_POST,
    post,
  };
};

// const editPostAction = (post) => {
//   return {
//     type: UPDATE_POST,
//     payload: post,
//   };
// };

const deletePostAction = (deletedPost) => {
  return {
    type: DELETE_POST,
    deletedPost,
  };
};

//THUNKS
export const getAllPostsThunk = () => async (dispatch) => {
  const response = await csrfFetch("/api/posts");
  
  if (response.ok) {
      let posts = await response.json();
      console.log("POSTS THUNK", posts)
      dispatch(getAllPostsAction(posts));
    }
};

export const getOnePostThunk = (postId) => async (dispatch) => {
  const res = await csrfFetch(`/api/posts/${postId}`);
  const onePost = await res.json();
  dispatch(getOnePostAction(onePost));
};

export const createPostThunk = (payload) => async (dispatch) => {
  const response = await csrfFetch("/api/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const newPost = await response.json();
    console.log("NEW POST", newPost)
    dispatch(createPostAction(newPost));
    return newPost;
  }
};


// export const editPostThunk = (postId, payload) => async (dispatch) => {
//   const res = await csrfFetch(`/api/posts/${postId}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(payload),
//   });
//   if (res.ok) {
//     const post = await res.json();
//     dispatch(editPostAction(post));
//   }
// };


export const deletePostThunk = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/posts/${id}`, {
    method: "DELETE",
  });
  console.log("RESPONSE!",response)
  if (response.ok) {
    dispatch(deletePostAction(id));
  } 
};

//REDUCER
const initialState = {};
export default function postsReducer(state = initialState, action) {
    const newState = { ...state };
    switch (action.type) {
        case GET_POSTS:
        const allPosts = {};
        action.posts.forEach((post) => {
            allPosts[post.id] = post;
        });
        return { ...state, ...allPosts };
        case GET_ONE_POST:
        return {
            ...state,
            [action.post.id]: action.post,
        };
        case CREATE_POST:
        return {
            ...state,
            [action.post.id]: action.post,
        };
        case DELETE_POST:{
            delete newState[action.deletedPost];
            return newState;
        }
        default:
        return state;
    }
}
