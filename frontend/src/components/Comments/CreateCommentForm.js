import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCommentThunk } from "../../store/comments";
import { getAllCommentsThunk } from "../../store/comments";
import { getAllPostsThunk } from "../../store/posts";
import "./CreateCommentForm.css"


function CreateCommentForm({post}) {
  const dispatch = useDispatch();

  const ownerId = useSelector((state) => state.session.user.id);
  const [comment, setComment] = useState("");
//   const comments = useSelector((state) => state.comments);
//   const [valErrors, setValErrors] = useState([]);
//   const posts = useSelector((state) => state.individualPost);
//   const postId = posts[posts.id]?.Comments
      
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      comment,
      userId: ownerId,
      postId: post.id
    };


    dispatch(createCommentThunk(payload)).then(() => 
    dispatch(getAllCommentsThunk(post.id))).then(()=> 
    dispatch(getAllPostsThunk()));
    setComment("")
  
  };

  return (
    <div className="vertical-spacing">
      <form onSubmit={handleSubmit}>
        <span className="fieldDiv">
          <input
            id="addCommentBox"
            placeholder="Add a comment..."
            type="text"
            value={comment}
            required
            onChange={(e) => setComment(e.target.value)}
          />
        </span>
        <span className="createCommentButton">
          <button id="postCommentBtn" type="submit">
            Post
          </button>
        </span>
      </form>
    </div>
  );
}

export default CreateCommentForm;
