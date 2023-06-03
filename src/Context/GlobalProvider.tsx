import { createContext, useState } from "react";

interface Money {
  RP?: number;
  setRP?: Function;
  BP?: number;
  setBP?: Function;
  OP?: number;
  setOP?: Function;
}

let defaultContext: Money = {};

export const GlobalContext = createContext(defaultContext);

export const ContextProvider: any = ({ children }: any) => {
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
