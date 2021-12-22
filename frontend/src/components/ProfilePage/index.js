import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getAllUserPostsThunk } from "../../store/userPosts";
import { loadOnePost } from "../../store/individualpost";
import { setCurrentModal, showModal } from "../../store/modal";
import CreateCommentFormModal from "../Comments/CreateCommentFormModal";
import { loadOneUser } from "../../store/individualUser";
import { useState } from "react";
import { createFollowThunk } from "../../store/individualpost";
import "./ProfilePage.css";

function ProfilePage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const posts = useSelector((state) => Object.values(state.userPosts));
  const sessionUser = useSelector((state) => state.session.user);
  const user = useSelector((state) => Object.values(state?.individualUser))[0];
  const onePost = useSelector((state) => state?.individualPost);
  const postLists = Object.values(posts);
  const [isLoaded, setIsLoaded] = useState(false);
  const [follow, setFollow] = useState(0);

  useEffect(() => {
    (async () => {
      await dispatch(loadOneUser(id));
      await dispatch(getAllUserPostsThunk(id));
      setFollow(user?.followers.length);
      setIsLoaded(true);
    })();
  }, [dispatch, id]);

  const handleSubmit = async (id) => {
    await dispatch(loadOnePost(id));
    await dispatch(setCurrentModal(CreateCommentFormModal));
    await dispatch(showModal());
  };

  const createFollow = async (e) => {
    e.preventDefault();
    const payload = {
      followerId: user.id,
      followingId: sessionUser.id,
    };
    await dispatch(createFollowThunk(payload, sessionUser.id));
    await dispatch(loadOneUser(id));
    // setFollow(follow + 1)
  };

  return (
    <div className="profile_page">
      {isLoaded && (
        <div className="profilePageWrapper">
          <div className="user_info_wrapper">
            <div className="avatar_wrapper">
              <img src={user?.avatar} alt="" />
            </div>
            <div className="user_data_wrapper">
              <div className="username">
                <span>{user?.username}</span>
                <button onClick={createFollow}>Follow</button>
              </div>
              <div className="bio">
                <span>{user?.bio}</span>
              </div>
              <div>
                {posts?.length} {posts?.length === 1 ? "post" : "posts"}
                {`${user?.followers.length}`}
                {user?.followers.length === 1 ? "follower" : "followers"}
                {`${user?.following.length} following`}
              </div>
            </div>
          </div>
          <div className="user_posts_wrapper_outer">
            <div className="section-selector">
              <div className="section-selector-button">
                <svg
                  aria-label=""
                  className="_8-yf5 "
                  color="#8e8e8e"
                  fill="#8e8e8e"
                  height="12"
                  role="img"
                  viewBox="0 0 24 24"
                  width="12"
                >
                  <rect
                    fill="none"
                    height="18"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    width="18"
                    x="3"
                    y="3"
                  ></rect>
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="9.015"
                    x2="9.015"
                    y1="3"
                    y2="21"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="14.985"
                    x2="14.985"
                    y1="3"
                    y2="21"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="21"
                    x2="3"
                    y1="9.015"
                    y2="9.015"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="21"
                    x2="3"
                    y1="14.985"
                    y2="14.985"
                  ></line>
                </svg>
                <span>POSTS</span>
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
                    onClick={() => handleSubmit(post.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
