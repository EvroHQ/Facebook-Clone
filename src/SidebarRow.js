import React from 'react'
import { Avatar } from "@material-ui/core";
import './SidebarRow.css';

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
    {src && <Avatar className="Avatar" src={src} />}
    {Icon && <Icon />}
      <h4><p>{title}</p></h4>
    </div>
  );
}

export default SidebarRow;
