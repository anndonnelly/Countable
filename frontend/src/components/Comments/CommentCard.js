import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import PostCard from "../CountablePosts/PostCard";


function CommentCard({post}) {

    const [postDetailModal, setPostDetailModal] = useState(false)
    const numberOfComments = Object.values(post.Comments).length
    const hasComments = numberOfComments > 0
    const anyComments = () => {
        if (numberOfComments){
            return `View all ${numberOfComments} comments`
        } else {
            return `View post details`
        }
    }
    const lastComment = () => {
        if (!hasComments){
            return null
        }
        const lastCommentKey = Object.keys(post.Comments)[
          Object.keys(post.Comments).length -1
        ];
        const comment = post.Comments[lastCommentKey];
        return (
            <div>{comment.comment}</div>
        )
    }


  return (
    <>
      {" "}
      <div onClick={() => setPostDetailModal(true)}>{anyComments()}</div>
      {lastComment()}
      {postDetailModal && (
        <div>
          <Modal onClose={() => setPostDetailModal(false)}>
            <div>
              <img src={post.imageUrl} alt=""></img>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
}

export default CommentCard;

 {
   /* {post &&
          Object.values(post?.Comments).map((comment) => (
            <div>
              <div key={comment.id}>{comment.comment}</div>
            </div>
          ))} */
 }