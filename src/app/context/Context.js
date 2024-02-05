"use client";
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
  const [recordState, setRecordState] = useState(false);
  const [user, setUser] = useState({});

  return (
    <GlobalContext.Provider
      value={{
        recordState,
        setRecordState,
        credential,
        setCredential,
        stage,
        setStage,
        user,
        setUser
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
