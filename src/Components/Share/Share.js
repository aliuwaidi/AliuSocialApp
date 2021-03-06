import { EmojiEmotions, Label, PermMedia, Room } from '@material-ui/icons';
import React from 'react';
import './Share.css'

function Share() {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/Image/Profile/2.jpg" alt="" className='shareProfileImg'/>
          <input type="text" className="shareInput" placeholder='What is in your mind Aliu?' />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor='tomato' className='shareIcon' />
              <span className="shareOptionText">Photo or Video</span>
            </div>
             <div className="shareOption">
              <Label htmlColor='green' className='shareIcon'/>
              <span className="shareOptionText">Tag</span>
            </div>
             <div className="shareOption">
              <Room htmlColor='blue' className='shareIcon'/>
              <span className="shareOptionText">Location</span>
            </div>
             <div className="shareOption">
              <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  )
}

export default Share
