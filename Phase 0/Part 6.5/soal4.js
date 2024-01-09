
//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// // Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// // Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// // "3 kelipatan 3"dan seterusnya.
let i4 = 1;
for(i4; i4 <= 100; i4 += 2) {
    if(i4 % 3 === 0) {
        console.log(`${i4} kelipatan 3`);
    } else {
        console.log(`${i4}`);
    }
}

for(i4; i4 <= 100; i4 += 5) {
    if(i4 % 6 === 0) {
        console.log(`${i4} kelipatan 6`); 
    } else {
        console.log(`${i4}`)
    }
}

for(i4; i4 <= 100; i4 += 9) {
    if(i4 % 10 === 0) {
        console.log(`${i4} kelipatan 10`);
    } else {
        console.log(`${i4}`);
    }
}