import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Pages from "./components/Pages";

function App() {
  const [user, setUser] = useState({
    username: "admin",
    password: "password",
    admin: true,
  });
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div id="main-container">
      <Header />
      <main>
        <Pages user={user} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </main>
    </div>
  );
}

export default App;
