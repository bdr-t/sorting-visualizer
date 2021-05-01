export function insertionSort(array) {
  let animations = [];
  let comparisons = [];
  let temps = []
  let n = array.length;
  for (let i = 1; i < n; i++) {
    let anim = [];
    let colors = [];

    let y = i - 1;
    while (y > 0) {
      colors.push([y, y - 1]);
      y--;
    }
    let current = array[i];
    temps.push(current)

    let j = i - 1;

    while (j > -1 && current < array[j]) {
      array[j + 1] = array[j];
      anim.push([...array]);
      j--;
    }
    array[j + 1] = current;
    anim.push([...array]);

    animations.push(anim);

    comparisons.push(colors);
  }
  return [animations, comparisons, temps];
}
