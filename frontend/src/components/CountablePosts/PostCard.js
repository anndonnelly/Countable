import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CreateCommentForm from "../Comments/CreateCommentForm";
import CommentCard from "../Comments/CommentCard";
import { loadOnePost } from "../../store/individualpost";
import { setCurrentModal } from "../../store/modal";
import { showModal } from "../../store/modal";
import CreateCommentFormModal from "../Comments/CreateCommentFormModal";
import { createLikeThunk } from "../../store/posts";
import { deleteLikeThunk } from "../../store/posts";
import { getAllPostsThunk } from "../../store/posts";
import "./PostCard.css";

function PostCard({ post }) {
  const dispatch = useDispatch();
  const numberOfComments = post?.Comments?.length;
  const hasComments = numberOfComments > 0;
  const [numLikes, setNumLikes] = useState(0);
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    setNumLikes(post.Likes.length);
  }, [post, dispatch]);

  const lastComment = () => {
    if (!hasComments) {
      return null;
    }

    if (post.Comments) {
      const comment = post?.Comments[post.Comments.length - 1];
      return <div className="last-comment-wrapper">{comment.comment}</div>;
    }
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
     await dispatch(getAllPostsThunk());
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

  const deleteLike = async() => {
    const bool = await dispatch(deleteLikeThunk(user?.id, post?.id));
    if (bool){
        setNumLikes(numLikes - 1);
    }
    await dispatch(getAllPostsThunk())
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
      <img
        onClick={handleSubmit}
        className="postImage"
        src={post.imageUrl}
        alt=""
      ></img>
      <div>
        {!isLiked() ? (
          <div className="my-heart">
            <svg
              onClick={createLike}
              aria-label="Like"
              class="_8-yf5 "
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
              class="_8-yf5 "
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
      </div>
      <div>
        <svg
          onClick={handleSubmit}
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
            clip-rule="evenodd"
            d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </div>
      <p>
        {" "}
        {numLikes} {post.Likes.length === 1 ? "like" : "likes"}
      </p>
      <div className="side-spacing vertical-spacing">
        <Link to={`/users/${post.userId}`}>
          <span className="bold">{post?.User?.username}</span>
        </Link>
        <span className="caption"> {post.caption}</span>
      </div>
      <CommentCard post={post} />
      <div className="side-spacing">{lastComment()}</div>

      <CreateCommentForm post={post} />
    </div>
  );
}

export default PostCard;
