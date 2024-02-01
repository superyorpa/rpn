// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
    let jam = Math.floor(menit/60);
    let sisaMenit = menit % 60;

    if(jam < 10 && sisaMenit < 10) {
        return `0${jam}:0${sisaMenit}`;
    } 
    else if(jam < 10) {
        return `0${jam}:${sisaMenit}`;
    } else if(sisaMenit < 10) {
        return `${jam}:0${sisaMenit}`;
    } else {
        return `${jam}:${sisaMenit};`
    }
}

console.log(konversiMenit(63)); // 01:03
console.log(konversiMenit(124)); // 02:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 01:28
console.log(konversiMenit(120)); // 02:00
console.log(konversiMenit(605)); // 10:05

