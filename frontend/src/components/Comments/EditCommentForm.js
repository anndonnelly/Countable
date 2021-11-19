import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../store/modal";
import { editCommentThunk } from "../../store/comments";

const EditCommentForm = () => {
  const dispatch = useDispatch();
  const [editComment, setEditComment] = useState("");
  const userId = useSelector((state) => state.session?.user?.id);
  const post = useSelector((state)=> state?.session?.post)
  console.log("EDITCOMMENT", post)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      comment: editComment,
      postId: post,
      userId
    };
    dispatch(editCommentThunk(payload));
    // dispatch(hideModal());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={editComment}
          onChange={(e) => setEditComment(e.target.value)}
          placeholder="Edit Caption"
        />
        <button>Update Comment</button>
      </form>
    </div>
  );
};

export default EditCommentForm;
