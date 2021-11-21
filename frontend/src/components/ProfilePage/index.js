import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getAllUserPostsThunk } from "../../store/userPosts";
import { loadOnePost } from "../../store/individualpost";
import { setCurrentModal, showModal } from "../../store/modal";
import CreateCommentFormModal from "../Comments/CreateCommentFormModal";
import "./ProfilePage.css";

function ProfilePage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const posts = useSelector((state) => state.userPosts);
  const postLists = Object.values(posts);

  useEffect(() => {
    dispatch(getAllUserPostsThunk(id));
  }, [dispatch, id]);



  const handleSubmit = async (id) => {
    await dispatch(loadOnePost(id));
    await dispatch(setCurrentModal(CreateCommentFormModal));
    await dispatch(showModal());
  };

  return (

    <div className="profile_page">
      <div className="user_info_wrapper">
        <div className="avatar_wrapper">
          <img src={postLists[0]?.User?.avatar} alt="" />
        </div>
        <div className="user_data_wrapper">
          <div className="username">
            <span>{postLists[0]?.User.username}</span>
          </div>
          <div className="bio">
            <span>{postLists[0]?.User.bio}</span>
          </div>
        </div>
      </div>

      <div className="user_posts_wrapper">
        {postLists.map((post) => (
          <div key={post.id} className="post_image_wrapper">
            <div className="post_image_wrapper_inner"></div>
            <img
              className="postImageProfilePage"
              src={post.imageUrl}
              alt=""
              onClick={()=>handleSubmit(post.id)}
            />
          </div>
        ))}
      </div>
    </div>

  );
}

export default ProfilePage;

// {
//   post &&
//     Object.values(post?.Comments).map((comment) => (
//       <div>
//         <li key={comment.id}>{comment.comment}</li>
//         <br></br>
//       </div>
//     ));
// }
