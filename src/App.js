import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar.js";
import Home from "./components/Home.js"; // Trang chủ đã chứa TaskDone và TaskNotDone
import Login from "./menu/Login";
import Register from "./menu/Register";
import Footer from "./components/Footer";
import { AuthProvider } from "./AuthContext.js";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <Sidebar />
            <div style={{ marginLeft: "100px", padding: "20px", width: "100%" }}>
              <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
