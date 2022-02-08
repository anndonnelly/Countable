import React, { useState, useEffect } from "react";
import { loadOnePost } from "../../store/individualpost";
import { useDispatch } from "react-redux";
import CreateCommentFormModal from "./CreateCommentFormModal";
import { setCurrentModal, showModal } from "../../store/modal";
import "./CommentCard.css";
import { getAllCommentsThunk } from "../../store/comments";



function CommentCard({ post }) {
    const dispatch = useDispatch();
    const numberOfComments = post?.Comments?.length;
    const [comments, setComments] = useState({});

    // IFFE
    useEffect(() => {
        (() => {
        //   const com = dispatch(loadOnePost(post.id));
          post?.Comments.sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
          );
        })();
        setComments(post.Comments)
          
    }, [dispatch, post.id]);

  const viewAllComments = async () => {
    await dispatch(loadOnePost(post));
    await dispatch(getAllCommentsThunk(post.id))
    await dispatch(setCurrentModal(CreateCommentFormModal));
    await dispatch(showModal());
  };

  const anyComments = () => {
    if (numberOfComments) {
      return `View all ${numberOfComments} comments`;
    } else {
      return `View post details`;
    }
  };
  

  return (
    <>
      <button className="anyComments vertical-spacing side-spacing" onClick={viewAllComments}>
         {anyComments()}
      </button>
    </>
  );
}

export default CommentCard;
