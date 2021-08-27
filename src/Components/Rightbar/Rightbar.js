import { CardGiftcard } from '@material-ui/icons';
import React from 'react';
import './Rightbar.css';
import { Users } from '../../dummyData';
import Online from '../Online/Online';

function Rightbar({profile}) {

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <CardGiftcard className='birthdayIcon' />
          <img src="" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <strong>RawRaw </strong> and <strong>3 other friends</strong> have a birthday today
          </span>
        </div>
        <img src="/Image/Ad/3.jpg" alt="" className="rightbarAdImg" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(user => (
            <Online key={user.id} user={user}/>
          ))}
          
        </ul>
      </>
    
    )
  }

  const ProfileRightbar = () =>{
    return (
      <>
        <h4 className='rightbarTitle' >User Information </h4>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Dallas</span>
        </div>
         <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Dallas</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Married</span>
        </div>

        <h4 className='rightbarTitle2' >User Friends </h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="/Image/Profile/3.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/Image/Profile/4.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/Image/Profile/5.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/Image/Profile/6.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/Image/Profile/7.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/Image/Profile/8.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
        <div className="extras">
          <div className="birthdayContainer">
          <CardGiftcard className='birthdayIcon' />
          <img src="" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <strong>RawRaw </strong> and <strong>3 other friends</strong> have a birthday today
          </span>
        </div>
        <img src="/Image/Ad/2.jpg" alt="" className="rightbarAdImg" />
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
       {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}

export default Rightbar;
