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
  //   const [imageUrl, setImageUrl] = useState("");
  //   const [caption, setCaption] = useState("");
  //   const posts = useSelector((state) => state.posts)
  //   const [valErrors, setValErrors] = useState([]);

  //   const validatePost = () => {
  //     const errors = [];
  //     if (!imageUrl) {
  //       errors.push("Please provide an image for your post.");
  //     }
  //     if (caption.length === 0) {
  //       errors.push("Please provide a caption for your post");
  //     }

  //     setValErrors(errors);
  //     return errors;
  //   };

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
      imageUrl: yup.mixed().required("Please provide an image for your post."),
    }),
    onSubmit: async (values, {setSubmitting}) => {
       dispatch(createPostThunk(values)).then(()=>dispatch(getAllPostsThunk()));
    //   if (createdPost) {
        // dispatch(loadOnePost(createdPost.id));
        setShowPostModal(false);
        history.push(`/posts`);
    
    },
  });

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const errs = validatePost();
  //     if (!errs.length) {
  //       const payload = {
  //         imageUrl,
  //         caption,
  //         userId: ownerId,
  //       };

  //       let createdPost = await dispatch(createPostThunk(payload));

  //       if (createdPost) {
  //         dispatch(getAllPostsThunk());
  //         // dispatch(loadOnePost(createdPost.id));
  //         setShowPostModal(false);
  //         history.push(`/posts`);
  //       }
  //     }
  //   };

//   const updateFile = (e) => {
//     const file = e.target.files[0];
//     if (file) setImageUrl(file);
//   };

  return (
    <div className="createPostModal">
      <div className="modalHeader">
        <h2 className="createPostHeader">Create a Post</h2>
      </div>
      <form className="createPostContainer" onSubmit={formik.handleSubmit}>
        {/* <ul className="errors"> */}
        {/* {valErrors.length > 0 */}
        {/* {valErrors.map((valError) => (
            <li key={valError}>{valError}</li>
          ))} */}
        {/* : null} */}
        {/* </ul> */}
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
          <label className="addPostImageLabel">
            Select from computer
            <input
              className="addPostImageInput"
            //   value={formik.values.imageUrl}
              type="file"
              name="imageUrl"
              id="imageUrl"
              //   multiple
              //   required
              onChange={(event) => {
                formik.setFieldValue("imageUrl", event.currentTarget.files[0]);
              }}
            ></input>
          </label>
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
