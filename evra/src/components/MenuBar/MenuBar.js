import React from 'react';
import MenubarItem from './MenuBarItem';
import '../../styles/MenuBar.css'
import { ButtonGroup, Button } from 'reactstrap';

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
      <Button color="primary">Home</Button>
      <Button color="primary">Contact</Button>
      <Button color="primary">Careers</Button>
   </div>
    
  );
}

export default MenuBar;