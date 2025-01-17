import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext); // Lấy hàm login từ context
  const [username, setUsername] = useState(""); // Trạng thái cho tên đăng nhập
  const [password, setPassword] = useState(""); // Trạng thái cho mật khẩu
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      // Dữ liệu giả lập cho người dùng
      const userData = {
        username: username,
        avatar: "https://s3.ap-southeast-1.amazonaws.com/cdn.vntre.vn/default/avatar-mac-dinh-01-1724861799.jpg", // Avatar mẫu (hoặc lấy từ API thực tế)
      };
      login(userData); // Gọi hàm login từ context với thông tin người dùng
      navigate("/"); // Chuyển hướng về trang chính
    } else {
      alert("Vui lòng nhập đầy đủ thông tin!"); // Kiểm tra nếu bỏ trống
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div>
          <label htmlFor="username" style={{ display: "block", marginBottom: "5px" }}>
            Tên đăng nhập:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nhập tên đăng nhập"
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div>
          <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>
            Mật khẩu:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập mật khẩu"
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 15px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default Login;
