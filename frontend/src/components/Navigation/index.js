import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import CreatePostModal from "../CountablePosts/CreatePostModal";
import { searchUsers } from "../../store/search";
import { useDispatch } from "react-redux";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const [input, setInput] = useState("")
const dispatch = useDispatch()
  useEffect (()=>{
      if (input.length > 0){
          dispatch(searchUsers(input));
      }
  }, [dispatch, searchUsers])

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
            <input
            value={input}
            placeholder="Search"
            onChange={e => setInput(e.target.value)}>
            </input>
          </div>
          <div className="actionButtons">
            <div>
              <CreatePostModal />
            </div>
            <NavLink to="/">Home</NavLink>
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
