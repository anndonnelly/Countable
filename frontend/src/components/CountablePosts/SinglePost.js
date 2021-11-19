// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router";
// import { loadOnePost } from "../../store/individualpost";
// import "./SinglePost.css";
// import { deletePostThunk } from "../../store/posts";
// import { useHistory } from "react-router-dom";
// import { Modal } from "../../context/Modal";
// import EditPostForm from "./EditPostForm";

// const SinglePost = () => {
//     const { id } = useParams();
//     const dispatch = useDispatch();
//     const history = useHistory();
//     const [isEditing, setIsEditing] = useState(false);
//     const post = useSelector((state) => state.individualPost);
//     const posts = useSelector((state) => state.posts);


//   useEffect(() => {
//     dispatch(loadOnePost(id));
//     if (isEditing) {
//       dispatch(loadOnePost(id));
//     }
//   }, [dispatch, id, isEditing]);


//   const deletePost = async() => {
//     // await dispatch(getAllPostsThunk());
//     await dispatch(deletePostThunk(post.id));

//     history.push("/posts")
//   };


//      return (
//        <>
//          <div className="post">
//            <img className="postImage" src={post?.imageUrl} alt=""></img>
//            <br></br>
//            {post?.caption}
//            <br></br>
//          </div>
//          <div>
//            <button value={isEditing} className="" onClick={()=>setIsEditing(true)}>
//              Edit
//            </button>
//            {isEditing && (
//              <Modal onClose={() => setIsEditing(false)}>
//                <EditPostForm setIsEditing={setIsEditing} />
//              </Modal>
//            )}
//            <button onClick={deletePost}>Delete</button>
//          </div>
//        </>
//      );

// }
// export default SinglePost;
