// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Redirect, Link } from "react-router-dom";
// import * as sessionActions from "../../store/session";
// import "./SignupForm.css";

// function SignupFormPage() {
//   const dispatch = useDispatch();
//   const sessionUser = useSelector((state) => state.session.user);
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [avatar, setAvatar] = useState("")
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errors, setErrors] = useState([]);
//   const [credential, setCredential] = useState("");

//   if (sessionUser) return <Redirect to="/posts" />;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password === confirmPassword) {
//       setErrors([]);
//       return dispatch(
//         sessionActions
//           .createUser({ email, username, password, avatar }).then(() => {
//             setUsername("");
//             setEmail("");
//             setPassword("");
//             setAvatar(null);
//           })
//       ).catch(async (res) => {
//         const data = await res.json();
//         if (data && data.errors) setErrors(data.errors);
//       });
//     }
//     return setErrors([
//       "Confirm Password field must be the same as the Password field",
//     ]);
//   };
//   const updateFile = (e) => {
//     const file = e.target.files[0];
//     if (file) setAvatar(file);
//   };
//   const demoUser = async () => {
//     return dispatch(
//       sessionActions.login({ credential: "Demo-lition", password: "password" })
//     );
//   };

// //    const demoUserTwo = async (e) => {
// //      e.preventDefault();
// //      setCredential("DemoTwo");
// //      setPassword("password");
// //      const demo = dispatch(
// //        sessionActions.login({ credential: "DemoTwo", password: "password" })
// //      );
// //      return demo;
// //    };

//   return (
//     <div className="formSignUpPage">
//       <div className="mainSignUpPage">
//         <div className="formWrapper">
//           <div className="imageWrapper">
//             <img
//               className="countableLogo"
//               src="https://res.cloudinary.com/dis83syog/image/upload/v1636988652/Countable/Screen_Shot_2021-11-15_at_9.44.55_AM_eoweib.png"
//               alt=""
//             ></img>
//           </div>
//           <form className="signUpFormOnLogin" onSubmit={handleSubmit}>
//             <ul>
//               {errors.map((error, idx) => (
//                 <li key={idx}>{error}</li>
//               ))}
//             </ul>
//             <input
//               className="signUpFormInput"
//               placeholder="Email"
//               type="text"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <input
//               className="signUpFormInput"
//               placeholder="Username"
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//             <label>
//               Profile Picture:
//               <input type="file" onChange={updateFile} />
//             </label>
//             <input
//               className="signUpFormInput"
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <input
//               className="signUpFormInput"
//               type="password"
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//             <button className="signUpButton" type="submit">
//               Sign Up
//             </button>
//             <button className="signUpButton" type="submit" onClick={demoUser}>
//               Demo User
//             </button>
//             {/* <button className="loginButton" type="submit" onClick={demoUserTwo}>
//               Demo User 2
//             </button> */}
//           </form>
//
//         </div>
//         <div className="logInForm">
//           <p>
//             {" "}
//             Have an account?&nbsp;
//             <Link className="link" to="/">
//               Log in
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignupFormPage;

import React, { useState } from "react";
import { createUser } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import "./SignupForm.css";
import * as sessionActions from "../../store/session";

const SignupFormPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");
  //   const [credential, setCredential] = useState("");
  const [avatar, setAvatar] = useState(null);
  // for multuple file upload
  //   const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  if (user) return <Redirect to="/posts" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];
    dispatch(createUser({ username, email, password, avatar }))
      .then(() => {
        setUsername("");
        setEmail("");
        setPassword("");
        setAvatar(null);
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          newErrors = data.errors;
          setErrors(newErrors);
        }
      });
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setAvatar(file);
  };

  // for multiple file upload
  //   const updateFiles = (e) => {
  //     const files = e.target.files;
  //     setImages(files);
  //   };

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
      <div className="mainSignUpPage">
        <div className="formWrapper">
          <div className="imageWrapper">
            <img
              className="countableLogo"
              src="https://res.cloudinary.com/dis83syog/image/upload/v1636988652/Countable/Screen_Shot_2021-11-15_at_9.44.55_AM_eoweib.png"
              alt=""
            ></img>
          </div>
          {errors.length > 0 &&
            errors.map((error) => <div key={error}>{error}</div>)}
          <form
            className="signUpFormOnLogin"
            // style={{ display: "flex", flexFlow: "column" }}
            onSubmit={handleSubmit}
          >
            <input
              className="signUpFormInput"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="signUpFormInput"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>
              <input
                className="signUpFormInput"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <input
              className="signUpFormInput"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            /> */}
            </label>
            <label>
              Profile Picture:
              <input
                className="signUpFormInput"
                name="avatar"
                type="file"
                required
                onChange={updateFile}
              />
            </label>
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
    </div>
  );
};

export default SignupFormPage;
