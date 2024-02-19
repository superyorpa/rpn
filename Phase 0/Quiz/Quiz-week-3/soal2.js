/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. 
Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  
  let result = [];

  for(let i = 0; i < arrPenumpang.length; i++) {
    let obj = {
      penumpang: arrPenumpang[i][0],
      naikDari: arrPenumpang[i][1],
      tujuan: arrPenumpang[i][2],
      bayar: 1
    };

    let naikDariIndex = rute.indexOf(obj.naikDari);
    let tujuanIndex = rute.indexOf(obj.tujuan);

    if(naikDariIndex !== -1 && tujuanIndex !== -1) {
      obj.bayar *= Math.abs(naikDariIndex-tujuanIndex) * 2000
    }

    result.push(obj);
  }

  return result;
}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]