export function insertionSort(array) {
    let comparisons = [];
    for (let i = 1; i < array.length; i++) {
      let colors = [];
      let temp = array[i];
      let j = i - 1;
      let x = i - 1
  
      while (j > 0) {
        colors.push([j, j - 1]);
        if (array[j] > temp) {
          array[j + 1] = array[j];
        }
        j--;
      }
      array[j + 1] = temp;
      if (x > 0) {
        comparisons.push(colors);
      }
    }
  
    return comparisons;
  }