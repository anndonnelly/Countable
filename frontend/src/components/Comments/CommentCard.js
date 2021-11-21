import React, { useState, useEffect } from "react";
// import { Modal } from "../../context/Modal";
// import PostCard from "../CountablePosts/PostCard";
// import { Link } from "react-router-dom";
// import CreateCommentForm from "./CreateCommentForm";
import { loadOnePost } from "../../store/individualpost";
import { useDispatch } from "react-redux";
import CreateCommentFormModal from "./CreateCommentFormModal";
import { setCurrentModal, showModal } from "../../store/modal";
import "./CommentCard.css";



function CommentCard({ post }) {
    const dispatch = useDispatch();
    // const [postDetailModal, setPostDetailModal] = useState(false);
    const numberOfComments = post?.Comments?.length;
    
    // const allComments = useSelector((state) => state.individualPost.Comments);
    const [comments, setComments] = useState({})

    // IFFE
    useEffect(() => {
        (()=>{
        const com = dispatch(loadOnePost(post.id))
        setComments(com.Comments)
        })()
    }, [dispatch, post.id]);

  const handleSubmit = async () => {
      await dispatch(loadOnePost(post.id));
      await dispatch(setCurrentModal(CreateCommentFormModal));
      await dispatch(showModal())
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
      <div className="anyComments vertical-spacing side-spacing" onClick={handleSubmit}>
         {anyComments()}
      </div>
    </>
  );
}

export default CommentCard;
