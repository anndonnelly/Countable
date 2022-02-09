import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCommentThunk } from "../../store/comments";
import { getAllCommentsThunk } from "../../store/comments";
import "./CreateCommentForm.css"


function CreateCommentForm({post}) {
  const dispatch = useDispatch();

  const ownerId = useSelector((state) => state.session.user.id);
  const [comment, setComment] = useState("");
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      comment,
      userId: ownerId,
      postId: post.id
    };


    await dispatch(createCommentThunk(payload)) 
    // await dispatch(getAllCommentsThunk(post.id))
    // dispatch(getAllPostsThunk()));
    setComment("")
  
  };

  return (
    <div className="vertical-spacing">
      <form onSubmit={handleSubmit}>
        <span className="fieldDiv">
          <input
            id="addCommentBox"
            placeholder="Add a comment..."
            maxLength="1500"
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
