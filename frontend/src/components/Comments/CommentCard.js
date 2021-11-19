import React, { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";
import PostCard from "../CountablePosts/PostCard";
import "./CommentCard.css";
import { Link } from "react-router-dom";
import CreateCommentForm from "./CreateCommentForm";
import { loadOnePost } from "../../store/individualpost";
import { useDispatch } from "react-redux";
import CreateCommentFormModal from "./CreateCommentFormModal";
import { useSelector } from "react-redux";
import { getAllCommentsThunk } from "../../store/comments";
import { getAllPostsThunk } from "../../store/posts";
import { setCurrentModal, showModal } from "../../store/modal";



function CommentCard({ post }) {
    const dispatch = useDispatch();
    // const [postDetailModal, setPostDetailModal] = useState(false);
    const numberOfComments = post?.Comments?.length;
    
    const allComments = useSelector((state) => state.individualPost.Comments);
    console.log("ALL COMMENTS",allComments);
    const [comments, setComments] = useState({})

    // IFFE
    useEffect(() => {
        (()=>{
        const com = dispatch(loadOnePost(post.id))
        setComments(com.Comments)
        })()
    }, []);

  const handleSubmit = async () => {
    dispatch(loadOnePost(post.id));
    // setPostDetailModal(true);
    
    dispatch(setCurrentModal(CreateCommentFormModal));
    dispatch(showModal())
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
      {" "}
      <div className="anyComments" onClick={handleSubmit}>
        {anyComments()}
      </div>
    </>
  );
}

export default CommentCard;
