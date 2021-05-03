let comparisons = [];
let animations = [];
let changes = [];

function partition(arr, start, end){
  let colors = [];
  let anims = [];
  let change = [];
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
      colors.push([i,end])
        if (arr[i] < pivotValue) {
          change.push([i,end])
        //[arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        let temp = arr[i]
        arr[i] = arr[pivotIndex]
        arr[pivotIndex] = temp
        anims.push([...arr])
        pivotIndex++;
        }
    }
    
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
    anims.push([...arr])
    comparisons.push(colors)
    animations.push(anims)
    changes.push(change)
    return pivotIndex;
};

function quickSort(arr, start, end) {
    if (start >= end) {
        return
    }
    let index = partition(arr, start, end);
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
    return [comparisons, animations, changes]
}


let arr = [10, 7, 8, 9, 1, 5]
let n = arr.length
let [haha, huhu, hihi] = quickSort(arr, 0, n-1)
