export function insertionSort(inputArr) {
  let animations = []
  let comparisons = []
  let changes = []
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
          let anim = []
          let colors = []
          let swaps = []
            let current = inputArr[i];
            let y = i - 1
            while (y > -1) {
        colors.push([i, y])
        y--;
      }
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                swaps.push([i, j])
                inputArr[j+1] = inputArr[j];
                anim.push([...inputArr])
                j--;
            }
            inputArr[j+1] = current;
            anim.push([...inputArr])
            animations.push(anim)
            comparisons.push(colors)
            changes.push(swaps)
        }
    return [animations, comparisons, changes ];
}

