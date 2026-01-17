import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Boxes } from "./Components/Boxes";
import { Reset } from "./Components/Reset";
import { ThemeButton } from "./Components/ThemeButton";
import { Mode, Theme } from "./Context/Theme";
import { Result } from "./Components/Result";
import Draw from "./Components/Draw";
function App() {
  const { mode } = useContext(Mode);
  const [state, setState] = useState(Array(9).fill(null));
  const [disable, setDisable] = useState(Array(9).fill(false));
  const [isX, setX] = useState(true);
  const Click = (idx) => {
    const newValue = [...state];
    newValue[idx] = isX ? "X" : "O";
    const newDisable = [...disable];
    newDisable[idx] = true;
    setDisable(newDisable);
    setX(!isX);
    setState(newValue);
  };
  const Winner = (Box) => {
    const Pattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let x of Pattern) {
      const [a, b, c] = x;
      if (Box[a] && Box[b] && Box[c]) {
        if (Box[a] === Box[b] && Box[c] === Box[a]) {
          return `Winner : ${Box[a]}`;
        }
      }
    }
    return null;
  };
  const Win = Winner(state);
  const Tie = state.every((item) => item !== null) && !Win;
  useEffect(() => {
    if (Win || Tie) {
      setDisable(Array(9).fill(true));
    }
  }, [Win, Tie]);
  return (
    <>
      <ThemeButton />
      <div className="Parent">
        <h1 className="Heading">Tic Tac Toe</h1>
        {Win || Tie ? (
          Win ? (
            <Result Win={Win} />
          ) : null || Tie ? (
            <Draw />
          ) : null
        ) : (
          <div>
            {isX ? (
              <h2 className="TurnX">Turn X</h2>
            ) : (
              <h2 className="TurnO">Turn O</h2>
            )}
            <div className="Container">
              {state.map((item, index) => (
                <Boxes
                  key={index}
                  click={() => Click(index)}
                  disable={disable[index]}
                  value={
                    state[index] === "X" ? (
                      <h1 className="X">X</h1>
                    ) : state[index] === "O" ? (
                      <h1 className="O">O</h1>
                    ) : null
                  }
                />
              ))}
            </div>
          </div>
        )}
        <Reset state={setState} disable={setDisable} />
      </div>
    </>
  );
}
export default App;
