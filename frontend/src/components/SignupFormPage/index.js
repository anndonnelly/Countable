import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import "./SignupForm.css";
import "../CountablePosts/CreatePostForm.css";
import * as sessionActions from "../../store/session";

const SignupFormPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const sessionUser = useSelector((state) => state.session.user);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [src, setSrc] = useState(null);
  const [errors, setErrors] = useState([]);
  const [inputLength, setInputLength] = useState(false);
  const [image, setImage] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
//   if (user) return <Redirect to={`/users/${sessionUser.id}`} />;
if (user) return <Redirect to={`/posts`} />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (avatar && image === false) {
      const arr = [...errors];
      arr.push("Please provide an appropraite image file");
      return setErrors(arr);
    }
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.createUser({ email, username, password, avatar })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }

    setInputLength(false);

    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
      setSrc(URL.createObjectURL(file));
    }
  };

  const demoUser = async () => {
    return dispatch(
      sessionActions.login({ credential: "Demo-lition", password: "password" })
    );
  };

  //    const demoUserTwo = async (e) => {
  //      e.preventDefault();
  //      setCredential("DemoTwo");
  //      setPassword("password");
  //      const demo = dispatch(
  //        sessionActions.login({ credential: "DemoTwo", password: "password" })
  //      );
  //      return demo;
  //    };

  return (
    <div className="formSignUpPage">
      <div className="tagline-wrapper">
        <span>
          Countable - helping you rate the quality of local services and hold
          local officials to account
        </span>
      </div>
      <div className="mainSignUpPage">
        <div className="formWrapper">
          <div className="imageWrapper">
            <img
              className="countableLogo"
              src="https://res.cloudinary.com/dis83syog/image/upload/v1636988652/Countable/Screen_Shot_2021-11-15_at_9.44.55_AM_eoweib.png"
              alt=""
            ></img>
          </div>
          {
            <ul>
              {errors.map((error, idx) => (
                <li className="textError" key={idx}>
                  {error}
                </li>
              ))}
            </ul>
          }
          <form
            autoComplete="chrome-off"
            className="signUpFormOnLogin"
            onSubmit={handleSubmit}
          >
            <input
              className="signUpFormInput"
              type="text"
              required
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="signUpFormInput"
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="signUpFormInput"
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="signUpFormInput"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <div className="add-pic-wrapper">
              <label className="addPic">
                Profile Picture
                <input
                  accept="image/*"
                  className="addPostImageInput"
                  name="avatar"
                  type="file"
                  // required
                  onChange={(e) => {
                    if (e.currentTarget.files.length) {
                      setInputLength(true);
                    }
                    updateFile(e);
                  }}
                />
              </label>

              {inputLength && <i className="far fa-check-circle tick"></i>}
            </div>
            <button className="signUpButton" type="submit">
              Sign Up
            </button>
            <button className="signUpButton" type="submit" onClick={demoUser}>
              Demo User
            </button>
            {/* <button className="loginButton" type="submit" onClick={demoUserTwo}>
             Demo User 2
             </button> */}
          </form>
          <div>
            {user && (
              <div>
                <h1>{user.username}</h1>
                <img
                  style={{ width: "150px" }}
                  src={user.profileImageUrl}
                  alt="profile"
                />
              </div>
            )}
          </div>
        </div>
        <div className="logInForm">
          <p>
            Have an account?&nbsp;
            <Link className="link" to="/">
              Log in
            </Link>
          </p>
        </div>
      </div>
      <img
        className="preview-img"
        src={src}
        hidden={true}
        alt=""
        onError={() => setImage(false)}
        onLoad={() => setImage(true)}
      ></img>
    </div>
  );
};

export default SignupFormPage;
