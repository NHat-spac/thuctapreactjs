import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Searchbar from "./Searchbar.js";
import Logo from "../assets/logo.png";

import { AuthContext } from "../AuthContext.js";

const Navbar = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    logout();
    setShowDropdown(false); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={Logo} alt="Logo" className="navbar-logo" />
        <span>DakSystem</span>
      </div>
      <div className="searchbar-container">
        <Searchbar />
      </div>
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Trang chủ</Link>
        </li>
        {!isAuthenticated ? (
          <>
            <li className="navbar-item">
              <Link to="/register" className="navbar-link">Đăng kí</Link>
            </li>
            <li className="navbar-item">
              <Link to="/login" className="navbar-link">Đăng nhập</Link>
            </li>
          </>
        ) : (
          <li className="navbar-item">
            <div 
              className="avatar-container" 
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <img
                src={user?.avatar || "default-avatar.png"}
                alt="Avatar"
                className="navbar-avatar"
              />
              {showDropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/profile" onClick={() => setShowDropdown(false)}>
                      Trang cá nhân
                    </Link>
                  </li>
                  <li>
                    <Link to="/settings" onClick={() => setShowDropdown(false)}>
                      Cài đặt
                    </Link>
                  </li>
                  <li onClick={handleLogout}>Đăng xuất</li>
                </ul>
              )}
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
