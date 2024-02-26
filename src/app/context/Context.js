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
  const [refresh, setRefresh] = useState(false);
  const [category, setCategory] = useState([{name:'Yoga', img:'/dollar.svg'},{name:'Yoga', img:'/dollar.svg'}]);

  return (
    <GlobalContext.Provider
      value={{
        category,
        setCategory,
        recordState,
        setRecordState,
        credential,
        setCredential,
        stage,
        setStage,
        user,
        setUser,
        refresh,
        setRefresh
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
