import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className='post'>
      <div className='post__top'>
        <Avatar src={profilePic} className='post__avatar' />
        <div className='post__topInfo'>
          <h3>{username}</h3>
          <p>{timestamp}</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpAltOutlinedIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <CommentOutlinedIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <ShareOutlinedIcon />
          <p>Share</p>
        </div>
      </div>

    </div>
  );
}

export default Post;
