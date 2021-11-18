import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import PostCard from "../CountablePosts/PostCard";
import "./CommentCard.css";
import { Link } from "react-router-dom";
import CreateCommentForm from "./CreateCommentForm";
import { loadOnePost } from "../../store/individualpost";
import { useDispatch } from "react-redux";
import CreateCommentFormModal from "./CreateCommentFormModal";

function CommentCard({ post }) {
    const dispatch = useDispatch()
  const [postDetailModal, setPostDetailModal] = useState(false);
  const numberOfComments = Object.values(post.Comments).length;
  const hasComments = numberOfComments > 0;



  const handleSubmit = () => {
        dispatch(loadOnePost(post.id));
        setPostDetailModal(true)
  }

  const anyComments = () => {
    if (numberOfComments) {
      return `View all ${numberOfComments} comments`;
    } else {
      return `View post details`;
    }
  };
  const lastComment = () => {
    if (!hasComments) {
      return null;
    }
    const lastCommentKey = Object.keys(post.Comments)[
      Object.keys(post.Comments).length - 1
    ];
    const comment = post.Comments[lastCommentKey];
    return <div>{comment.comment}</div>;
  };

  return (
    <>
      {" "}
      <div className="anyComments" onClick={handleSubmit}>
        {anyComments()}
      </div>
      {lastComment()}
      {postDetailModal && (
        <div>
          <Modal onClose={() => setPostDetailModal(false)}>
            <div className="postModal">
              <img className="postImage" src={post.imageUrl} alt=""></img>
              <Link to={`/users/${post.userId}`}>{post.User.username}</Link>
              {post.caption}
              {post.Comments.comment}
              <CreateCommentFormModal />
              <ul>
                {post &&
                  Object.values(post?.Comments).map((comment) => (
                    <div>
                      <li key={comment.id}>{comment.comment}</li>
                      <br></br>
                    </div>
                  ))}
              </ul>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
}

export default CommentCard;
