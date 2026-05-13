function insertionsort(arr){
    for(let i = 1 ; i < arr.length ; i++){
        let NTI = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]>NTI){
            arr[j+1] = arr[j]
            j--;
        }
        arr[j+1] = NTI;
    }
    return arr
}



console.log(insertionsort([-2 , -6,  10 ,  5,  6 ]))




