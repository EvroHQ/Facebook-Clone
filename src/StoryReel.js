import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
  return (
    <div className='storyReel'>
      <Story
        image='https://images.unsplash.com/photo-1613575998061-0f59337425f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
        profileSrc='https://avatars.githubusercontent.com/u/49886328?s=460&u=bcc6d79d2cadb802a2376eaf0eedfae69a510878&v=4'
        title='Chris Kirk'
      />
      <Story
        image='https://images.unsplash.com/photo-1613606739083-9da88571bcff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
        profileSrc='https://dvyvvujm9h0uq.cloudfront.net/com/articles/1525892354-portrait-featured.jpg'
        title='Magalie'
      />
      <Story
        image='https://media.gettyimages.com/photos/president-barack-obama-waves-after-he-spoke-during-the-selectusa-picture-id467354336?s=612x612'
        profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy0KlX0HFKywD2AVCwvlTET1WK2lITYAB8sQ&usqp=CAU'
        title='Barak Obama'
      />
      <Story
        image='https://images.unsplash.com/photo-1613591733452-811c8e40bc99?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
        profileSrc='https://briansmith.com/wp-content/uploads/2013/01/celebrity-portrait-photography.jpg'
        title='Jennifer Jd'
      />
      <Story
        image='https://images.unsplash.com/photo-1613606753104-5a589e1eb448?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=905&q=80'
        profileSrc='https://m.media-amazon.com/images/I/818NTpd3WmL._SS500_.jpg'
        title='Vagel'
      />
    </div>
  );
}

export default StoryReel;
