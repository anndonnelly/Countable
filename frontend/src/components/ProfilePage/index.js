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

  /*
  {
  "id": 4,
  "username": "pdonnelly",
  "avatar": "https://res.cloudinary.com/dis83syog/image/upload/v1637338120/Countable/IMG-5981_knrrek.jpg",
  "bio": null
}*/

  //   console.log(postLists[0].User);
  //   console.log(postLists[0].User);
  return (
    // <>
    <div className="profile_page">
      <div className="user_info_wrapper">
        <div className="avatar_wrapper">
          <img src={postLists[0]?.User?.avatar} />
        </div>
        <div className="user_data_wrapper"></div>
      </div>
      <div className="user_posts_wrapper">
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
    // </>
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
