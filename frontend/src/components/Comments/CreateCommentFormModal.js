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

function CreateCommentFormModal() {
  const dispatch = useDispatch();
  const history = useHistory();
  const ownerId = useSelector((state) => state.session.user.id);
  const [edit, setEdit] = useState(false);
  const [comment, setComment] = useState("");
  //   const comments = useSelector((state) => state.comments);
  const [valErrors, setValErrors] = useState([]);
  const post = useSelector((state) => state.individualPost);
  //   const postId = posts[posts.id]?.Comments

  const deletePost = async () => {
    // await dispatch(getAllPostsThunk());
    dispatch(hideModal());
    await dispatch(deletePostThunk(post.id));
    history.push("/posts");
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

    // dispatch(loadOnePost(posts.id));
    await dispatch(getAllPostsThunk());
    setComment("");
  };

  return (
    <div className="postModal">
      <div className="modalImageWrapper">
        <img className="postModalImage" src={post.imageUrl} alt=""></img>
      </div>
      <div className="rightSideModal">
        <div className="postModalHeader">
          <div className="postUser">
            <img className="postUserPhoto" src={post.User.avatar} alt=""></img>
            <Link className="userLink" to={`/users/${post.userId}`}>
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
