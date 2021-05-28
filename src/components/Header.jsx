import React from "react";
const Header = () => {
  return (
    <div className="header">
      <div className="header-left">Best Tenders</div>
      <div className="header-right">
        <div className="notification-header">
          <span className="noti-num">5</span>
          <div className="header-noti-icon">
            <img src="/icons/bell.svg" alt="bell-icon" className="menu-icons" />
          </div>
        </div>
        <div className="search-bar">
          <div className="header-search-icon">
            <img
              src="/icons/search-bar.svg"
              alt="icon"
              className="menu-icons"
            />
          </div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="search-bar-input"
          />
        </div>
        <div className="profile">
          <img src="/avatar.png" alt="profile-pic" className="profile-pic" />
          <span className="profile-name">Emily</span>
        </div>
      </div>
    </div>
  );
};
export default Header;
