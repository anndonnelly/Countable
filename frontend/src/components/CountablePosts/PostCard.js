import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./PostCard.css";
import CreateCommentForm from "../Comments/CreateCommentForm";
import CommentCard from "../Comments/CommentCard";
import { loadOnePost } from "../../store/individualpost";
import { setCurrentModal } from "../../store/modal";
import { showModal } from "../../store/modal";
import CreateCommentFormModal from "../Comments/CreateCommentFormModal";

function PostCard({ post }) {
  const dispatch = useDispatch();
  const numberOfComments = post?.Comments?.length;
  const hasComments = numberOfComments > 0;
  const lastComment = () => {
    if (!hasComments) {
      return null;
    }

    if (post.Comments) {
      const comment = post?.Comments[post.Comments.length - 1];
      return <div className="last-comment-wrapper">{comment.comment}</div>;
    }
  };

  const handleSubmit = async () => {
    await dispatch(loadOnePost(post.id));
    await dispatch(setCurrentModal(CreateCommentFormModal));
    await dispatch(showModal());
  };

  return (
    <div className="posts">
      <span className="flex align-items usernameContainer">
        <img className="postUserPhoto" src={post?.User?.avatar} alt=""></img>
        <Link to={`/users/${post.userId}`}>
          <span className="bold">{post?.User?.username}</span>
        </Link>
      </span>
      {/* <Link key={post.id} to={`/posts/${post.id}`}> */}
      <img
        onClick={handleSubmit}
        className="postImage"
        src={post.imageUrl}
        alt=""
      ></img>
      {/* </Link> */}
      <div className="side-spacing vertical-spacing">
        <Link to={`/users/${post.userId}`}>
          <span className="bold">{post?.User?.username}</span>
        </Link>
        <span> {post.caption}</span>
      </div>
      <CommentCard post={post} />
      <div className="side-spacing">{lastComment()}</div>

      <CreateCommentForm post={post} />
    </div>
  );
}

export default PostCard;
