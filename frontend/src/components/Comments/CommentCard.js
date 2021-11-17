import React from "react";


function CommentCard({post}) {

  return (
    <>
      {" "}
      <div>
        {post &&
          Object.values(post?.Comments).map((comment) => (
            <div>
              <div key={comment.id}>{comment.comment}</div>
            </div>
          ))}
      </div>
    </>
  );
}

export default CommentCard;
