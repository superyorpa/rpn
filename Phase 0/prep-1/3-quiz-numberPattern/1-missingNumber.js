/*
================
MISSING NUMBER
================
description: Sebuah fungsi untuk mencari angka yang hilang berdasarkan pola dari board atau
papan yang tersedia. Fungsi akan mengembalikan nilai sebuah array yang berisi
angka-angka yang hilang

examples:
INPUT = 
[
  [ 7 ,' ', 5 ],
  [' ', 8 , 9 ]
  [ 1 ,' ',' '] 
]

ASUMSI PADA PAPAN SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL YAITU 1 DAN 9 SEHINGGA
OUTPUT:
[ 2, 3, 4, 6]

PADA MASING-MASING TEST CASE SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL
*/

function missingNum(arr) {
  if(arr.length === 0 || !arr) return arr;

  // cek angka saat ini yang merupakan Number
  let currentNum = [];
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      if(typeof arr[i][j] === 'number') {
        currentNum.push(arr[i][j]);
      }
    }
  };

  // urutkan, cari angka terendah dan tertinggi
  let sortedCurrentNum = currentNum.sort((a, b) => a-b);
  let minNum = sortedCurrentNum[0];
  let maxNum = sortedCurrentNum[sortedCurrentNum.length-1];

  // push angka yang belum ada
  let res = [];
  for(let i = minNum; i <= maxNum; i++) {
    if(!sortedCurrentNum.includes(i)) {
      res.push(i)
    };
  }

  return res;
}

  console.log(missingNum([
    [3, ' ', 5],
    [1, ' ', 7],
    [9, ' ', ' ']
  ])) // [ 2, 4, 6, 8 ]
  console.log(missingNum([
    [2, ' '],
    [' ', 5]
  ])) // [ 3, 4 ]
  console.log(missingNum([
    [11, ' ', 13],
    [17, ' ', 19],
    [' ', 16, ' ']
  ])) // [ 12, 14, 15, 18 ]
  console.log(missingNum([
    [3, ' ', 5, 15],
    [1, ' ', 7, 13],
    [9, ' ', ' ', 12],
    [' ', 16, ' ', ' ']
  ])) // [ 2, 4, 6, 8, 10, 11, 14 ]
  console.log(missingNum([])) // []