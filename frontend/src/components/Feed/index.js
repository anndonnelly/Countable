import React, { useEffect } from "react";
import { getAllPostsThunk } from "../../store/posts";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../CountablePosts/PostCard";
import CreatePostModal from "../CountablePosts/CreatePostModal";
import { deletePostThunk } from "../../store/posts";


function Feed() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => Object.values(state.posts));
 
  useEffect(() => {
    dispatch(getAllPostsThunk());
  }, [dispatch, posts]);

  return (
    <>
      <div>
        <CreatePostModal />
      </div>
      <div>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default Feed;
