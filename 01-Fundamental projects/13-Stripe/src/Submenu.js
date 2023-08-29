import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const { isSubmenuOpen, location, page } = useGlobalContext();
  const submenuContainer = useRef(null);
  const [columns, setCoulmns] = useState("col-2");

  useEffect(() => {
    setCoulmns("col-2");
    const target = submenuContainer.current;
    const { center, bottom } = location;

    if (page.links.length === 3) setCoulmns("col-3");
    if (page.links.length > 3) setCoulmns("col-4");

    target.style.left = `${center}px`;
    target.style.top = `${bottom}px`;
  }, [location, page.links]);

  return (
    <aside
      className={`submenu ${isSubmenuOpen ? "show" : ""} col-2`}
      ref={submenuContainer}
    >
      <h4>{page.page}</h4>
      <div className={`submenu-center ${columns}`}>
        {page.links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon} {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
