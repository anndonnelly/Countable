import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./PostCard.css";



function PostCard({ post }) {
    

  return (
      <div className="posts">
        <br></br>
        <NavLink key={post.id} to={`/posts/${post.id}`}>
          <img className="postImage" src={post.imageUrl} alt=""></img>
        </NavLink>
        <br></br>
        {post.caption}
    </div>
  );
}

export default PostCard;
