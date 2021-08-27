import React from 'react';
import Topbar from '../../Components/Topbar/Topbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';
import Rightbar from '../../Components/Rightbar/Rightbar';
import './Home.css'


function Home() {
  return (
    <div>
      <Topbar />
      <div className="homeComponent">
        <Sidebar />
        <Feed/>
        <Rightbar/>
      </div>
    </div>
  )
}

export default Home
