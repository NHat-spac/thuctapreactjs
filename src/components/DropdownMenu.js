import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";
import "./DropdownMenu.css";
const DropdownMenu = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="dropdown-menu">
      <ul>
        <li>Trang cá nhân</li>
        <li>Cài đặt</li>
        <li onClick={logout}>Đăng xuất</li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
