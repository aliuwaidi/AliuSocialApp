import React from 'react';
import './Sidebar.css';
import { Chat, RssFeed,
PlayCircleFilled, 
People,
HelpOutline,
Bookmark,
WorkOutline,
Event,
  School
} from '@material-ui/icons';
import { Users } from '../../dummyData';
import CloseFriend from '../CloseFriend/CloseFriend';

function Sidebar() {

  
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed />
            <span className="sibarListItemText">Feed</span>
          </li>
           <li className="sidebarListItem">
            <Chat />
            <span className="sibarListItemText">Chats</span>
          </li>
           <li className="sidebarListItem">
            <PlayCircleFilled />
            <span className="sibarListItemText">Videos</span>
          </li>
           <li className="sidebarListItem">
            <People/>
            <span className="sibarListItemText">Groups</span>
          </li>
           <li className="sidebarListItem">
            <Bookmark/>
            <span className="sibarListItemText">Bookmarks</span>
          </li>
           <li className="sidebarListItem">
            <HelpOutline/>
            <span className="sibarListItemText">Questions</span>
          </li>
           <li className="sidebarListItem">
            <WorkOutline />
            <span className="sibarListItemText">Jobs</span>
          </li>
           <li className="sidebarListItem">
            <Event />
            <span className="sibarListItemText">Events</span>
          </li>
           <li className="sidebarListItem">
            <School />
            <span className="sibarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
           {Users.map(user => (
            <CloseFriend key={user.id} user={user}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
