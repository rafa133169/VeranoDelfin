import React, { useEffect, useState } from 'react';
import '../CSS/style.css';
import 'boxicons/css/boxicons.min.css';

const Navbar = ({ children }) => {
  const [isSidebarHidden, setIsSidebarHidden] = useState(window.innerWidth < 768);
  const [isSearchFormVisible, setIsSearchFormVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarHidden(true);
      } else if (window.innerWidth > 576) {
        setIsSearchFormVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };

  const handleSearchClick = (e) => {
    if (window.innerWidth < 576) {
      e.preventDefault();
      setIsSearchFormVisible(!isSearchFormVisible);
    }
  };

  const handleSwitchModeChange = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <section id="sidebar" className={isSidebarHidden ? 'hide' : ''}>
        <a href="/" className="brand">
          <i className='bx bxs-smile'></i>
          <span className="text">Verano Delfin</span>
        </a>
        <ul className="side-menu top">
          <li className="active">
            <a href="/">
              <i className='bx bxs-dashboard'></i>
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li className="active">
            <a href="#">
              <i className='bx bxs-shopping-bag-alt'></i>
              <span className="text">My Store</span>
            </a>
          </li>
          <li className="active">
            <a href="analytics">
              <i className='bx bxs-doughnut-chart'></i>
              <span className="text">Analytics</span>
            </a>
          </li>
          <li className="active">
            <a href="#">
              <i className='bx bxs-message-dots'></i>
              <span className="text">Message</span>
            </a>
          </li>
          <li className="active">
            <a href="/chat">
              <i className='bx bxs-group'></i>
              <span className="text">ChatBot</span>
            </a>
          </li>
        </ul>
        <ul className="side-menu">
        <li className="active">
            <a href="#">
              <i className='bx bxs-cog'></i>
              <span className="text">Settings</span>
            </a>
          </li>
          <li className="active">
            <a href="#" className="logout">
              <i className='bx bxs-log-out-circle'></i>
              <span className="text">Logout</span>
            </a>
          </li>
        </ul>
      </section>

      <section id="content">
        <nav>
          <i className='bx bx-menu' onClick={handleMenuClick}></i>
          <a href="#" className="nav-link">Categories</a>
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn" onClick={handleSearchClick}>
                <i className={`bx ${isSearchFormVisible ? 'bx-x' : 'bx-search'}`}></i>
              </button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden onChange={handleSwitchModeChange} />
          <label htmlFor="switch-mode" className="switch-mode"></label>
          <a href="#" className="notification">
            <i className='bx bxs-bell'></i>
            <span className="num">8</span>
          </a>
          <a href="#" className="profile">
            <img src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp" alt="Profile" />
          </a>
        </nav>

        {children} {/* Renderiza los hijos aquí */}
      </section>
    </div>
  );
};

export default Navbar;
