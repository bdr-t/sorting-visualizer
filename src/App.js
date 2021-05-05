import './App.css';
import Sort from './Sort';
import { generateArray } from './actions/generateArray';
import { useState } from 'react';

function App() {
  const [width, setWidth] = useState(document.body.offsetWidth);

  window.onresize = function () {
    setWidth(document.body.offsetWidth);
  };

  // function newArray() {
  //   setAnimation([1, 2]);
  //   setBars([1, 2]);
  //   setColors([1, 2]);
  //   let numberOfBars = Math.floor((width * 0.8) / 12);
  //   let haha = generateArray(numberOfBars);
  //   setBars(haha);
  // }

  let array = generateArray(Math.floor((width * 0.9) / 12));

  return (
    <div className="app">
      <div className="btn-container new-array">
        <button className="btn" style={{width:'105px', backgroundColor:'#D68EC3'}}>NEW ARRAY</button>
        <button className="btn">Speed</button>
      </div>

      <Sort array={array} />
    </div>
  );
}

export default App;
