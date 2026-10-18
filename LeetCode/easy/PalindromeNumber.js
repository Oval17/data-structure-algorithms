/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString()
    let i=0;
    let j=str.length-1
    while(i<j){
        if(str[i]===str[j]){
            i++;
            j--
            continue
        }
        else return false
    }
    return true
};
