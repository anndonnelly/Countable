import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadOnePost } from "../../store/individualpost";
import "./EditCommentForm.css";
import { editCommentThunk } from "../../store/individualpost";
// import { PencilAltIcon } from "@heroicons/react/solid";

const EditCommentForm = ({ comment }) => {
  const dispatch = useDispatch();
  const [editComment, setEditComment] = useState(comment.comment);
  const [show, setShow] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const post = useSelector((state) => state.individualPost);

  const updateSetShow = (e) => {
    show ? setShow(false) : setShow(true);
    setIsClicked(true);
  };

  const updateDetails = (e) => {
    setEditComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      comment: editComment,
      id: comment.id,
    };

    await dispatch(editCommentThunk(payload));
    dispatch(loadOnePost(post.id));
    updateSetShow();
  };

  return (
    <div>
      {/* <button */}

      {/* > */}
      <i
        // class=""
        className={`far fa-edit editButton ${show ? null : "hidden"}`}
        onClick={updateSetShow}
      ></i>
      {/* </button> */}

      {isClicked && (
        <div>
          <textarea
            maxLength="200"
            type="text"
            required
            name="editComment"
            value={editComment}
            onChange={updateDetails}
            placeholder="Edit Caption"
            className={`editButton ${show ? "hidden" : null}`}
          ></textarea>
          <button
            onClick={handleSubmit}
            className={`editButton ${show ? "hidden" : null}`}
          >
            Update Comment
          </button>
          <button
            onClick={updateSetShow}
            className={`editButton ${show ? "hidden" : null}`}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default EditCommentForm;
