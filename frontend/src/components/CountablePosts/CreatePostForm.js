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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      imageUrl,
      caption,
      userId: ownerId,
    };

    // const errors = [];
    // if (!imageUrl)
    //   errors.push("Please provide an image for your post.");
    // if (!caption) errors.push("Please provide a description of your event");
    // setValErrors(errors);

    
    let createdPost = await dispatch(createPostThunk(payload))
    

    if (createdPost) {
        dispatch(loadOnePost(createdPost.id));
        setShowPostModal(false);
        history.push(`/posts`);
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
            {valErrors.length > 0
              ? valErrors.map((valError) => <li key={valError}>{valError}</li>)
              : null}
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
              required
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

