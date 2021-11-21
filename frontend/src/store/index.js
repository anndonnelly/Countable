import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import postsReducer from "./posts";
import individualPostReducer from "./individualpost";
import commentsReducer from "./comments";
import userPostsReducer from "./userPosts";
import search from "./search";
import modal from "./modal";
import individualUserReducer from "./individualUser";


const rootReducer = combineReducers({
  session: sessionReducer,
  posts: postsReducer,
  individualPost: individualPostReducer,
  comments: commentsReducer,
  userPosts: userPostsReducer,
  search,
  modal,
  individualUser: individualUserReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;