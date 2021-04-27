let animations = []
let colors = []
function selectionSort(arr){
  let comparisons = []
  for(let x = 0; x < arr.length; x++){
    let min = arr[x]
    let minIndex = x
    for(let y = x+1; y < arr.length; y++){
      comparisons.push([x, y])
      if(arr[y] < min){
        min = arr[y]
        minIndex = y
        }
      }
      
      let temp = arr[x]
      arr[x] = min
      arr[minIndex] = temp
      let arrCopy = arr.slice()
      animations.push(arrCopy)
      colors.push(comparisons)
    }
    
    return [animations, colors]
  }
  
