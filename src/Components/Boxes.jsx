import { useContext } from "react"
import { Mode, Theme } from "../Context/Theme"
export const Boxes = ({click, disable,value}) => {
    const {mode} = useContext(Mode)
    return(
        <button className="Boxes" id = {mode} onClick={click} disabled = {disable}>{value}</button>
    )
}