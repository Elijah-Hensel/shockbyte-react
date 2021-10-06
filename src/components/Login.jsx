import "../styles/Login.css";
import { useState, useEffect } from "react";

const Login = ({ user, loggedIn, setLoggedIn }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const toggleLogin = () => setLoggedIn((value) => !value);

  const onSubmit = () => {
    if (username !== user.username || password !== user.password) {
      alert("Please enter the correct administrator username/password");
      return;
    }
    toggleLogin();
    localStorage.setItem("adminLoggedIn", true);
  };

  useEffect(() => {
    if (loggedIn === true) {
      window.location.href = "/dashboard";
    }
  }, [loggedIn, setLoggedIn]);

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <span className="heading-span">/</span>
        <span className="heading-content">
          <h3>
            To view current
            <a
              className="content-link"
              href="https://shockbyte.com"
              alt="Shockbyte"
            >
              Shockbyte
            </a>
            servers please login
          </h3>
        </span>
        <div className="login-form-container">
          <form className="login-form">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={onSubmit} type="button" id="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
