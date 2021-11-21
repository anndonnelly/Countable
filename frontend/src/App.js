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
import ProfilePage from "./components/ProfilePage";
import { ProtectedRoute } from "./components/RouteUtil";
import Modal from "./components/Modal";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") restoreCSRF();
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
        <Modal/>
        <Navigation isLoaded={isLoaded} />
        {isLoaded && (
            <Switch>
            <Route exact path="/">
                <LoginFormPage />
            </Route>
            <Route path="/signup">
                <SignupFormPage />
            </Route>
            {/* <Route path="/posts/:id">
                <SinglePost />
            </Route> */}
            <ProtectedRoute exact path="/posts" component={Feed}>
            </ProtectedRoute>
            <Route path="/users/:id">
                <ProfilePage />
            </Route>
            </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
