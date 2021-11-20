import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadOnePost } from "../../store/individualpost";
import "./EditCommentForm.css";
import { editCommentThunk } from "../../store/individualpost";


const EditCommentForm = ({ comment }) => {
  const dispatch = useDispatch();
  const [editComment, setEditComment] = useState(comment.comment);
  const userId = useSelector((state) => state.session?.user?.id);
  const [show, setShow] = useState(true);
  const [isClicked, setIsClicked] = useState(false)
  const post = useSelector((state) => state.individualPost);
  const myComment = useSelector((state) => state.comments)
  
    // const post = useSelector((state) => state?.session?.post);
    
    // useEffect(() => {
        // dispatch(loadOnePost(post.id));
    // }, [editCommentThunk]);

  const updateSetShow = (e) => {
    show ? setShow(false) : setShow(true);
    setIsClicked(true)
  };

  const updateDetails = (e) => {
    setEditComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      comment: editComment,
      id: comment.id
    };

    dispatch(editCommentThunk(payload));
    comment= payload
    dispatch(loadOnePost(post.id))
    // dispatch(hideModal());
    updateSetShow();
  };

  return (
    <div>
      <button
        className={`editButton ${show ? null : "hidden"}`}
        onClick={updateSetShow}
        disabled={isClicked}
      >
        EDIT
      </button>

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
          ></textarea>
          <button
            onClick={handleSubmit}
            className={`editButton ${show ? "hidden" : null}`}
          >
            Update Comment
          </button>
          <button
            onClick={()=> setIsClicked(false)}
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
