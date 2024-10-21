import { createContext } from "react";

export const imgContext = createContext({});

const Provider = imgContext.Provider;

export const ImgProvider = ({ children }) => {



  const value = {}

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}