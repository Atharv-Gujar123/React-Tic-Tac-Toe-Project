import { Children, createContext, useState } from "react";
export const Mode = createContext();
export const Theme = ({children}) => {
    const [mode, setMode] = useState("Dark")
    const toggle = () => {
        setMode(mode === "Dark" ? "Light" : "Dark")
        document.documentElement.setAttribute("data-theme",mode)
    }
    return(
        <div>
            <Mode.Provider value={{mode,toggle}}>
                {children}</Mode.Provider>
        </div>
    )
}