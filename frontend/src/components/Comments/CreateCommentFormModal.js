import React, { useState } from "react";
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
  //   const [valErrors, setValErrors] = useState([]);
  const post = useSelector((state) => state.individualPost);
  //   const [isEditing, setIsEditing] = useState(false);
  //   const postId = posts[posts.id]?.Comments

  const deletePost = async () => {
    // await dispatch(getAllPostsThunk());
    dispatch(hideModal());
    await dispatch(deletePostThunk(post.id));
    history.push("/posts");
  };

  const deleteComment = async (e) => {
    e.preventDefault();
    const commentId = e.currentTarget.id;
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

  // const editComment = async (e) => {
  //     e.preventDefault();
  //     const commentId = e.target.id;
  //     <EditCommentForm commentId={commentId} />;
  //     setIsEditing(true)
  //     // dispatch(setCurrentModal(EditCommentForm));
  // };

  return (
    <div className="postModal">
      <div className="modalImageWrapper">
        <img className="postModalImage" src={post.imageUrl} alt=""></img>
      </div>
      <div className="rightSideModal">
        <div className="postModalHeader">
          <div className="postUser">
            <img
              className="postUserPhoto"
              src={post?.User?.avatar}
              alt=""
            ></img>
            <Link
              className="userLink"
              to={`/users/${post.userId}`}
              onClick={() => dispatch(hideModal())}
            >
              {post?.User?.username}
            </Link>
          </div>
          {post?.userId === ownerId ? (
            <div className="user-edit-buttons-wrapper">
              <svg
                onClick={deletePost}
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                height="1em"
                width="1em"
                tyle={{ transform: "rotate(360deg)" }}
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>

              {/* <button value={edit} className="" onClick={editPost}> */}
              <svg
                value={edit}
                className=""
                onClick={editPost}
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                height="1em"
                width="1em"
                tyle={{ transform: "rotate(360deg)" }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
              {/* </button> */}
            </div>
          ) : null}
          <div className="closeModal" onClick={() => dispatch(hideModal())}>
            x
          </div>
        </div>

        <ul className="commentScroll">
          <div className="postCaption">{post.caption}</div>
          {post &&
            post.Comments?.map((comment) => (
              <li className="postModalCommentWrapper" key={comment.id}>
                <div className="postModalComment">
                  <div className="commentUserPhoto"></div>
                  <div className="post-content-wrapper">
                    <h3 className="commentUserName">
                      <Link>commentUser</Link>
                    </h3>
                    <span className="spanComment">{comment.comment}</span>
                    {/* <div id={comment.id} onClick={editComment}>
                      EDIT
                    </div> */}
                    <div className="buttons-wrapper">
                      <EditCommentForm comment={comment} />

                      {/* PUT IT IN THE BIN */}
                      <svg
                        className="deleteComment"
                        id={comment.id}
                        onClick={deleteComment}
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        height="1em"
                        width="1em"
                        tyle={{ transform: "rotate(360deg)" }}
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>

                    {/* <img className="editIcon" scr="https://res.cloudinary.com/dis83syog/image/upload/v1637344420/Countable/download_dhs0ho.png" alt=""></img> */}
                  </div>
                </div>
                <div></div>
              </li>
            ))}
        </ul>
        <div className="comment-form-wrapper">
          <form className="anyComments" onSubmit={handleSubmit}>
            <div className="fieldDiv">
              <input
                id="addCommentBox"
                placeholder="Add a comment..."
                type="text"
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <div className="createCommentButton">
              <button id="postCommentBtn" type="submit">
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateCommentFormModal;
