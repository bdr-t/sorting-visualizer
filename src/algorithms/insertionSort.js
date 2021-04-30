export function insertionSort(array) {
  let comparisons = [];
  for (let i = 1; i < array.length; i++) {
    let colors = [];
    let temp = array[i];
    let y = i - 1
    while(y> 0){
      colors.push([y, y - 1]);
      y--
      }
    if(colors.length >= 1){
      comparisons.push(colors)
    console.log(colors)
      }
    
  }

  return comparisons;
}