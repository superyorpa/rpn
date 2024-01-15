/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
*/

function dataHandling(input) {
    let hasil = '';
    for(let i = 0; i < input.length; i++) {
        hasil += `Nomor ID: ${input[i][0]} \nNama: ${input[i][1]} \nTTL: ${input[i][2]} \nHobi: ${input[i][3]} \n\n`;
    }
    return hasil;
}

let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung, 21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan, 10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon, 25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura, 6/4/1970", "Berkebun"]
];

console.log(dataHandling(input));