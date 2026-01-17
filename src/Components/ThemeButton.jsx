import { useContext } from "react"
import { Mode, Theme } from "../Context/Theme"
export const ThemeButton = () => {
    const {mode, toggle} = useContext(Mode)
    return(
    <>
    <button className="Theme" onClick={toggle}></button>
    <button className="Theme2" onClick={toggle}></button>
    </>
    )
}