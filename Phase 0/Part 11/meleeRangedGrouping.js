/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, 
implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping (str) {
    if(str.length = 0 || !str) {
        return [];
    }

    let arrStr = str.split(',');
    let ranged = [];
    let melee = [];

    for(let i = 0; i < arrStr.length; i++) {
        if(arrStr[i].includes('Ranged')) {
            ranged.push(arrStr[i].split('-')[0])
        } else if(arrStr[i].includes('Melee')) {
            melee.push(arrStr[i].split('-')[0])
        }
    }
    return [ranged, melee]
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []