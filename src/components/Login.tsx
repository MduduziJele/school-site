import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


interface LoginFormProps {}

const Login: React.FC<LoginFormProps> = () => {
  
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error] = useState<string | null>(null);

  const handleLogin = () => {
    fetch(`//localhost:8080/api/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: userEmail, password: userPassword}),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        sessionStorage.setItem("token", data.jwtCookie.value)
        if(data.jwtCookie) navigate("/portal")
      })
      .catch((error) => {
        console.error("Fetch error", error);
      });
  };

  return (
    <div className="login">
      <div className="login__content">
        <h2>Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
