import React, { useEffect } from "react";
import { getAllPostsThunk } from "../../store/posts";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../CountablePosts/PostCard";
import CreatePostModal from "../CountablePosts/CreatePostModal";
import { deletePostThunk } from "../../store/posts";


function Feed() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => Object.values(state.posts));
  console.log("POST.LENGTH",posts.length)
 

  useEffect(() => {
    dispatch(getAllPostsThunk());
  }, [dispatch]);

    // useEffect(() => {}, [deletePostThunk]);

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
