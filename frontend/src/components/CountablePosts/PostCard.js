import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./PostCard.css";
import CreateCommentForm from "../Comments/CreateCommentForm";
import CommentCard from "../Comments/CommentCard";

function PostCard({ post }) {
    const numberOfComments = post?.Comments?.length;
    const hasComments = numberOfComments > 0;
    const lastComment = () => {
      if (!hasComments) {
        return null;
      }

      if (post.Comments) {
        const comment = post?.Comments[post.Comments.length - 1];
        return <div>{comment.comment}</div>;
      }
    };


  return (
    <div className="posts">
      <br></br>
      {/* <Link key={post.id} to={`/posts/${post.id}`}> */}
        <img className="postImage" src={post.imageUrl} alt=""></img>
      {/* </Link> */}
      <br></br>
      <Link to={`/users/${post.userId}`}>
        <div>{post?.User?.username}</div>
      </Link>
      <br></br>
      {post.caption}
      <br></br>
      <CreateCommentForm post={post} />
      {lastComment()}
      <CommentCard post={post} />
    </div>
  );
}

export default PostCard;
