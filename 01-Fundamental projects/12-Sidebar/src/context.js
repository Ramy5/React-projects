import React, { useState, useContext } from "react";

export const appContext = React.createContext({
  modalIsOpen: false,
  sidebarIsOpen: false,
  handleOpenModal: () => {},
  handleCloseModal: () => {},
  handleOpenSidebar: () => {},
  handleCloseSidebar: () => {},
});

export const AppContextProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const handleOpenModal = () => setModalIsOpen(true);
  const handleCloseModal = () => setModalIsOpen(false);

  const handleOpenSidebar = () => setSidebarIsOpen(true);
  const handleCloseSidebar = () => setSidebarIsOpen(false);

  const contextValue = {
    modalIsOpen,
    sidebarIsOpen,
    handleOpenModal,
    handleCloseModal,
    handleOpenSidebar,
    handleCloseSidebar,
  };

  return (
    <appContext.Provider value={contextValue}>{children}</appContext.Provider>
  );
};

export const useGlobalContext = () => useContext(appContext);
