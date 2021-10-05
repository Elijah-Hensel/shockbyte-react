import logo from "../assets/logo.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <div id="header-container">
        <div class="sb-logo-container">
          <img class="logo" src={logo} alt="Shockbyte Logo" />
          <div class="vertical-break"></div>
          <span class="header-text"> Admin Portal</span>
        </div>
        <div class="sb-header-subtext">
          <span class="header-text">Node Servers</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
