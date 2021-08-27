import { Favorite, MoreVert, ThumbUp } from '@material-ui/icons';
import React from 'react';
import './Post.css';
import { Users } from '../../dummyData';
import { useState } from 'react';

function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const userName = Users.filter(user => (user.id === post.userId));

  const handleClick = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked( !isLiked )
  }
  return (
    <div className='post' >
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={userName[0].profilePicture} alt="" className="postProfileImg" />
            <span className="postUsername">
              {userName[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc} </span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBootomLeft">
            <ThumbUp className='likeIcon' onClick = {handleClick} />
            <Favorite className='likeIcon' onClick = {handleClick} />
            <span className="postLikeCounter">{like} peoples like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post