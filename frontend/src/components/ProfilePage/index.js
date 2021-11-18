import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostsThunk } from "../../store/posts";
import { getAllUserPostsThunk } from "../../store/userPosts";
import { useParams } from "react-router";
import "./ProfilePage.css";

function ProfilePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const ownerId = useSelector((state) => state.session.user.id);
  const posts = useSelector((state) => state.userPosts);
  const postLists = Object.values(posts);

  // const [selectedUser, setselectedUser] = useState({});
  console.log(postLists);

  // postLists.filter(post = post.User.id === )

  useEffect(() => {
    dispatch(getAllUserPostsThunk(id));
  }, [dispatch]);

  return (
    <>
      <div>
        PROFILE PAGE
        <div>{postLists[0]?.User?.username}</div>
        <div>
          {postLists.map((post) => (
            <img
              className="postImage"
              key={post.id}
              src={post.imageUrl}
              alt=""
            ></img>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProfilePage;

// {
//   post &&
//     Object.values(post?.Comments).map((comment) => (
//       <div>
//         <li key={comment.id}>{comment.comment}</li>
//         <br></br>
//       </div>
//     ));
// }
