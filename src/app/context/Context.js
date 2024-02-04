'use client'
const { createContext, useState, useContext } = require("react");

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [credential, setCredential] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
    currency: "MNT",
    balance: "",
  });
  const [stage, setStage] = useState(0);

  return (
    <GlobalContext.Provider
      value={{ credential, setCredential, stage, setStage }}
    >
      {children}
    </GlobalContext.Provider>
  );
};


export const useGlobalContext = () => useContext(GlobalContext)