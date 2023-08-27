import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { sidebarIsOpen, handleCloseSidebar } = useGlobalContext();

  return (
    <aside className={`${sidebarIsOpen ? "show-sidebar" : ""} sidebar`}>
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="Coding Addict" />
        <button className="close-btn" onClick={handleCloseSidebar}>
          <FaTimes />
        </button>
      </div>

      <ul className="links">
        {links.map((link) => {
          const { id, icon, text, url } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon} {text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="social-icons">
        {social.map((soc) => {
          const { id, icon, url } = soc;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
