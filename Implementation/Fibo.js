function fibo(n){
    let prev = 0 ; 
    let curr = 1 ; 
    let next = 0;
    for(let i = 2 ; i<=n ; i++){
        next = prev + curr;
        prev = curr; 
        curr = next;
    }
    return next;

}

function fibo2(n){
    const fibarr = [0,1];
    for (i = 2 ; i<n ; i++){
        fibarr[i] = fibarr[i-1]+fibarr[i-2]
    }
    return fibarr
}

function fibo3(n){
    if(n<=1)return n;
    return fibo3(n-1)+fibo3(n-2);
}

//The time complexity is really bad = 2^n
console.log(fibo(6));
console.log(fibo2(6));
console.log(fibo3(6));