import "./App.css";
import Sort from "./Sort";
import { generateArray } from "./actions/generateArray";
import { useState } from "react";

function App() {
  const [width, setWidth] = useState(document.body.offsetWidth);
  const [array, setArray] = useState(
    generateArray(Math.floor((width * 0.9) / 12))
  );
  const [speed, setSpeed] = useState(10);

  window.onresize = function () {
    setWidth(document.body.offsetWidth);
    setArray(generateArray(Math.floor((width * 0.9) / 12)));
  };

  // function newArray() {
  //   setAnimation([1, 2]);
  //   setBars([1, 2]);
  //   setColors([1, 2]);
  //   let numberOfBars = Math.floor((width * 0.8) / 12);
  //   let haha = generateArray(numberOfBars);
  //   setBars(haha);
  // }

  // let array = generateArray(Math.floor((width * 0.9) / 12));

  function handleClick() {
    setArray(generateArray(Math.floor((width * 0.9) / 12)));
  }

  function addSpeed() {
    if(speed >= 10) return
    setSpeed(speed+1)
  }

  function removeSpeed() {
    if(speed <= 1) return
    setSpeed(speed-1)
  }

  return (
    <div className="app">
      <div className="btn-container new-array">
        <button
          onClick={() => handleClick()}
          className="btn"
          style={{ width: "105px", backgroundColor: "#D68EC3" }}
        >
          NEW ARRAY
        </button>
        <div style={{ display: "flex", gap:'0.2em' }}>
          <button className="btn" onClick={()=> addSpeed()}>+</button>
          <button className="btn">Speed {speed}</button>
          <button className="btn" onClick={()=> removeSpeed()}>-</button>
        </div>
      </div>

      <Sort array={array} speed={speed} />
    </div>
  );
}

export default App;
