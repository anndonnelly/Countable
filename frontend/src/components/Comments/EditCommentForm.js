import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadOnePost } from "../../store/individualpost";
import { editCommentThunk } from "../../store/individualpost";
import * as yup from "yup";
import { useFormik } from "formik";
import { getAllPostsThunk } from "../../store/posts";

import "./EditCommentForm.css";

const EditCommentForm = ({ comment }) => {
  const dispatch = useDispatch();
  const [editComment, setEditComment] = useState(comment.comment);
  const [show, setShow] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const post = useSelector((state) => state.individualPost);

  const updateSetShow = (e) => {
    if (!formik.errors.comment) {
      show ? setShow(false) : setShow(true);
      setIsClicked(true);
    }
  };

  //   const updateDetails = (e) => {
  //     setEditComment(e.target.value);
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     const payload = {
  //       comment: editComment,
  //       id: comment.id,
  //     };

  //     await dispatch(editCommentThunk(payload));
  //     dispatch(loadOnePost(post.id));
  //     updateSetShow();
  //   };

  const formik = useFormik({
    initialValues: {
      comment: editComment,
      id: comment.id,
    },
    validationSchema: yup.object({
      comment: yup
        .string()
        .min(1)
        .max(350)
        .required("Comment must be be between 1 and 350 characters"),
    }),

    onSubmit: async (values, { setSubmitting }) => {
      await dispatch(editCommentThunk(values, post.id));
      await getAllPostsThunk(post.id);
      await dispatch(loadOnePost(post.id));
      setIsClicked(false);
      //   dispatch(showModal());
    },
  });
  console.log("FORMIK", formik);
  return (
    <div>
      <i
        className={`far fa-edit editButton ${show ? null : "hidden"}`}
        onClick={updateSetShow}
      ></i>
      {isClicked && (
        <form onSubmit={formik.handleSubmit}>
          <div>
            <textarea
              //   maxLength="350"
              type="text"
              required
              id="comment"
              name="comment"
              value={formik.values.comment}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Edit Caption"
              className={`editButton ${show ? "hidden" : null}`}
            ></textarea>
            {formik.touched.comment && formik.errors.comment ? (
              <div className="errorText">{formik.errors.comment}</div>
            ) : null}
            <button
              //   disabled={formik.errors.comment}
              type="submit"
              onClick={updateSetShow}
              className={`editButton first ${show ? "hidden" : null}`}
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
        </form>
      )}
    </div>
  );
};

export default EditCommentForm;
