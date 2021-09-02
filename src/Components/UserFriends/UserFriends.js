import React from 'react'

function UserFriends({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
      <div className="rightbarFollowing">
        <img src={PF+user.profilePicture} alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">{user.username }</span>
      </div>
  
  )
}

export default UserFriends
