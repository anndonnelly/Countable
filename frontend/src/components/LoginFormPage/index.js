import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import "./LoginForm.css";

function LoginFormPage() {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/posts" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

//   const demoUser = async () => {
//     setCredential("Demo-lition");
//     setPassword("password");
//     return dispatch(sessionActions.login({ credential, password }));
//   };
 const demoUser = async () => {
   return dispatch(
     sessionActions.login({ credential: "Demo-lition", password: "password" })
   );
 };

  //   const demoUserTwo = async (e) => {
  //     e.preventDefault();
  //     setCredential("DemoTwo");
  //     setPassword("password");
  //     const demo = dispatch(
  //       sessionActions.login({ credential: "DemoTwo", password: "password" })
  //     );
  //     return demo;
  //   };

  return (
    <div className="formLoginPage">
      <div className="tagline-wrapper">
        <span>
          Countable - helping you rate the quality of local services and hold local officials to account
        </span>
      </div>
      <div className="mainLoginPage">
        <div className="formWrapper">
          <div className="imageWrapper">
            <img
              className="countableLogo"
              src="https://res.cloudinary.com/dis83syog/image/upload/v1636988652/Countable/Screen_Shot_2021-11-15_at_9.44.55_AM_eoweib.png"
              alt=""
            ></img>
          </div>
          <form className="loginForm" onSubmit={handleSubmit}>
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <input
              className="loginFormInput"
              placeholder="Email"
              type="email"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              //   required
            />
            <input
              className="loginFormInput"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              //   required
            />
            <button className="loginButton" type="submit">
              Log In
            </button>
            <button className="loginButton" onClick={demoUser}>
              Demo User
            </button>
            {/* <button className="loginButton" onClick={demoUserTwo}>
              Demo User 2
            </button> */}
          </form>
        </div>
        <div className="signUpForm">
          <p>
            {" "}
            Don't have an account?&nbsp;
            <Link className="link" to="/signup">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginFormPage;
