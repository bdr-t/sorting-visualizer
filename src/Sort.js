import { useState, useEffect } from 'react';
import { generateArray } from './actions/generateArray';
import { mergeSort } from './algorithms/mergeSort';
import { useDispatch, useSelector } from 'react-redux';
import { data as mergeData } from './redux/mergeSortSlice';
import { data as selectionData } from './redux/selectionSortSlice';
import { changeColor, rechangeColor } from './actions/changeColor';
import { selectionSort } from './algorithms/selectionSort';

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
        }, 1000);
      }
    }
    customLoop(0);
  }

  function selectionSortVisualization() {
    let animation = [...selectionAnimations];
    let colors = [...selectionColors];
    console.log(animation.length)
    console.log(colors)
    let j = animation.length-1;
    function customLoop2(i) {
      if (i < animation.length) {
          customLoop(i, 0, j, animation.length);
          console.log(`customLoop(${i},${0},${j})`)
          j--


      }
    }

    function customLoop(i, x, length, imp) {
      if (x < length) {
        setTimeout(function () {
          let [bar1, bar2] = colors[i][x];
          rechangeColor(bar1-1)
          changeColor(bar1, bar2);
          rechangeColor(bar2-1)
          rechangeColor(imp-1)
          
          x++;
          customLoop(i, x, length);

          if (x === length) {
            i++
            x++
            if(animation[i]) setBars(animation[i-1]);
            customLoop2(i);
          }
          

        }, 10);
      }
    }
    customLoop2(0);
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
        <button className="btn" onClick={() => mergeSortVisualization()}>
          BUBBLE SORT
        </button>
        <button className="btn" onClick={() => mergeSortVisualization()}>
          INSERTION SORT
        </button>
        <button className="btn" onClick={() => mergeSortVisualization()}>
          HEAP SORT
        </button>
        <button className="btn" onClick={() => mergeSortVisualization()}>
          QUICKSORT
        </button>
      </div>

      <div className="bars-container">{content}</div>
    </>
  );
};

export default Sort;
