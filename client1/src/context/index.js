import { useContext, createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(true);
  return (
    <AppContext.Provider value={{ openDrawer, setOpenDrawer }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
