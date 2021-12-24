import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProfileButton from "./ProfileButton";
import CreatePostModal from "../CountablePosts/CreatePostModal";
import { searchUsers } from "../../store/search";
import { getAllUserPostsThunk } from "../../store/userPosts";
import { useHistory } from "react-router";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  //   const currentUser = useSelector((state) => state.individualUser.user);
  //   console.log("curre", currentUser);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.search);
  const results = Object.values(searchResults);
  const history = useHistory();

  useEffect(() => {
    if (input.length > 0) {
      dispatch(searchUsers(input));
    }
  }, [dispatch, input]);

  const showSearch = () => {
    document.querySelector(".search-results").classList.remove("hidden");
  };
  const hideSearch = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      document.querySelector(".search-results").classList.add("hidden");
    }
  };

  const reset = (id) => {
    document.querySelector(".search-results").classList.add("hidden");
    dispatch(getAllUserPostsThunk(id));
    history.push(`/users/${id}`);
    setInput("");
  };

  let navBar;
  if (sessionUser) {
    navBar = (
      <div className="navWrapper">
        <div className="nav">
          <div className="logoWrapper">
            <NavLink to="/posts">
              <img
                className="logo"
                src={
                  "https://res.cloudinary.com/dis83syog/image/upload/v1637253480/Countable/CountableLogo2_2_hqwdfp.png"
                }
                alt=""
              ></img>
            </NavLink>
          </div>
          <div className="searchBar">
            <div className="search-container" onBlur={(e) => hideSearch(e)}>
              <input
                className="search-bar"
                value={input}
                placeholder="Search"
                onFocus={() => showSearch()}
                onChange={(e) => setInput(e.target.value)}
              />
              <div className="search-results hidden">
                {results?.length > 0 && input.length > 0 ? (
                  Object.values(results).map((res) => (
                    <div key={res.id} className="search-card">
                      <Link
                        to={`/users/${res.id}`}
                        className="search-name"
                        onClick={() => {
                          reset(res.id);
                        }}
                      >
                        {
                          <img
                            className="search-profile-image"
                            alt=""
                            src={res.avatar}
                          ></img>
                        }
                        {<span className="searchUsername">{res.username}</span>}
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className="search-none">No results</div>
                )}
              </div>
            </div>
          </div>
          <div className="actionButtons">
            <NavLink className="homeNav" to="/posts">
              <svg
                aria-label="Home"
                className="_8-yf5 "
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </NavLink>
            <div>
              <CreatePostModal />
            </div>
            <NavLink to={`/users/${sessionUser.id}`}>
              {/* <i className="far fa-user-circle profilePageNav"></i> */}
              <img
                className="navBarProfileIcon"
                src={sessionUser.avatar}
                alt=""
              ></img>
            </NavLink>
            <ProfileButton user={sessionUser} />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }

  return <div>{isLoaded && navBar}</div>;
}

export default Navigation;
