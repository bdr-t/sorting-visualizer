import { useState, useEffect } from 'react';
import { generateArray, randomIntFromInterval } from './actions/generateArray';
import { mergeSort } from './algorithms/mergeSort';
import { useDispatch, useSelector } from 'react-redux';
import { data as mergeData } from './redux/mergeSortSlice';
import { data as selectionData } from './redux/selectionSortSlice';
import { changeColor, rechangeColor } from './actions/changeColor';
import { selectionSort } from './algorithms/selectionSort';
import { bubbleSort } from './algorithms/bubbleSort';
import { insertionSort } from './algorithms/insertionSort';
import { quickSort } from './algorithms/quickSort'

const Sort = ({ array }) => {
  const [bars, setBars] = useState([1, 2]);

  // const [colors, setColors] = useState([1, 2]);
  // const [animation, setAnimation] = useState([1, 2]);

  if (bars.length !== array.length) setBars(array);

  const dispatch = useDispatch();
  let selectionAnimations = useSelector((state) => state.selectionSort.animations);
  let selectionColors = useSelector((state) => state.selectionSort.colors);
  let mergeAnimations = useSelector((state) => state.mergeSort.animations);
  let mergeColors = useSelector((state) => state.mergeSort.colors);

  useEffect(() => {
    const [mergeAnimations, mergeColors] = mergeSort([...array]);
    dispatch(mergeData({ mergeAnimations, mergeColors }));
    const [selectionAnimations, selectionColors] = selectionSort([...array]);
    dispatch(selectionData({ selectionAnimations, selectionColors }));
  }, [bars]);

  function cleanUp(){
    let bar = document.getElementsByClassName('bar')
    for(let i =0; i<bar.length; i++){
      bar[i].style.backgroundColor = '#00A6CB';
   }
  }


  function mergeSortVisualization() {
    let animation = [...mergeAnimations];
    let colors = [...mergeColors];

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
        }, 100);
      }
    }
    customLoop(0);
  }

  function selectionSortVisualization() {
    let animation = [...selectionAnimations];
    let colors = [...selectionColors];
    let j = animation.length - 1;
    function customLoop2(i) {
      if (i < animation.length) {
        customLoop(i, 0, j, animation.length);
        j--;
      }
    }

    function customLoop(i, x, length, imp) {
      if (x < length) {
        setTimeout(function () {
          let [bar1, bar2] = colors[i][x];
          rechangeColor(bar1 - 1);
          changeColor(bar1, bar2);
          rechangeColor(bar2 - 1);
          rechangeColor(imp - 1);

          x++;
          customLoop(i, x, length);

          if (x === length) {
            i++;
            x++;
            if (animation[i]) setBars(animation[i - 1]);
            customLoop2(i);
          }
        }, 10);
      }
    }
    customLoop2(0);
  }

  function bubbleSortVisualization() {
    let barsCopy = [...bars];

    let colors = bubbleSort([...bars]);
    function customLoop2(i) {
      if (i < colors.length) {
        customLoop(i, 0);
      }
    }
    function customLoop(i, x) {
      if (x < colors[i].length)
        setTimeout(() => {
          let [bar1, bar2] = colors[i][x];
          rechangeColor(bar1 - 1, bar2 - 1);

          if (barsCopy[bar1] > barsCopy[bar2]) {
            // console.log('swap')
            let temp = barsCopy[bar1];
            barsCopy[bar1] = barsCopy[bar2];
            barsCopy[bar2] = temp;
            setBars([...barsCopy]);
          }
          changeColor(bar1, bar2);
          x++;
          customLoop(i, x);
        }, 1);
      if (x === colors[i].length) {
        console.log(barsCopy.length - 1 - i);
        rechangeColor(0)
        rechangeColor(barsCopy.length - 1 - i, barsCopy.length - 2 - i);
        i++;

        customLoop2(i);
      }
    }
    customLoop2(0);
  }


  function insertionSortVisualization() {
    let [animations, comparisons, changes] = insertionSort([...bars]);
 
    function customLoop2(i) {
      if (i < comparisons.length) {
        customLoop(i, 0, 0, 0);
      } else {
      }
    }
    function customLoop(i, x, y, j) {
      if (x < comparisons[i].length)
        setTimeout(() => {
          let color = comparisons[i][x];
          let [bar1, bar2] = comparisons[i][x];
          rechangeColor(bar1, bar2+1);
          let swaps = changes[i][y];
          if (swaps) {
            if (color[0] === swaps[0] && color[1] === swaps[1]) {
              setBars(animations[i][j]);

              j++;
              y++;
            }
          }
          if(i === 8){
            console.log('dont colore')
          } else {
            changeColor(bar1, bar2);
          }
          x++;
          customLoop(i, x, y, j);
        }, 10);
      if (x === comparisons[i].length) {
        rechangeColor(i,0)
        rechangeColor(bars.length - 1)
        setBars(animations[i][j]);

        i++;

        customLoop2(i);
      }
    }
    customLoop2(0);
  }



  function quickSortVisualization() {
    let [comparisons, animations, changes] = quickSort([...bars], 0, bars.length-1);

    console.log(comparisons)
    console.log(animations)
    console.log(changes)
 
    function customLoop2(i) {
      if (i < comparisons.length) {
        customLoop(i, 0, 0, 0);
      } else {
      }
    }

    function customLoop(i, x, y, j) {
      if (x < comparisons[i].length)
        setTimeout(() => {
          let color = comparisons[i][x];
          let [bar1, bar2] = comparisons[i][x];
          rechangeColor(bar1-1, bar2);
          let swaps = changes[i][y];
          if (swaps) {
            if (color[0] === swaps[0] && color[1] === swaps[1]) {
              setBars(animations[i][j]);
              j++;
              y++;
            }
          }
          if(i === 8){
            console.log('dont colore')
          } else {
            changeColor(bar1, bar2);
          }
          x++;
          customLoop(i, x, y, j);
        }, 10);
      if (x === comparisons[i].length) {
        rechangeColor(i,0)
        setBars(animations[i][j]);
        cleanUp()
        // let swaps
        // console.log(changes[i].length)
        // if(changes[i].length === 0){
        // } else if (changes[i].length === 1){
        //   rechangeColor(changes[i][0][0],changes[i][0][1] )
        // }else {
        //   rechangeColor(changes[i][y-1][0],changes[i][y-1][1] )
        // }
        

        i++;

        customLoop2(i);
      }
    }
    customLoop2(0);
  }

  function testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const haha = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        haha.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = haha.slice().sort((a, b) => a - b);
      const array = insertionSort(haha.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, array));
    }
  }

  function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }

  let content = bars.map((value, idx) => (
    <div className="bar" key={idx} id={idx} style={{ height: `${value}%` }}></div>
  ));

  return (
    <>
      <div className="btn-container">
        <button className="btn">NEW ARRAY</button>
        <button className="btn" onClick={() => mergeSortVisualization(0)}>
          SORT
        </button>
        <button className="btn" onClick={() => mergeSortVisualization()}>
          MERGE SORT
        </button>
        <button className="btn" onClick={() => selectionSortVisualization()}>
          SELECTION SORT
        </button>
        <button className="btn" onClick={() => bubbleSortVisualization()}>
          BUBBLE SORT
        </button>
        <button className="btn" onClick={() => insertionSortVisualization()}>
          INSERTION SORT
        </button>
        <button className="btn" onClick={() => mergeSortVisualization()}>
          HEAP SORT
        </button>
        <button className="btn" onClick={() => quickSortVisualization()}>
          QUICKSORT
        </button>
      </div>

      <div className="bars-container">{content}</div>
    </>
  );
};

export default Sort;
