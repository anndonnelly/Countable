import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCommentThunk } from "../../store/comments";
import { loadOnePost } from "../../store/individualpost";
import { getAllPostsThunk } from "../../store/posts";
import { Link } from "react-router-dom";

function CreateCommentFormModal() {
  const dispatch = useDispatch();

  const ownerId = useSelector((state) => state.session.user.id);
  
  const [comment, setComment] = useState("");
  //   const comments = useSelector((state) => state.comments);
  const [valErrors, setValErrors] = useState([]);
  const post = useSelector((state) => state.individualPost);
  //   const postId = posts[posts.id]?.Comments
// const [counter, setCounter] = useState(0);

    // useEffect(() => {
    // setComment("");
    // }, [counter]);
console.log("POST", post)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      comment,
      userId: ownerId,
      postId: post.id,
    };

    await dispatch(createCommentThunk(payload))
    // .then((res) => {
    //   return res;
    // });

    // dispatch(loadOnePost(posts.id));
     await dispatch(getAllPostsThunk());
    setComment("");
    
  };

  return (
    <div className="">
      <div>
          <img className="postImage" src={post.imageUrl} alt=""></img>
              <Link to={`/users/${post.userId}`}>{post.User.username}</Link>
              {post.caption}
              {post.Comments.comment}
        <form onSubmit={handleSubmit}>
          <div className="fieldDiv">
            <input
              placeholder="Add a comment..."
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <div className="createEventButton">
            <button type="submit">Post</button>
          </div>
        </form>
        <ul>
          {post &&
            post.Comments?.map((comment) => (
              <div>
                <li key={comment.id}>{comment.comment}</li>
                <br></br>
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default CreateCommentFormModal;
