/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */

let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    let name = `${input[1]} Elsharawy`;
    let prov = `Provinsi ${input[2]}`;

    input.splice(1, 1, name);
    input.splice(2, 1, prov);
    input.splice(4, 1, 'Pria', 'SMA Internasional Metro');
    console.log(input);

    let month = input[3].split('/');
    if(month[1] == '05') {
        console.log('Mei');
    }

    console.log(month[2], month[0], month[1]);
    console.log(month.join('-'));
    console.log(input[1].slice(0, 15));
}

dataHandling(input);

