import React from 'react';
import Topbar from '../../Components/Topbar/Topbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';
import Rightbar from '../../Components/Rightbar/Rightbar';
import './Profile.css'

function Profile() {
  return (
    <div className='profile' >
      <Topbar />
      <div className="profileWrapper">
        <div className="profileLeft">
          <Sidebar />
        </div>
        <div className="profileRight">
          <div className="profileCover">
            <img src="/Image/Post/3.jpg" alt="" className="profileBackgroundImg" />
            <img src="/Image/Profile/2.jpg" alt="" className="profileImg"/>
          </div>
          <div className="profileInfo">
            <h4 className="profileName">Waidi Aliu </h4>
            <p className="profileDesc">Hello there!!!</p>
          </div>
          <div className="profileFeedAndRightbar">
            <Feed/>
            <Rightbar profile/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Profile
