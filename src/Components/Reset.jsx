export const Reset = ({state, disable}) => {
    const Click = () => {
        state(Array(9).fill(null))
        disable(Array(9).fill(false))
    }
    return(
        <>
        <button className="Reset" onClick={Click}>Reset</button>
        </>
    )
}