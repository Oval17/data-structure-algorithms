function factorial(n){
    let output = 1;
    for(let i = 1 ; i<=n ; i++){
        output*=i;
    }
    return output;
}


function recfact(n){
    if (n===0)return 1;
    return n*recfact(n-1);
}

console.log(factorial(5));
console.log(recfact(6));