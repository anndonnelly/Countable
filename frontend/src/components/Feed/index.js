import React, { useEffect } from "react";
import { getAllPostsThunk } from "../../store/posts";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../CountablePosts/PostCard";
import "./Feed.css";

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
        {/* .reverse() */}
      </div>
    </>
  );
}

export default Feed;
