import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { useHistory } from "react-router-dom";
import "./Navigation.css";
import { Link } from "react-router-dom";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/");
  };

  const about = (e) => {
      e.preventDefault();
      history.push("/about");
  }

  return (
    <div className="logout-actions-wrapper">
      <i className="fas fa-sign-out-alt logOutButton" onClick={openMenu}></i>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            {/* <Link to="/about"className="logout-button" >
              About the Site Creator
            </Link> */}
            <button className="logout-button" onClick={about}>
              About the Site Creator
            </button>
          </li>
          <li>
            <button className="logout-button" onClick={logout}>
              Log Out
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ProfileButton;
