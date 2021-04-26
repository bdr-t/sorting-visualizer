import {useState, useEffect} from 'react';
import {generateArray} from './generateArray';
import {mergeSort} from './mergeSort';
const Sort = () => {
  const [bars, setBars] = useState([1, 2]);
  const [width, setWidth] = useState(document.body.offsetWidth);
  const [colors, setColors] = useState([1, 2]);
  const [animation, setAnimation] = useState([1, 2]);

  window.onresize = function () {
    setWidth(document.body.offsetWidth);
  };

  useEffect(() => {
    let numberOfBars = Math.floor((width * 0.80) / 12);
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
    setAnimation(animations);
    setColors(colors);

    console.log(animations.length);
  }

  let content = bars.map((value, idx) => (
    <div
      className="array-bar"
      key={idx}
      id={idx}
      style={{
        alignSelf: 'flex-end',
        width: '10px',
        marginLeft: '1px',
        backgroundColor: `#00A6CB`,
        height: `${value}%`,
      }}></div>
  ));

  function newArray() {
    setAnimation([1,2])
    setBars([1,2])
    setColors([1,2])
    let numberOfBars = Math.floor((width * 0.80) / 12);
    let haha = generateArray(numberOfBars);
    setBars(haha);
    
  }

  return (
    <>
      <div style={{display: 'flex',gap:'2em', marginLeft:'10%'}}>
        <button
          style={{
            placeSelf: 'center',
            padding: '1em',
            borderRadius: '8px',
            fontWeight: '700',
            cursor: 'pointer',
          }}
          onClick={() => newArray()}>
          NEW ARRAY
        </button>

        <button
          style={{
            placeSelf: 'center',
            padding: '1em',
            borderRadius: '8px',
            fontWeight: '700',
            cursor: 'pointer',
          }}
          onClick={() => customLoop(0)}>
          SORT
        </button>
        <button
          style={{
            placeSelf: 'center',
            padding: '1em',
            borderRadius: '8px',
            fontWeight: '700',
            cursor: 'pointer',
          }}
          onClick={() => handleClick()}>
          MERGE SORT
        </button>
        <button
          style={{
            placeSelf: 'center',
            padding: '1em',
            borderRadius: '8px',
            fontWeight: '700',
            cursor: 'pointer',
          }}
          onClick={() => handleClick()}>
          SELECTION SORT
        </button>
        <button
          style={{
            placeSelf: 'center',
            padding: '1em',
            borderRadius: '8px',
            fontWeight: '700',
            cursor: 'pointer',
          }}
          onClick={() => handleClick()}>
          BUBBLE SORT
        </button>
        <button
          style={{
            placeSelf: 'center',
            padding: '1em',
            borderRadius: '8px',
            fontWeight: '700',
            cursor: 'pointer',
          }}
          onClick={() => handleClick()}>
          INSERTION SORT
        </button>
        <button
          style={{
            placeSelf: 'center',
            padding: '1em',
            borderRadius: '8px',
            fontWeight: '700',
            cursor: 'pointer',
          }}
          onClick={() => handleClick()}>
          HEAP SORT
        </button>
        <button
          style={{
            placeSelf: 'center',
            padding: '1em',
            borderRadius: '8px',
            fontWeight: '700',
            cursor: 'pointer',
          }}
          onClick={() => handleClick()}>
          QUICKSORT
        </button>
      </div>
      

      <div
        style={{
          placeSelf: 'center',
          height: '60%',
          width: '80%',
          backgroundColor: '#141432',
          display: 'flex',
          gap: '1px',
        }}>
        {content}
      </div>
    </>
  );
};

export default Sort;
