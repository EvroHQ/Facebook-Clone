import React from 'react';
import SidebarRow from './SidebarRow';
import HistoryIcon from '@material-ui/icons/History';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FlagIcon from '@material-ui/icons/Flag';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow
        src='https://avatars.githubusercontent.com/u/49886328?s=460&u=bcc6d79d2cadb802a2376eaf0eedfae69a510878&v=4'
        title='Chris Kirk'
      />
      <SidebarRow Icon={FlagIcon} title='Pages' />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Centre d'information"
      />
      <SidebarRow Icon={PeopleIcon} title='Amis' />
      <SidebarRow Icon={HistoryIcon} title='Souvenirs' />
      <SidebarRow Icon={GroupAddIcon} title='Groupes' />
      <SidebarRow Icon={ExpandMoreIcon} title='Voir plus' />
      <hr />
    </div>
  );
}

export default Sidebar;
