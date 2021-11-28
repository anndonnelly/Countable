import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editOnePost } from "../../store/individualpost";
import { hideModal } from "../../store/modal";
import "./CreatePostForm.css";
import { setCurrentModal } from "../../store/modal";
import CreateCommentFormModal from "../Comments/CreateCommentFormModal";
import { showModal } from "../../store/modal";
import { loadOnePost } from "../../store/individualpost";


const EditPostForm = ({ setIsEditing }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.individualPost);
  const userId = useSelector((state) => state.session.user.id);
  const [editCaption, setEditCaption] = useState(post.caption);

  const handleEdit = (e) => {
    e.preventDefault();
    const payload = {
      caption: editCaption,
      userId: userId,
    };
   
    dispatch(editOnePost(payload, post.id)).then(() =>
      dispatch(loadOnePost(post.id)).then(() =>  dispatch(setCurrentModal(CreateCommentFormModal))
    ));

    dispatch(showModal())

  };

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
          <div className="fieldDiv">
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
