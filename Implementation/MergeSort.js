function mergeSort(arr){
    if(arr.length<=1)return arr

    const mid = Math.floor(arr.length/2)
    const leftarr = arr.slice(0 , mid)
    const rightarr = arr.slice (mid)
    return merge(mergeSort(leftarr) , mergeSort(rightarr))
}

function merge(leftarr , rightarr){
    const sorted = []
    while (leftarr.lenght && rightarr.length){
        if(leftarr[0]<=rightarr[0])sorted.push(leftarr.shift())
        else sorted.push(rightarr.shift())
    }

    return [...sorted , ...leftarr , ...rightarr]
}
const arr = [8 , -1 , 12, 11 ,15]
console.log(mergeSort(arr));








