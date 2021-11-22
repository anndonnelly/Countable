import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editOnePost } from "../../store/individualpost";
import { hideModal } from "../../store/modal";
// import { getAllPostsThunk } from "../../store/posts";
import "./CreatePostForm.css";
import { setCurrentModal } from "../../store/modal";
import CreateCommentFormModal from "../Comments/CreateCommentFormModal";
import { showModal } from "../../store/modal";
import { loadOnePost } from "../../store/individualpost";


const EditPostForm = ({ setIsEditing }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.individualPost);
  const userId = useSelector((state) => state.session.user.id);
//   const [editImageUrl, setEditImageUrl] = useState(post.imageUrl);
  const [editCaption, setEditCaption] = useState(post.caption);

  const handleEdit = (e) => {
    e.preventDefault();
    const payload = {
    //   imageUrl: editImageUrl,
      caption: editCaption,
      userId: userId,
    };
   
    dispatch(editOnePost(payload, post.id)).then(() =>
    //   dispatch(getAllPostsThunk())
      dispatch(loadOnePost(post.id)).then(() =>  dispatch(setCurrentModal(CreateCommentFormModal))
    ));

    // dispatch(hideModal());
    dispatch(showModal())

  };
  // setErrors(err);
    // const handleSubmit = async () => {
    //     await dispatch(loadOnePost(post.id));
    //     await dispatch(setCurrentModal(CreateCommentFormModal));
    //     await dispatch(showModal());
    // }

  return (
    <div className="createPostModal">
      <div className="modalHeader">
        <h2 className="createPostHeader">Update</h2>
      </div>
      <div>
        <div className="closeModal" onClick={() => dispatch(hideModal())}>
          x
        </div>
        <form className="createPostContainer" onSubmit={handleEdit}>
          {/* <ul className="errors">
             {valErrors.length > 0
               ? valErrors.map((valError) => <li key={valError}>{valError}</li>)
               : null}
           </ul> */}
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
          {/* <div>
            <label htmlFor="image">Image</label>
            <input
              value={editImageUrl}
              type="url"
              name="image"
              multiple
              required
              onChange={(e) => setEditImageUrl(e.target.value)}
            ></input>
          </div> */}
          <div className="fieldDiv">
            {/* <label>Caption</label> */}
            <textarea
              type="text"
              rows="8"
              value={editCaption}
              onChange={(e) => setEditCaption(e.target.value)}
            />
          </div>

          <button className="addPostImageLabel" type="submit">
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPostForm;
