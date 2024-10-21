import { createContext } from "react";

export const dataContext = createContext({});

const Provider = dataContext.Provider;

export const DataProvider = ({ children }) => {



  const value = {}

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}