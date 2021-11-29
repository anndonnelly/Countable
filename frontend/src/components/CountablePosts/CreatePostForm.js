import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createPostThunk } from "../../store/posts";
import { getAllPostsThunk } from "../../store/posts";
import * as yup from "yup";
import { useFormik } from "formik";
import "./CreatePostForm.css";

function CreatePostForm({ setShowPostModal }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const ownerId = useSelector((state) => state.session.user.id);
  const [inputLength, setInputLength] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const supportedFormats = ["image/jpg", "image/jpeg", "image/png"];

  const formik = useFormik({
    initialValues: {
      imageUrl: "",
      caption: "",
      userId: ownerId,
    },
    validationSchema: yup.object({
      caption: yup
        .string()
        .min(5)
        .max(350)
        .required("Caption must be be between 5 and 350 characters"),
      imageUrl: yup
        .mixed()
        .required("Please provide an image for your post.")
        .test(
          "format",
          "supported formats: png, jpeg, jpg",
          (value) => !value || (value && supportedFormats.includes(value.type))
        ),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      dispatch(createPostThunk(values)).then(() =>
        dispatch(getAllPostsThunk())
      );
  
      setShowPostModal(false);
      history.push(`/posts`);
      setInputLength(false);
      setImagePreview(null);
    },
  });


  return (
    <div className="createPostModal">
      <div className="modalHeader">
        <h2 className="createPostHeader">Create a Post</h2>
      </div>
      <form className="createPostContainer" onSubmit={formik.handleSubmit}>
        <div>
          {imagePreview && (
            <img
              style={{ width: "100px", height: "100px" }}
              src={imagePreview}
              alt=""
            ></img>
          )}
          <div className="add-img-wrapper">
            <label className="addPostImageLabel">
              Select from computer
              <input
                className="addPostImageInput"
                type="file"
                name="imageUrl"
                id="imageUrl"
                accept="image/*"
                //   multiple
                //   required
                onChange={(event) => {
                  if (event.currentTarget.files.length) {
                    setInputLength(true);
                  }
                  setImagePreview(
                    URL.createObjectURL(event.currentTarget.files[0])
                  );
                  formik.setFieldValue(
                    "imageUrl",
                    event.currentTarget.files[0]
                  );
                }}
              ></input>
            </label>
            {inputLength && <i className="far fa-check-circle tick"></i>}
          </div>
          {formik.touched.imageUrl && formik.errors.imageUrl ? (
            <div className="errorText">{formik.errors.imageUrl}</div>
          ) : null}
        </div>
        <div className="fieldDiv">
          <textarea
            id="caption"
            name="caption"
            placeholder="Caption"
            type="text"
            rows="4"
            className="captionOnCreatePost"
            value={formik.values.caption}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.caption && formik.errors.caption ? (
            <div className="errorText">{formik.errors.caption}</div>
          ) : null}
        </div>
        <button
          className="createPostButton"
          //   disabled={valErrors.length > 0}
          type="submit"
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default CreatePostForm;
