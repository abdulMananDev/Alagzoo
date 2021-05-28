const MenuBar = () => {
  return (
    <>
      <div className="menubar-options">
        <div className="options-wrapper options-heading">
          <div className="options-icon margin-left-small">
            <img src="/icons/header-logo.svg" alt="" className="menu-icons" />
          </div>
          <div className="menubar-heading color-fontweight">Tenderfarm</div>
        </div>
        <div className="options-wrapper">
          <div className="options-icon">
            <img src="/icons/home.svg" alt="home-icon" className="menu-icons" />
          </div>
          <div className="options-name">
            <span>Company</span>
          </div>
        </div>
        <div className="left-border-selected">
          <div className="options-wrapper">
            <div className="options-icon">
              <img
                src="/icons/search.svg"
                alt="explore-icon"
                className="menu-icons"
              />
            </div>
            <div className="options-name color-fontweight">
              <span>Explore</span>
            </div>
          </div>
        </div>
        <div className="sub-options">Latest Tenders</div>
        <div className="sub-options color-fontweight">Best Tenders</div>
        <div className="sub-options">Team Search</div>

        <div className="options-noti">
          <div className="options-left">
            <div className="options-icon">
              <img src="/icons/noti.svg" alt="" className="menu-icons" />
            </div>
            <div className="options-name">
              <span>Notifications</span>
            </div>
          </div>
          <div className="options-count">
            <div className="options-count-number">1</div>
          </div>
        </div>
        <div className="pad-1">
          <div className="notification-about-container">
            <div className="logo-menu-top">
              <div className="logo-menu-wrapper">
                <div className="logo-menu-div">
                  <img
                    src="/logo-assets/apple-white.svg"
                    alt="Logo-Img"
                    className="menu-logo"
                  />
                </div>
              </div>
              <div className="logo-menu-title">
                <div className="menu-logo-title">Apple Inc.</div>
                <div className="menu-logo-offer">ending soon</div>
              </div>
            </div>
            <div className="menu-logo-body">
              Hey dont forget, there's still time to get that tender!
            </div>
          </div>
        </div>
        <div className="options-wrapper">
          <div className="options-icon">
            <img src="/icons/mail.svg" alt="" className="menu-icons" />
          </div>
          <div className="options-name">
            <span>Messages</span>
          </div>
        </div>
        <div className="options-wrapper">
          <div className="options-icon">
            <img src="/icons/user.svg" alt="" className="menu-icons" />
          </div>
          <div className="options-name">
            <span>Profile</span>
          </div>
        </div>
      </div>

      <div className="bottom-icons">
        <div className="setting icon-bottom">
          <img src="/icons/settings.svg" alt="" className="menu-icons" />
        </div>
        <div className="profile icon-bottom">
          <img src="/icons/users.svg" alt="" className="menu-icons" />
        </div>
      </div>
    </>
  );
};
export default MenuBar;
