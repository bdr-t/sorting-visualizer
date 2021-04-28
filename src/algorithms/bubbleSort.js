function bubbleSort(array){

    for(let x = 0; x < array.length-1; x++){
        for(let y = 0; y < array.length-1-x; y++){
            if(array[y] > array[y+1] ){
                let temp = array[y]
                array[y] = array[y+1]
                array[y+1] = temp
            }
        }
    }

    return array
}