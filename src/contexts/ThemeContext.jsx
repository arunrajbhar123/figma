import React,{ createContext } from "react";


export const ThemeContext =createContext();
export const ThemeProvider=({children})=>{
  const [status, setStatus] = React.useState(true)
  const handletheme=()=>{
    setStatus(!status);
    console.log("dsfsf");
  }
  return (<ThemeContext.Provider value={{status,handletheme}}>{children}</ThemeContext.Provider>)
}