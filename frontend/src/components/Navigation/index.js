import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import CreatePostModal from "../CountablePosts/CreatePostModal";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let navBar;
  if (sessionUser) {
    navBar = (
      <div className="navWrapper">
        <div className="nav">
          <div className="logoWrapper">
            <img
              className="logo"
              src={
                "https://res.cloudinary.com/dis83syog/image/upload/v1636988652/Countable/Screen_Shot_2021-11-15_at_9.44.55_AM_eoweib.png"
              }
              alt=""
            ></img>
          </div>
          <div className="searchBar">
            <input></input>
          </div>
          <div className="actionButtons">
            <div>
              <CreatePostModal />
            </div>
            <NavLink to="/">Home</NavLink>
            <ProfileButton user={sessionUser} />;
          </div>
        </div>
      </div>
    );} else {
    return null
  }

  return <div>{isLoaded && navBar}</div>;
}

export default Navigation;
