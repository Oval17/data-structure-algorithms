function binarySearch(arr, target) {
    
    let i = 0;
    let j = arr.length - 1;

    while(i<=j){
        let mid = Math.floor((i+j)/2);
        if (arr[mid]===target)return mid;
        if (arr[mid]>target){
            j = mid-1;
        }
        if (arr[mid]<target){
            i = mid+1;
        }

    }
    return -1;
}


function recBinarySearch(arr , target){
    return search(arr , target , 0 , arr.length - 1)

}

function search(arr , target , left , right){
    if(left > right)return -1;
    let mid = Math.floor((left + right)/2);
    if(arr[mid]===target)return mid;
    if(arr[mid]>target)return search(arr,  target , left , mid - 1)
    if(arr[mid]<target)return search(arr,  target , mid+1 , right)
}


console.log(binarySearch([-5,2,4,6,10] , 10))
console.log(binarySearch([-5,2,4,6,10] , 6))
console.log(binarySearch([-5,2,4,6,10] , 20))
console.log(recBinarySearch([-5,2,4,6,10] , 10))
console.log(recBinarySearch([-5,2,4,6,10] , 6))
console.log(recBinarySearch([-5,2,4,6,10] , 20))