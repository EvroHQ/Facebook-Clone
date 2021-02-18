import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />

      <Post
        profilePic='https://avatars.githubusercontent.com/u/49886328?s=460&u=bcc6d79d2cadb802a2376eaf0eedfae69a510878&v=4'
        message='Hello Facebook'
        timestamp='This is a Timestamp'
        username='Chris Kirk'
        image='https://images.unsplash.com/photo-1613575998061-0f59337425f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
      />
      <Post
        profilePic='https://avatars.githubusercontent.com/u/49886328?s=460&u=bcc6d79d2cadb802a2376eaf0eedfae69a510878&v=4'
        message='Hello Facebook'
        timestamp='This is a Timestamp'
        username='Chris Kirk'
        image='https://images.unsplash.com/photo-1613575998061-0f59337425f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
      />
      <Post
        profilePic='https://avatars.githubusercontent.com/u/49886328?s=460&u=bcc6d79d2cadb802a2376eaf0eedfae69a510878&v=4'
        message='Hello Facebook'
        timestamp='This is a Timestamp'
        username='Chris Kirk'
        image='https://images.unsplash.com/photo-1613575998061-0f59337425f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
      />
    </div>
  );
}

export default Feed;
