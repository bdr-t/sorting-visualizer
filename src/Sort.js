import { useState, useEffect } from 'react';
import { generateArray } from './generateArray';
import { mergeSort } from './mergeSort';
import { useDispatch } from 'react-redux';
import { data } from './redux/mergeSortSlice';
const Sort = () => {
  const dispatch = useDispatch();

  const [bars, setBars] = useState([1, 2]);
  const [width, setWidth] = useState(document.body.offsetWidth);
  const [colors, setColors] = useState([1, 2]);
  const [animation, setAnimation] = useState([1, 2]);

  window.onresize = function () {
    setWidth(document.body.offsetWidth);
  };

  useEffect(() => {
    let numberOfBars = Math.floor((width * 0.8) / 12);
    let haha = generateArray(numberOfBars);
    setBars(haha);
  }, [width]);

  function rechangeColor(x, y) {
    let bar = document.getElementById(x);
    bar.style.backgroundColor = '#00A6CB';
    let bar2 = document.getElementById(y);
    bar2.style.backgroundColor = '#00A6CB';
  }

  function changeColor(x, y) {
    let bar = document.getElementById(x);
    bar.style.backgroundColor = '#D68EC3';
    let bar2 = document.getElementById(y);
    bar2.style.backgroundColor = '#D68EC3';
  }

  function customLoop(i) {
    i++;
    if (i < animation.length) {
      setTimeout(function () {
        if (colors.length > 2) {
          let [bar1, bar2] = colors[i];
          let [bar3, bar4] = colors[i - 1];
          rechangeColor(bar3, bar4);
          changeColor(bar1, bar2);
          setBars(animation[i]);
          customLoop(i);
          if (i === animation.length - 1) {
            let [bar3, bar4] = colors[i];
            rechangeColor(bar3, bar4);
          }
        } else {
        }
      }, 10);
    }
  }

  async function handleClick() {
    let barsCopy = bars.slice();
    const [animations, colors] = await mergeSort(barsCopy);
    dispatch(data([animations, colors]));
    setAnimation(animations);
    setColors(colors);

    console.log(animations.length);
  }

  let content = bars.map((value, idx) => (
    <div className="bar" key={idx} id={idx} style={{ height: `${value}%` }}></div>
  ));

  function newArray() {
    setAnimation([1, 2]);
    setBars([1, 2]);
    setColors([1, 2]);
    let numberOfBars = Math.floor((width * 0.8) / 12);
    let haha = generateArray(numberOfBars);
    setBars(haha);
  }

  return (
    <>
      <div className="btn-container">
        <button className="btn" onClick={() => newArray()}>
          NEW ARRAY
        </button>
        <button className="btn" onClick={() => customLoop(0)}>
          SORT
        </button>
        <button className="btn" onClick={() => handleClick()}>
          MERGE SORT
        </button>
        <button className="btn" onClick={() => handleClick()}>
          SELECTION SORT
        </button>
        <button className="btn" onClick={() => handleClick()}>
          BUBBLE SORT
        </button>
        <button className="btn" lick={() => handleClick()}>
          INSERTION SORT
        </button>
        <button className="btn" onClick={() => handleClick()}>
          HEAP SORT
        </button>
        <button className="btn" onClick={() => handleClick()}>
          QUICKSORT
        </button>
      </div>

      <div className="bars-container">{content}</div>
    </>
  );
};

export default Sort;
