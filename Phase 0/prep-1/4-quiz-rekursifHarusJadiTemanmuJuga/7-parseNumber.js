/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
  let equationStr = equation.toString();

  if(equationStr.length <= 1) return equation;

  let firstDigit = equationStr[0];
  let zeros = '0'.repeat(equationStr.length-1);
  let res = firstDigit + zeros;

  let remaining = parseNumber(equationStr.slice(1));

  return remaining === '0' ? res : `${res} + ${remaining}`; 
};
  
  console.log(parseNumber(3333)) // 3000+300+30+3  // 3000 + 300 + 30 + 3
  console.log(parseNumber(90)) // 90
  console.log(parseNumber(2333)) // 2000+300+30+3