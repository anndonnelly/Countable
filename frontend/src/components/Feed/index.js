import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Feed() {
  

  return (
      <>
      <h1>Feed</h1>
      <ProfileButton/>
      </>
  );
}

export default Feed;
