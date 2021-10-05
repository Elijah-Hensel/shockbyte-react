import "./App.css";
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pages from "./components/Pages";

function App() {
  const [user, setUser] = useState({
    username: "admin",
    password: "password",
    admin: true,
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const isLoggedIn = () => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    }
  };
  useEffect(() => {
    isLoggedIn();
  }, [loggedIn]);
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Pages user={user} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </main>
    </div>
  );
}

export default App;
