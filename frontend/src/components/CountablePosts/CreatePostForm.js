import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createPostThunk } from "../../store/posts";
import { loadOnePost } from "../../store/individualpost";


function CreatePostForm({ setShowPostModal }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const ownerId = useSelector((state) => state.session.user.id);
  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");
  const posts = useSelector((state) => state.posts)
  const [valErrors, setValErrors] = useState([]);


   function isValidURL(string) {
     let res = string.match(
       /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
     );
     return res !== null;
   }

   const validatePost = () => {
     const errors = [];
     if (!imageUrl) {
       errors.push("Please provide an image for your post.");
     }
     if (!caption) {
       errors.push("Please provide a caption for your post");
     }

     if (!isValidURL(imageUrl)) {
       errors.push("Please provide a valid URL");
     }
     setValErrors(errors);
     return errors;
   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validatePost();
    if (!errs.length) {
    const payload = {
      imageUrl,
      caption,
      userId: ownerId,
    };

    let createdPost = await dispatch(createPostThunk(payload))
    

    if (createdPost) {
        dispatch(loadOnePost(createdPost.id));
        setShowPostModal(false);
        history.push(`/posts`);
    }
    }
  };

  return (
    <div className="createEventModal">
      <div className="modalHeader">
        <p>Create a Post</p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <ul className="errors">
            {/* {valErrors.length > 0 */}
              {valErrors.map((valError) => (
              <li key={valError}>{valError}</li>
              ))}
              {/* : null} */}
          </ul>
          {/* <div className="fieldDiv">
            <label>Photo</label>
            <input
              value={imageUrl}
              type="file"
              id="input"
              multiple
              onChange={(e) => setImageUrl(e.target.value)}
            ></input>
          </div> */}
          <div>
            <label htmlFor="image">Image</label>
            <input
              value={imageUrl}
              type="url"
              name="image"
              multiple
            //   required
              onChange={(e) => setImageUrl(e.target.value)}
            ></input>
          </div>
          <div className="fieldDiv">
            <label>Caption</label>
            <input
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
          </div>
          <div className="createEventButton">
            <button disabled={valErrors.length > 0} type="submit">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePostForm;

