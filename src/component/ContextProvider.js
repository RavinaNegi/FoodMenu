import { createContext, useState } from "react"
export const ThemeContext=createContext({});

const CotextProvider=({children})=>{
   
    const [theme,setTheme]=useState("yellow");
    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )


}
export default CotextProvider;