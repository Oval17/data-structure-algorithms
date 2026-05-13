function bubblesort(arr){
    let swapped = true;
    do{
        swapped = false;
        for(let i = 0 ; i< arr.length - 1 ; i++){
            if (arr[i]>arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }

    }while (swapped)

    return arr;
}

console.log(bubblesort([10,2,-1,90,-6]));