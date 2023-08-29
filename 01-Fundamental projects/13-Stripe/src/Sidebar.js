import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { handleCloseSidebar, isSidebarOpen } = useGlobalContext();

  return (
    <aside className={`sidebar-wrapper ${isSidebarOpen ? "show" : ""}`}>
      <div className="sidebar">
        <button className="close-btn" onClick={handleCloseSidebar}>
          <FaTimes />
        </button>

        {sublinks.map((sub, index) => {
          const { page, links } = sub;
          return (
            <article key={index}>
              <h4>{page}</h4>
              <div className="sidebar-sublinks">
                {links.map((link, index) => {
                  const { label, icon, url } = link;
                  return (
                    <a key={index} href={url}>
                      {icon} {label}
                    </a>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
