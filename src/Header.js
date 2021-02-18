import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://sofia.medicalistes.fr/spip/IMG/rs/fb/f_logo_RGB-Blue_512.png'
          alt=''
        />
        <div className='header__input'>
          <SearchIcon />
          <input type='text' placeholder='Rechercher sur Facebook' />
        </div>
      </div>

      <div className='header__middle'>
        <div className='header__option header__option--active'>
          <HomeIcon fontSize='large' active />
        </div>
        <div className='header__option'>
          <PeopleAltOutlinedIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <PlayCircleFilledWhiteOutlinedIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <StorefrontOutlinedIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <SupervisedUserCircleOutlinedIcon fontSize='large' />
        </div>
      </div>

      <div className='header__right'>
        <div className='header__info'>
          <Avatar src="https://avatars.githubusercontent.com/u/49886328?s=460&u=bcc6d79d2cadb802a2376eaf0eedfae69a510878&v=4" className='avatar' />
          <h3>Chris Kirk</h3>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ChatIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
