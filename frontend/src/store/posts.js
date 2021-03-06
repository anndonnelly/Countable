import { csrfFetch } from "./csrf";
//CONSTANTS
const GET_POSTS = "posts/LOAD";
const GET_ONE_POST = "posts/GET_ONE_POST";
const CREATE_POST = "posts/CREATE_POST";
const DELETE_POST = "posts/DELETE_POST";
const EDIT_COMMENT = "comments/EDIT_COMMENT";
const GET_LIKES = "posts/GET_LIKES";
const CREATE_LIKE = "posts/CREATE_LIKE";
const DELETE_LIKE = "posts/DELETE_LIKE";

//ACTION CREATORS
const getAllPostsAction = (posts) => {
  return {
    type: GET_POSTS,
    posts,
  };
};

// const getOnePostAction = (post) => {
//   return {
//     type: GET_ONE_POST,
//     post,
//   };
// };

// const getUsersPostsAction = (post) => {
//     return {
//     type: GET_USERS_POSTS,
//     post,
//   };
// }

const createPostAction = (post) => {
  return {
    type: CREATE_POST,
    post,
  };
};

const deletePostAction = (deletedPost) => {
  return {
    type: DELETE_POST,
    deletedPost,
  };
};

const editComment = (comment) => {
  return {
    type: EDIT_COMMENT,
    comment,
  };
};

const getLikesAction = (likes) => {
    return {
      type: GET_LIKES,
      likes,
    };
}

const createLikeAction = (like) => {
    return {
    type: CREATE_LIKE,
    like,
    };
}


//THUNKS
export const getAllPostsThunk = () => async (dispatch) => {
  const response = await csrfFetch("/api/posts");

  if (response.ok) {
    let posts = await response.json();

    dispatch(getAllPostsAction(posts));
  }
};


export const createPostThunk = (post) => async (dispatch) => {
  const { caption, imageUrl, userId } = post;
  const formData = new FormData();
  formData.append("caption", caption);
  formData.append("userId", userId);

  // for multiple files
//   if (images && images.length !== 0) {
//     for (var i = 0; i < images.length; i++) {
//       formData.append("images", images[i]);
//     }
//   }

  // for single file
  if (imageUrl) formData.append("imageUrl", imageUrl);

  const response = await csrfFetch(`/api/posts/`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });

  if (response.ok) {
    const newPost = await response.json();
    dispatch(createPostAction(newPost.post));
    return newPost;
  }
};

export const editCommentThunk = (payload) => async (dispatch) => {
  const { id } = payload;
 
  const res = await csrfFetch(`/api/comments/${id}`, {
    method: "PATCH",
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

export const deletePostThunk = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/posts/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(deletePostAction(id));
  }
};

export const getAllLikesThunk = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/posts/${id}/likes`);

  if (response.ok) {
    const likes = await response.json();

    dispatch(getLikesAction(likes));
  }
};


export const createLikeThunk = (payload, id) => async (dispatch) => {
  const response = await csrfFetch(`/api/posts/${id}/likes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const like = await response.json();
    dispatch(createLikeAction(like));
    // potentially not keying into likes appropriately

    // return like;
  }
};


export const deleteLikeThunk = (userId, postId) => async (dispatch) => {
  const response = await csrfFetch(`/api/posts/${postId}/likes/${userId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    const bool = response.json()
    return bool
  }
};


//REDUCER
const initialState = {};
export default function postsReducer(state = initialState, action) {
  let newState = { ...state };
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
    // case CREATE_POST:
    //   return { ...state, post: action.post };
    case DELETE_POST: {
      newState = Object.assign({}, state);
      delete newState[action.deletedPost];
      return newState;
    }
    case EDIT_COMMENT:
      for (let post in newState) {
        if (newState[post].id === action.comment.postId) {
          for (let comment in newState[post].Comments) {
            if (newState[post].Comments[comment].id === action.comment.id) {
              newState[post].Comments[comment] = action.comment;
            }
          }
        }
      }
      return newState;
    // case GET_LIKES: {
    //     const allLikes = {}
        
    // }
    default:
      return state;
  }
}
