import React from 'react';
import './Topbar.css';
import { Search,Person, Chat, Notifications } from '@material-ui/icons';

function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">AliuSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input type="text"
            placeholder="Search for friend, post or video"
            className='searchInput'
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <cpan className="topbarIconBadge">1</cpan>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <cpan className="topbarIconBadge">2</cpan>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <cpan className="topbarIconBadge">1</cpan>
          </div>
      
        </div>
        <img src='/Image/Profile/2.jpg' alt="" className="topbarImage" />
      </div>
      
    </div>
  )
}

export default Topbar

