import { createContext, useState } from "react";

export const GlobalContext = createContext({});

export const ContextProvider: any = ({ children }) => {
  const [RP, setRP] = useState(0);
  const [BP, setBP] = useState(0);
  const [OP, setOP] = useState(0);

  return (
    <>
      <GlobalContext.Provider value={{ RP, setRP, BP, setBP, OP, setOP }}>
        {children}
      </GlobalContext.Provider>
    </>
  );
};
