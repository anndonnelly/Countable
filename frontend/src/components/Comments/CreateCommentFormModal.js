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
import { loadOnePost } from "../../store/individualpost";
import { deleteCommentThunk } from "../../store/comments";
import EditCommentForm from "./EditCommentForm";
import { createLikeThunk } from "../../store/posts";
import { deleteLikeThunk } from "../../store/posts";
import "./CreateCommentFormModal.css";

function CreateCommentFormModal() {
  const dispatch = useDispatch();
  const history = useHistory();
  const ownerId = useSelector((state) => state.session.user.id);
  const [edit, setEdit] = useState(false);
  const [comment, setComment] = useState("");
  const [numLikes, setNumLikes] = useState(0);
  const post = useSelector((state) => state.individualPost);
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    setNumLikes(post.Likes.length);
  }, [post, dispatch]);

  const deletePost = async () => {
    dispatch(hideModal());
    await dispatch(deletePostThunk(post.id));

    history.push("/posts");
  };

  const deleteComment = async (e) => {
    e.preventDefault();
    const commentId = e.currentTarget.id;
    await dispatch(deleteCommentThunk(commentId));

    await dispatch(getAllPostsThunk());
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
    dispatch(loadOnePost(post.id));
    await dispatch(getAllPostsThunk());
    setComment("");
  };

  const createLike = async (e) => {
    e.preventDefault();
    const payload = {
      postId: post.id,
      userId: user.id,
      username: user.username,
    };
    await dispatch(createLikeThunk(payload, post.id));
    setNumLikes(numLikes + 1);
    await dispatch(loadOnePost(post.id));
  };

   const isLiked = () => {
     const likes = post.Likes;
     if (likes) {
       for (let i = 0; i < likes.length; i++) {
         let like = likes[i];
         if (like.userId === user?.id) {
           return true;
         }
       }
     }
     return false;
   };

   const deleteLike = async () => {
     const bool = await dispatch(deleteLikeThunk(user?.id, post?.id));
     if (bool) {
       setNumLikes(numLikes - 1);
     }
     await dispatch(loadOnePost(post.id));
   };

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
              <div>
                <svg
                  onClick={deletePost}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  height="1em"
                  width="1em"
                  tyle={{ transform: "rotate(360deg)" }}
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  value={edit}
                  className="h-6 w-6"
                  onClick={editPost}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  height="1em"
                  width="1em"
                  tyle={{ transform: "rotate(360deg)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </div>
            </div>
          ) : null}
          <div className="closeModal" onClick={() => dispatch(hideModal())}>
            x
          </div>
        </div>

        <ul className="commentScroll">
          <div className="postCaption">{post.caption}</div>
          <div>
            <div className="post-card-icons">
              {!isLiked() ? (
                <div className="my-heart">
                  <svg
                    onClick={createLike}
                    aria-label="Like"
                    className="_8-yf5 like"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                  </svg>
                </div>
              ) : (
                <div className="my-heart red-heart">
                  <svg
                    onClick={deleteLike}
                    aria-label="Unlike"
                    className="_8-yf5 like"
                    color="#ed4956"
                    fill="#ed4956"
                    height="24"
                    role="img"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                  </svg>
                </div>
              )}

              <div className="postcard-icon-comment">
                <svg
                  aria-label="Comment"
                  className="_8-yf5 comment-icon"
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 48 48"
                  width="24"
                >
                  <path
                    clipRule="evenodd"
                    d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <p className="num-likes">
            {numLikes} {post.Likes.length === 1 ? "like" : "likes"}
          </p>

          {post &&
            post.Comments?.map((comment) => (
              <li className="postModalCommentWrapper" key={comment.id}>
                <div className="postModalComment">
                  <img
                    className="commentUserPhoto"
                    src={comment?.User?.avatar}
                    alt=""
                  ></img>
                  <div className="post-content-wrapper">
                    <h3 className="commentUserName">
                      <Link
                        onClick={() => dispatch(hideModal())}
                        to={`/users/${comment?.User?.id}`}
                      >
                        {comment?.User?.username}
                      </Link>
                    </h3>
                    <span className="spanComment">{comment.comment}</span>
                    {comment.userId === ownerId ? (
                      <div className="buttons-wrapper">
                        <EditCommentForm comment={comment} />
                        <svg
                          className="deleteComment h-5 w-5"
                          id={comment.id}
                          onClick={deleteComment}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          height="1em"
                          width="1em"
                          style={{ transform: "rotate(360deg)" }}
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    ) : null}
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
                maxLength="1500"
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
