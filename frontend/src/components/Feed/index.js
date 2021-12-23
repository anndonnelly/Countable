import React, { useEffect, useState } from "react";
import { getAllPostsThunk } from "../../store/posts";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../CountablePosts/PostCard";
import "./Feed.css";

function Feed() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => Object.values(state.posts));
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(getAllPostsThunk());
    setIsLoaded(true);
  }, [dispatch]);

  return (
    <>
      <div className="feedContainer">
        {isLoaded && (
            <>  
            {posts.map((post) => <PostCard key={post.id} post={post} />).reverse()}
            </>
           )}
      </div>
    </>
  );
}

export default Feed;
