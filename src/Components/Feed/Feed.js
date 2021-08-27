import React from 'react';
import { Posts } from '../../dummyData';
import Post from '../Post/Post';
import Share from '../Share/Share';
import './Feed.css';



function Feed() {
  return (
    <div className='feed'>
      <div className="feeWrapper">
        <Share />
        {Posts.map(post => (
          <Post key={post.id} post={post}/>
        ))}
      </div>
    </div>
  )
}

export default Feed
