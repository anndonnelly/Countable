import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getAllUserPostsThunk } from "../../store/userPosts";
import { loadOnePost } from "../../store/individualpost";
import { setCurrentModal, showModal } from "../../store/modal";
import CreateCommentFormModal from "../Comments/CreateCommentFormModal";
import { loadOneUser } from "../../store/individualUser";
import "./AboutMe.css";

function AboutMe() {
  const dispatch = useDispatch();
  const { id } = useParams();

  //   const posts = useSelector((state) => state.userPosts);
  //   const user = useSelector((state) => state?.individualUser);

  //   const postLists = Object.values(posts);

  useEffect(() => {
    dispatch(loadOneUser(id));
    dispatch(getAllUserPostsThunk(id));
  }, [dispatch, id]);

  const handleSubmit = async (id) => {
    await dispatch(loadOnePost(id));
    await dispatch(setCurrentModal(CreateCommentFormModal));
    await dispatch(showModal());
  };

  return (
    <div className="profile_page">
      <div className="profilePageWrapper">
        <div className="user_info_wrapper">
          <div className="avatar_wrapper">
            <img
              src={
                "https://res.cloudinary.com/dis83syog/image/upload/v1639072272/Countable/Screen_Shot_2021-12-09_at_12.50.54_PM_et9dly.png"
              }
              alt=""
            />
          </div>
          <div className="user_data_wrapper">
            <div className="username">
              <span>Ann Donnelly</span>
            </div>
            <div className="bio">
              <span>Website Creator</span>
            </div>
            <p>
              I'm a software engineer based in New York City. I have a
              background in children's and general nursing and education studies
            </p>
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
            <div className="post_image_wrapper">
              <a
                href="https://www.linkedin.com/in/ann-donnelly/"
                target="blank"
              >
                <div className="post_image_wrapper_inner">
                  <img
                    className="postImageProfilePage"
                    src="https://i.imgur.com/Z9M0KmM.jpg"
                    alt=""
                  ></img>
                </div>
              </a>
            </div>
            <div className="post_image_wrapper">
              <a href="https://github.com/anndonnelly" target="blank">
                <div className="post_image_wrapper_inner">
                  <img
                    className="postImageProfilePage"
                    src="https://i.imgur.com/5btn6RE.png"
                    alt=""
                  ></img>
                </div>
              </a>
            </div>
            <div className="post_image_wrapper">
              <a href="https://angel.co/u/ann-donnelly-1" target="blank">
                <div className="post_image_wrapper_inner">
                  <img
                    className="postImageProfilePage"
                    src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/angellist-512.png"
                    alt=""
                  ></img>
                </div>
              </a>
            </div>
            <div className="post_image_wrapper">
              <a href="https://remember-the-crud.herokuapp.com/" target="blank">
                <div className="post_image_wrapper_inner">
                  <img
                    className="postImageProfilePage"
                    src="https://res.cloudinary.com/dis83syog/image/upload/v1638653256/Personal%20Portfolio/Screen_Shot_2021-12-04_at_4.27.21_PM_zygelt.png"
                    alt=""
                  ></img>
                </div>
              </a>
            </div>
            <div className="post_image_wrapper">
              <a href="https://pickupnyc.herokuapp.com/" target="blank">
                <div className="post_image_wrapper_inner">
                  <img
                    className="postImageProfilePage"
                    src="https://res.cloudinary.com/dis83syog/image/upload/v1638663008/Personal%20Portfolio/Screen_Shot_2021-12-04_at_7.09.55_PM_xtclmg.png"
                    alt=""
                  ></img>
                </div>
              </a>
            </div>
            <div className="post_image_wrapper">
              <a href="https://speak-easy-tx.herokuapp.com/" target="blank">
                <div className="post_image_wrapper_inner">
                  <img
                    className="postImageProfilePage"
                    src="https://res.cloudinary.com/dis83syog/image/upload/v1638664346/Personal%20Portfolio/Screen_Shot_2021-12-04_at_7.32.10_PM_zxiugu.png"
                    alt=""
                  ></img>
                </div>
              </a>
            </div>
            <div className="post_image_wrapper">
              <a href="https://countable-dub.herokuapp.com/" target="blank">
                <div className="post_image_wrapper_inner">
                  <img
                    className="postImageProfilePage"
                    src="https://res.cloudinary.com/dis83syog/image/upload/v1638742997/Personal%20Portfolio/Screen_Shot_2021-12-05_at_5.22.13_PM_f7p0az.png"
                    alt=""
                  ></img>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
