/*
Function travelingIndonesia akan mengembalikan nilai sebuah string suatu perjalanan seseorang
di kota-kota besar yang ada di Indonesia.

Secara berturut-turut rute akan berlangsung ;
Yogyakarta > Semarang > Surabaya > Denpasar

Rute tersebut berlaku arah sebaliknya.
Traveller dapat menggunakan transportasi yang disediakan oleh
Pemerintah yaitu berupa :

- Pesawat, biayanya 275000
- Kereta, biayanya 250000
- Bis, biayanya 225000

Biaya tersebut berlaku untuk jarak 1 kota saja.

Dikarenakan traveller berkeliling Indonesia bertepatan dengan digalakkannya visit Indonesia
Maka traveller akan mendapatkan diskon menggunakan metode pembayaran tertentu;

- OVO > akan mendapatkan diskon 15% setiap kota
- Dana > akan mendapatkan diskon 10% setiap kota
- Gopay > akan mendapatkan diskon 5% setiap kota
- Cash > normal;

Function tersebut akan mengembalikan siapa yang mengeluarkan biaya paling besar (sudah termasuk diskon);

Note:
1. Hanya boleh menggunakan built in function .push();
*/

function travelingIndonesia(arr, emoney) {
  if(arr.length === 0 || !arr) {return arr};

  let rute = ['Yogyakarta', 'Semarang', 'Surabaya', 'Denpasar'];
  let regex = /[a-z,A-Z]+/g;
  let res = [];

  let transportCost = {
    'Pesawat': 275000,
    'Kereta': 250000,
    'Bis': 225000
  };

  let discountRate = {
    'OVO': 0.15,
    'Dana': 0.1,
    'Gopay': 0.05,
    'Cash': 0
  };


  for(let i = 0; i < arr.length; i++) {
    let matches = arr[i].match(regex);
    let name = matches[0];
    let departure = matches[1];
    let destination = matches[2];
    let transport = matches[3];

    // cek index departure dan destination
    let departureIndex, destinationIndex = 0;
    for(let j = 0; j < rute.length; j++) {
      if(rute[j] === departure) {departureIndex = j};
      if(rute[j] === destination) {destinationIndex = j};
    }

    let range = Math.abs(departureIndex-destinationIndex);
    let price = transportCost[transport];
    let discount = discountRate[emoney];
    
    let totalCost = range * (price - (price*discount));

    let obj = {
      name, 
      departure,
      destination,
      transport,
      totalCost
    }

    res.push(obj);
  }
  // bubblesort buat urut sesuai test case
  for(let i = 0; i < res.length; i++) {
    for(let j = 0; j < (res.length-i-1); j++) {
      if(res[j].totalCost < res[j+1].totalCost) {
        let temp = res[j];
        res[j] = res[j+1];
        res[j+1] = temp;
      }
    }
  }
  
  return res;
};
  
  console.log(travelingIndonesia(['Danang-Yogyakarta-Semarang-Bis', 'Alif-Denpasar-Surabaya-Kereta', 'Bahari-Semarang-Denpasar-Pesawat'], 'OVO'));
  /*
  [ { name: 'Bahari',
      departureCity: 'Semarang',
      destinationCity: 'Denpasar',
      transport: 'Pesawat',
      totalCost: 467500 },
    { name: 'Alif',
      departureCity: 'Denpasar',
      destinationCity: 'Surabaya',
      transport: 'Kereta',
      totalCost: 212500 },
    { name: 'Danang',
      departureCity: 'Yogyakarta',
      destinationCity: 'Semarang',
      transport: 'Bis',
      totalCost: 191250 } ]
  */
  console.log("==================================================================================================");
  console.log(travelingIndonesia(['Shafur-Surabaya-Yogyakarta-Kereta', 'Taufik-Semarang-Surabaya-Pesawat', 'Alex-Yogyakarta-Semarang-Kereta'], 'Dana'));
  // /*
  // [ { name: 'Shafur',
  //     departureCity: 'Surabaya',
  //     destinationCity: 'Yogyakarta',
  //     transport: 'Kereta',
  //     totalCost: 450000 },
  //   { name: 'Taufik',
  //     departureCity: 'Semarang',
  //     destinationCity: 'Surabaya',
  //     transport: 'Pesawat',
  //     totalCost: 247500 },
  //   { name: 'Alex',
  //     departureCity: 'Yogyakarta',
  //     destinationCity: 'Semarang',
  //     transport: 'Kereta',
  //     totalCost: 225000 } ]
  // */
  console.log("==================================================================================================");
  console.log(travelingIndonesia(['Andika-Denpasar-Surabaya-Bis', 'Katy-Surabaya-Denpasar-Pesawat'], 'Gopay'));
  // /*
  // [ { name: 'Katy',
  //     departureCity: 'Surabaya',
  //     destinationCity: 'Denpasar',
  //     transport: 'Pesawat',
  //     totalCost: 261250 },
  //   { name: 'Andika',
  //     departureCity: 'Denpasar',
  //     destinationCity: 'Surabaya',
  //     transport: 'Bis',
  //     totalCost: 213750 } ]
  // */
  console.log("==================================================================================================");
  console.log(travelingIndonesia(['Putra-Denpasar-Yogyakarta-Pesawat'], 'Cash'));
  // /*
  // [ { name: 'Putra',
  //     departureCity: 'Denpasar',
  //     destinationCity: 'Yogyakarta',
  //     transport: 'Pesawat',
  //     totalCost: 825000 } ]
  // */
  console.log(travelingIndonesia([], 'Cash')); // [];