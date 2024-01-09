// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 23; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 7; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2003; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
let hasil;


//code switch case kamu disini

switch(bulan) {
    case 1:
        hasil = 'Januari';
        break;
    case bulan = 2:
        hasil = 'Februari';
        break;
    case 3:
        hasil = 'Maret';
        break;
    case 4:
        hasil = 'April';
        break;
    case 5:
        hasil = 'Mei';
        break;
    case 6:
        hasil = 'Juni';
        break;
    case 7:
        hasil = 'Juli';
        break;
    case 8:
        hasil = 'Agustus';
        break;
    case 9:
        hasil = 'September';
        break;
    case 10:
        hasil = 'Oktober';
        break;
    case 11:
        hasil = 'November';
        break;
    case 12:
        hasil = 'Desember';

    default:
        console.log(`Nama bulan tidak valid!`)
        break;
}


if(hasil !== '') {
    console.log(`${tanggal} ${hasil} ${tahun} `)
} else {
    console.log(`Bulan tidak valid`)
}
