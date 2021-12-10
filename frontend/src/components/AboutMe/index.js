import React from "react";

import "./AboutMe.css";

function AboutMe() {

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
                  <p className="profile-card-text">LinkedIn</p>
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
                  <p className="profile-card-text">Github</p>
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
                  <p className="profile-card-text">AngelList</p>
                  <img
                    className="postImageProfilePage"
                    src="https://cdn-images-1.medium.com/max/1200/1*VHYE96X8zKxswXKFcar-Uw.png"
                    alt=""
                  ></img>
                </div>
              </a>
            </div>
            <div className="post_image_wrapper">
              <a href="https://remember-the-crud.herokuapp.com/" target="blank">
                <div className="post_image_wrapper_inner">
                  <p className="profile-card-text">RTC</p>
                  <img
                    className="postImageProfilePage"
                    src="https://res.cloudinary.com/dis83syog/image/upload/v1639097471/Personal%20Portfolio/Screen_Shot_2021-12-09_at_7.50.25_PM_upbwjm.png"
                    alt=""
                  ></img>
                </div>
              </a>
            </div>
            <div className="post_image_wrapper">
              <a href="https://pickupnyc.herokuapp.com/" target="blank">
                <div className="post_image_wrapper_inner">
                  <p className="profile-card-text">Pickup</p>
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
                  <p className="profile-card-text">Speakeasy</p>
                  <img
                    className="postImageProfilePage"
                    src="https://res.cloudinary.com/dis83syog/image/upload/v1638664346/Personal%20Portfolio/Screen_Shot_2021-12-04_at_7.32.10_PM_zxiugu.png"
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
