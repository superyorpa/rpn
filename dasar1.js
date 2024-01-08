 // variable
var a = 'a';
let b = 'b';
const c = 'c';

// variable bisa menampung tipe data string, number, boolean, array, object

let nama = 'Radit'; // string
let umur = 20; // number integer
let uang = 10.500 // number float
let apakahBenar = true; // boolean

// operator aritmatika
let angka1 = 10;
let angka2 = 5;

console.log(angka1 + angka2);
console.log(angka1 - angka2);
console.log(angka1 / angka2);
console.log(angka1 * angka2);
console.log(angka1 % angka2);

// mengisi variable
let penampungHasil = angka1 + angka2;
console.log(penampungHasil); // 15

penampungHasil = angka1 - angka2;
console.log(penampungHasil); // 5

 penampungHasil = angka1 / angka2;
console.log(penampungHasil); // 2

 penampungHasil = angka1 * angka2;
console.log(penampungHasil); // 50

 penampungHasil = angka1 % angka2;
console.log(penampungHasil); // 0 

// penambahan dan pengurangan string
let firstName = 'Joko';
let lastName = 'Widodo';
let fullName = firstName + ' ' + lastName;
console.log(fullName);
console.log(firstName + ' ' + lastName); 
console.log(firstName - ' ' - lastName); // NaN

// alur baca code
// dari kiri ke kanan, dan dari atas ke bawah
let num = 20;
console.log(num + 10); // 30
num - 10;
console.log(num + 10); // 20
// true = 1, false = 0
num = false;
console.log(num + 10); // 10
num = true;
console.log(num + 10); // 11

// membaca error 
// ketika suatu program berjalan namun ada bug tapi tidak ada error
// hal tsb membuat programmer susah mencari kesalahan

// contoh error
// const hewan = 'kucing';
// console.log(hewan);
// hewan = 'burung';