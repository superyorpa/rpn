// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL
let i3 = 1;
for(i3; i3 <= 100; i3++) {
    if(i3 % 2 === 0) {
        console.log(`${i3} = Genap`);
    } else if(i3 % 2 === 1) {
        console.log(`${i3} = Ganjil`);
    }
}