function isptwo(n){
    while(n>1){
        if(n%2!==0){
            return false;
        }
        n/=2;
    }
    return true;
}


console.log(isptwo(1));
console.log(isptwo(8));
console.log(isptwo(16));
console.log(isptwo(3));

// Big O is logn

// there is more optimal solution as well to this which is basically bitwise operation as all the numbers that is power of and previous numeber and operation always results in 0
