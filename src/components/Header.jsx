import logo from "../assets/logo.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <div id="header-container">
        <div className="sb-logo-container">
          <a href="https://www.shockbyte.com" alt="Shockbyte Homepage">
            <img className="logo" src={logo} alt="Shockbyte Logo" />
          </a>
          <div className="vertical-break"></div>
          <span className="header-text"> Admin Portal</span>
        </div>
        <div className="sb-header-subtext">
          <span className="header-text">Node Servers</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
