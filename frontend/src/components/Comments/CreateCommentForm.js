// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// // import "./CreateEvent.css";
// import { createPostThunk } from "../../store/posts";

// function CreateCommentForm({ setShowPostModal }) {
//   const dispatch = useDispatch();
//   const history = useHistory();

//   const ownerId = useSelector((state) => state.session.user.id);

//   const [comment, setComment] = useState("");
//   const posts = useSelector((state) => state.posts);
//   const postId = Object.values(posts).length + 1;
//   const [valErrors, setValErrors] = useState([]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const payload = {
//       imageUrl,
//       caption,
//       userId: ownerId,
//     };

//     // const errors = [];
//     // if (!imageUrl)
//     //   errors.push("Please provide an image for your post.");
//     // if (!caption) errors.push("Please provide a description of your event");
//     // setValErrors(errors);

//     let createdPost = dispatch(createPostThunk(payload)).then((res) => {
//       return res;
//     });

//     if (createdPost) {
//       history.push(`/posts/${postId}`);
//       setShowPostModal(false);
//     }
//   };

//   return (
//     <div className="createEventModal">
//       <div>
//         <form onSubmit={handleSubmit}>
//           {/* <ul className="errors">
//             {valErrors.length > 0
//               ? valErrors.map((valError) => <li key={valError}>{valError}</li>)
//               : null}
//           </ul> */}
//           <div className="fieldDiv">
//             <input
//               placeholder="Add a comment..."
//               type="text"
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//             />
//           </div>
//           <div className="createEventButton">
//             <button type="submit">
//               Post
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CreateCommentForm;
