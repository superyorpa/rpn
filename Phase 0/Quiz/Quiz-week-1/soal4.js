//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    let x = '';
    let o = '';

    for(let i = 0; i <= str.length-1; i++) {
        if(str[i] == 'x') {
            x += str[i]; 
        } else if(str[i] == 'o') {
            o += str[i];
        }
    }
    
    if(x.length == o.length) {
        return true;
    } else {
        return false;
    }
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true