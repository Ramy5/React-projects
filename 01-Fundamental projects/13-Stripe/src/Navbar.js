import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { handleOpenSidebar, handleOpenSubmenu, handleCloseSubmenu } =
    useGlobalContext();

  const displaySubmenu = (e) => {
    const targeText = e.target.textContent;
    const coordinate = e.target.getBoundingClientRect();
    const center = (coordinate.left + coordinate.right) / 2;
    const bootom = coordinate.bootom - 3;

    handleOpenSubmenu(targeText, { center, bootom });
  };

  const handleSubmenuHide = (e) => {
    if (e.target.classList.contains("link-btn")) return;

    handleCloseSubmenu();
  };

  return (
    <nav className="nav" onMouseOver={handleSubmenuHide}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="btn toggle-btn" onClick={handleOpenSidebar}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          <li onMouseOver={displaySubmenu}>
            <button className="link-btn">products</button>
          </li>
          <li onMouseOver={displaySubmenu}>
            <button className="link-btn">developers</button>
          </li>
          <li onMouseOver={displaySubmenu}>
            <button className="link-btn">company</button>
          </li>
        </ul>
        <button className="signin-btn btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
