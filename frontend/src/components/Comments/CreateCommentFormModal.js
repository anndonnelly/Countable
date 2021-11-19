import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCommentThunk } from "../../store/comments";
import { getAllPostsThunk } from "../../store/posts";
import { Link } from "react-router-dom";
import { deletePostThunk } from "../../store/posts";
import { useHistory } from "react-router";
import { hideModal } from "../../store/modal";
import { setCurrentModal } from "../../store/modal";
import EditPostForm from "../CountablePosts/EditPostForm";
import "./CreateCommentFormModal.css";
import { loadOnePost } from "../../store/individualpost";
import { deleteCommentThunk } from "../../store/comments";
import EditCommentForm from "./EditCommentForm";

function CreateCommentFormModal() {
  const dispatch = useDispatch();
  const history = useHistory();
  const ownerId = useSelector((state) => state.session.user.id);
  const [edit, setEdit] = useState(false);
  const [comment, setComment] = useState("");
  const [valErrors, setValErrors] = useState([]);
  const post = useSelector((state) => state.individualPost);
  //   const postId = posts[posts.id]?.Comments

  const deletePost = async () => {
    // await dispatch(getAllPostsThunk());
    dispatch(hideModal());
    await dispatch(deletePostThunk(post.id));
    history.push("/posts");
  };

  const deleteComment = async (e) => {
      e.preventDefault()
   const commentId = e.target.id
    await dispatch(deleteCommentThunk(commentId));
    dispatch(loadOnePost(post.id));
  };

  const editPost = async () => {
    dispatch(setCurrentModal(EditPostForm));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      comment,
      userId: ownerId,
      postId: post.id,
    };

    await dispatch(createCommentThunk(payload));
    // .then((res) => {
    //   return res;
    // });

    dispatch(loadOnePost(post.id));
    await dispatch(getAllPostsThunk());
    setComment("");
  };


    const editComment = async () => {
      dispatch(setCurrentModal(EditCommentForm));
    };

    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   const payload = {
    //     comment,
    //     userId: ownerId,
    //     postId: post.id,
    //   };

    //   await dispatch(createCommentThunk(payload));
    //   // .then((res) => {
    //   //   return res;
    //   // });

    //   dispatch(loadOnePost(post.id));
    //   await dispatch(getAllPostsThunk());
    //   setComment("");
    // };

  return (
    <div className="postModal">
      <div className="modalImageWrapper">
        <img className="postModalImage" src={post.imageUrl} alt=""></img>
      </div>
      <div className="rightSideModal">
        <div className="postModalHeader">
          <div className="postUser">
            <img className="postUserPhoto" src={post.User.avatar} alt=""></img>
            <Link
              className="userLink"
              to={`/users/${post.userId}`}
              onClick={() => dispatch(hideModal())}
            >
              {post.User.username}
            </Link>
          </div>
          <div className="closeModal" onClick={() => dispatch(hideModal())}>
            x
          </div>
        </div>
        {post?.userId === ownerId ? (
          <div>
            <button onClick={deletePost}>Delete</button>
            <button value={edit} className="" onClick={editPost}>
              Edit
            </button>
          </div>
        ) : null}
        <ul className="commentScroll">
          <div className="postCaption">{post.caption}</div>
          {post &&
            post.Comments?.map((comment) => (
              <li className="postModalCommentWrapper" key={comment.id}>
                <div className="postModalComment">
                  <div className="commentUserPhoto"></div>
                  <div>
                    <h3 className="commentUserName">
                      <Link>commentUser</Link>
                    </h3>
                    <span className="spanComment">{comment.comment}</span>
                    <div onClick={editComment}>EDIT</div>
                    {/* <div id={comment.id} onClick={deleteComment(e)}> */}
                    <div
                      className="deleteComment"
                      id={comment.id}
                      onClick={deleteComment}
                    >
                      DELETE
                    </div>
                    <br />
                    {/* <img className="editIcon" scr="https://res.cloudinary.com/dis83syog/image/upload/v1637344420/Countable/download_dhs0ho.png" alt=""></img> */}
                  </div>
                </div>
                <div></div>
              </li>
            ))}
        </ul>
        <form className="anyComments" onSubmit={handleSubmit}>
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
      </div>
    </div>
  );
}

export default CreateCommentFormModal;
