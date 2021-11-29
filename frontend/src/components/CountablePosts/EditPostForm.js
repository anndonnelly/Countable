import { useSelector, useDispatch } from "react-redux";
import { editOnePost } from "../../store/individualpost";
import { hideModal } from "../../store/modal";
import "./CreatePostForm.css";
import { setCurrentModal } from "../../store/modal";
import CreateCommentFormModal from "../Comments/CreateCommentFormModal";
import { showModal } from "../../store/modal";
import { loadOnePost } from "../../store/individualpost";
import * as yup from "yup";
import { useFormik } from "formik";
import { getAllPostsThunk } from "../../store/posts";

const EditPostForm = ({ setIsEditing }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.individualPost);
  const userId = useSelector((state) => state.session.user.id);
//   const [editCaption, setEditCaption] = useState(post.caption);

  const formik = useFormik({
    initialValues: {
      caption: post.caption,
      userId,
    },
    validationSchema: yup.object({
      caption: yup
        .string()
        .min(5)
        .max(350)
        .required("Caption must be be between 5 and 350 characters"),
    }),

    onSubmit: async (values, { setSubmitting }) => {
      dispatch(editOnePost(values, post.id)).then(() =>
        dispatch(loadOnePost(post.id))
          .then(() => dispatch(setCurrentModal(CreateCommentFormModal)))
          .then(() => dispatch(getAllPostsThunk()))
      );

      dispatch(showModal());
    },
  });

  return (
    <div className="createPostModal">
      <div className="modalHeader">
        <h2 className="createPostHeader">Update</h2>
      </div>
      <div>
        <div className="closeModal" onClick={() => dispatch(hideModal())}>
          x
        </div>
        <form className="createPostContainer" onSubmit={formik.handleSubmit}>
          <div className="fieldDiv">
            <textarea
              id="caption"
              name="caption"
              type="text"
              rows="8"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.caption}
            />
          </div>
          {formik.touched.caption && formik.errors.caption ? (
            <div className="errorText">{formik.errors.caption}</div>
          ) : null}
          <button
           
            className="addPostImageLabel"
            type="submit"
          >
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPostForm;
