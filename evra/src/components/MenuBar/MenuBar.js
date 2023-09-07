import React from 'react';
import MenubarItem from './MenuBarItem';
import '../../styles/MenuBar.css'
import { Button } from 'reactstrap';

function MenuBar(props) {

  const handleHomeButton = () => {
    alert('handleHomeButton clicked!');
  };

  const handleWorkExperienceButton = () => {
    alert('handleWorkExperienceButton clicked!');
  };

  const handleBlogButton = () => {
    alert('handleBlogButton clicked!');
  }

  const handleContactButton = () => {
    alert('handleContactButton clicked!');
  }

  return (
    <div className="menu-bar">
      <MenubarItem label="Home"/>
      <MenubarItem label="Contact"/>
      <MenubarItem label="Careers"/>
    </div>
    
  );
}

export default MenuBar;