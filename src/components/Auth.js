// components/Auth.js
import React, { useState } from "react";
import Login from "../menu/Login";
import Register from "../menu/Register";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <h1>React Authentication</h1>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Switch to Register" : "Switch to Login"}
      </button>
      {isLogin ? <Login /> : <Register />}
    </div>
  );
};

export default Auth;
