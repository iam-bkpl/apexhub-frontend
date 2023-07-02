import { createContext } from "react";
import { useState } from "react";
export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [user, setUser] = useState("Kapil Bhandari");
  const login = () => {};
  const logout = () => {};

  return (
    <MyContext.Provider value={{ user, login, logout }}>
      {children}
    </MyContext.Provider>
  );
};
