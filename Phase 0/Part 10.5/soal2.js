/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan 
huruf vokal yang diganti akan menjadi huruf 
setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals (str) {
  let ubah = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
      ubah += 'b';
    } else if (str[i] === 'i') {
      ubah += 'j';
    } else if (str[i] === 'u') {
      ubah += 'v';
    } else if (str[i] === 'e') {
      ubah += 'f';
    } else if (str[i] === 'o') {
      ubah += 'p';
    } else if (str[i] === 'A') {
      ubah += 'B';
    } else if (str[i] === 'I') {
      ubah += 'J';
    } else if (str[i] === 'U') {
      ubah += 'V';
    } else if (str[i] === 'E') {
      ubah += 'F';
    } else if (str[i] === 'O') {
      ubah += 'P';
    } else {
      ubah += str[i];
    }
  }
  return ubah;  
}
  
  function reverseWord (str) {
    return str.split('').reverse().join('');
  }
  
  function setLowerUpperCase (str) {
    let kata = '';
    for(let i = 0; i < str.length; i++) {
      if(str[i] === str[i].toLowerCase()) {
        kata += str[i].toUpperCase();
      } else {
        kata += str[i].toLowerCase();
      }
    }
    return kata;
  }
  
  function removeSpaces (str) {
    let kata = '';
    for(let i = 0; i < str.length; i++) {
      if(str[i] !== ' ') {
        kata += str[i];
      }
    }
    return kata;
  }
  
  function passwordGenerator (name) {
    if(name.length < 5) {
      return `Minimal karakter yang diinputkan adalah 5 karatker`;
    } else {
      let result = removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
      return result;
    } 
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'