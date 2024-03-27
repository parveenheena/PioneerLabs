import React, { useState } from 'react';
import './add.css'; 

const SideNavBar = () => {
  const [activeItem, setActiveItem] = useState('home');

  

  return (
    <div className="side-navbar">
      <div className="logo">
       <img src="carboncell_logo-removebg-preview.png" alt="" />
      </div>
      <button className="hamburger-menu">
        ☰
      </button>
      <input type="text" placeholder="Search..." />
      <div className="navigation-items">
        <div className={`nav-item ${activeItem === 'home' ? 'active' : ''}`} onClick={() => handleItemClick('home')}>
          Home
        </div>
        <div className={`nav-item ${activeItem === 'assets' ? 'active' : ''}`} onClick={() => handleItemClick('assets')}>
          Assets
        </div>
        <div className={`nav-item ${activeItem === 'history' ? 'active' : ''}`} onClick={() => handleItemClick('history')}>
          History Trade
        </div>
        <div className={`nav-item ${activeItem === 'wallet' ? 'active' : ''}`} onClick={() => handleItemClick('wallet')}>
          Wallet
        </div>
      </div>
      <div className="bottom-items">
        <div>Notifications</div>
        <div>Support</div>
        <div>Settings</div>
      </div>
    </div>
  );
};

export default SideNavBar;
