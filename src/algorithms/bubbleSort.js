export function bubbleSort(array) {
  let comparisons = [];

  for (let x = 0; x < array.length - 1; x++) {
      let colors = []
    for (let y = 0; y < array.length - 1 - x; y++) {
      colors.push([y, y + 1]);

      if (array[y] > array[y + 1]) {

        let temp = array[y];
        array[y] = array[y + 1];
        array[y + 1] = temp;
      }
    }
    comparisons.push(colors)
  }
  return comparisons;
}
