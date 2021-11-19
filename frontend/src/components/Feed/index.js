import React, { useEffect } from "react";
import { getAllPostsThunk } from "../../store/posts";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../CountablePosts/PostCard";
import "./Feed.css";
// import { getAllCommentsThunk } from "../../store/comments";


function Feed() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => Object.values(state.posts));
 
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
