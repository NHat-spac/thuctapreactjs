import React from "react";
import { FaHome, FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/" className="sidebar-item">
        <FaHome className="icon" />
        <span>Trang chủ</span>
      </Link>
      <Link to="/calendar" className="sidebar-item">
        <FaCalendar className="icon" />
        <span>Lịch thực tập </span>
      </Link>
    </div>
  );
};

export default Sidebar;
