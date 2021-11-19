import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { loadOnePost } from "../../store/individualpost";
import "./SinglePost.css";
import { deletePostThunk } from "../../store/posts";
// import DeleteModal from "./DeleteModal";
// import { editOnePost } from "../../store/individualpost";
import { useHistory } from "react-router-dom";
import { Modal } from "../../context/Modal";
import EditPostForm from "./EditPostForm";
import { getAllPostsThunk } from "../../store/posts";

const SinglePost = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    // const [edit, setEdit] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const post = useSelector((state) => state.individualPost);
    const posts = useSelector((state) => state.posts);


  useEffect(() => {
    dispatch(loadOnePost(id));
  }, [dispatch, id]);


  const deletePost = async() => {
    
    // await dispatch(getAllPostsThunk());
    await dispatch(deletePostThunk(post.id));

    history.push("/posts")
  };

console.log("jjjjjjjj",post)
     return (
       <>
         <div className="post">
           <img className="postImage" src={post?.imageUrl} alt=""></img>
           <br></br>
           {post?.caption}
           <br></br>
         </div>
         <div>
           <button value={isEditing} className="" onClick={()=>setIsEditing(true)}>
             Edit
           </button>
           {isEditing && (
             <Modal onClose={() => setIsEditing(false)}>
               <EditPostForm setIsEditing={setIsEditing} />
             </Modal>
           )}
           <button onClick={deletePost}>Delete</button>
         </div>
       </>
     );

}
export default SinglePost;
