import React, { useEffect, useState } from "react";
import { getAllPostsThunk } from "../../store/posts";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../CountablePosts/PostCard";
import CreatePostModal from "../CountablePosts/CreatePostModal";
import "./Feed.css"


function Feed() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => Object.values(state.posts));
//   const [currentPosts, setCurrentPosts] = useState(posts);
 
  useEffect(() => {
    dispatch(getAllPostsThunk());
  }, [dispatch]);



  return (
    <>
      
      <div className="feedContainer">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default Feed;
