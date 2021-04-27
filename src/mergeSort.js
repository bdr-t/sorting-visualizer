let animation = [];
let colors = [];
let counter = 0;

function merge(arr, start, mid, end) {
  let start2 = mid + 1;
  if (arr[mid] <= arr[start2]) return;
  while (start <= mid && start2 <= end) {
    if (arr[start] <= arr[start2]) {
      start++;
    } else {
      colors.push([start, start2]);
      let value = arr[start2];
      let index = start2;

      while (index !== start) {
        arr[index] = arr[index - 1];
        index--;
      }

      arr[start] = value;
      let copyArr = arr.slice();
      animation.push(copyArr);
      counter++;
      start++;
      mid++;
      start2++;
    }
  }
}

function doMerge(arr, l, r) {
  if (l < r) {
    let m = l + Math.floor((r - l) / 2);
    doMerge(arr, l, m);
    doMerge(arr, m + 1, r);
    merge(arr, l, m, r);
  }
}

export function mergeSort(array) {
  animation = [];
  colors = [];
  counter = 0;
  doMerge(array, 0, array.length - 1);
  return [animation, colors];
}
