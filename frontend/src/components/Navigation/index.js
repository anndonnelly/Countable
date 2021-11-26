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
                        {res.username}
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
            <NavLink className="homeNav" to="/">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 homeNav"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                height="1em"
                width="1em"
                style={{ transform: "rotate(360deg)" }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg> */}
              <i className="fas fa-home"></i>
            </NavLink>
            <div>
              <CreatePostModal />
            </div>
            <NavLink to={`/users/${sessionUser.id}`}>
              <i className="far fa-user-circle profilePageNav"></i>
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
