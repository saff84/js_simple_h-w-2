
function simplDigit(n) {
    
    for ( let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        } 
    }
    return n > 1;
}


function simplDigits(n){
   let arr = [];
    for (let j = 2; arr.length < n ; j++){
        if (simplDigit(j)){
            arr.push(j);
        }
    } 
    return arr
}
console.log(simplDigits(10));