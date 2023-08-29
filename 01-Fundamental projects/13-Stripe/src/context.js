import React, { useState, useContext } from "react";
import sublinks from "./data";

const appContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const handleOpenSidebar = () => setIsSidebarOpen(true);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  const handleOpenSubmenu = (text, coordinate) => {
    const pageTarget = sublinks.find((sub) => sub.page === text);
    setPage(pageTarget);

    setLocation(coordinate);
    setIsSubmenuOpen(true);
  };
  const handleCloseSubmenu = () => setIsSubmenuOpen(false);

  const stateValues = {
    isSidebarOpen,
    isSubmenuOpen,
    handleOpenSidebar,
    handleCloseSidebar,
    handleOpenSubmenu,
    handleCloseSubmenu,
    location,
    page,
  };

  return (
    <appContext.Provider value={stateValues}>{children}</appContext.Provider>
  );
};

export const useGlobalContext = () => useContext(appContext);
