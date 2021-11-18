import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { restoreCSRF } from "./store/csrf";
import Feed from "./components/Feed";
import PostCard from "./components/CountablePosts/PostCard";
import SinglePost from "./components/CountablePosts/SinglePost";
import ProfilePage from "./components/ProfilePage";
import ProfileButton from "./components/Navigation/ProfileButton";
import { ProtectedRoute } from "./components/RouteUtil";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") restoreCSRF();
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/posts/:id">
            <SinglePost />
          </Route>
          <ProtectedRoute exact path="/posts" component={Feed}>
          </ProtectedRoute>
          <Route path="/users/:id">
            <ProfilePage />
          </Route>
        </Switch>
      )}
      {/* <Footer /> */}
    </>
  );
}

export default App;
