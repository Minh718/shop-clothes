import { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <AppContext.Provider value={{ openDrawer, setOpenDrawer, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
