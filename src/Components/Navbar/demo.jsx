import React, { useState } from 'react';
import { TiArrowDownThick } from 'react-icons/ti';
import './navbar.css';

const Demo = () => {
  const [isTabVisible, setTabVisible] = useState(false);

  const handleIconClick = () => {
    setTabVisible(true);
  };

  const handleTabClick = () => {
    setTabVisible(false);
  };

  return (
    <div>
      {!isTabVisible && (
        <div onClick={handleIconClick} className="toggleNavbar">
          <TiArrowDownThick className="icon" />
        </div>
      )}
      
      {isTabVisible && (
        <div onClick={handleTabClick} className="tab">
          This is the tab content.
        </div>
      )}
    </div>
  );
};

export default Demo;


