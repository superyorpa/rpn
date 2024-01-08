// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

//tugas = program untuk cek isi var peran dan mengeluarkan respons sesuai isi variable.

//buat 2 variable nama dan peran
//variable peran harus memiliki isi data

//bila nama kosong, beri peringatan 'nama wajib diisi'
//bila perann kosong, beri peringatan 'pilih peranmu untuk memulai game'

//terdapat 3 peran: ksatria, tabib, penyihir
//rules respons sesuai di soal

let nama = 'Radit';
let role = 'ksatria';

if(nama.length === 0) {
    console.log('Nama wajib diisi!')
} else if(role.length === 0) {
    console.log('Pilih Peranmu untuk memulai game')
} else if(role == 'ksatria') {
    console.log(`Halo ${role} ${nama}, kamu dapat menyerang dengan senjatamu!`)
} else if(role == 'tabib') {
    console.log(`Halo ${role} ${nama}, kamu akan membantu temanmu yang terluka`)
} else if(role == 'penyihir') {
    console.log(`Halo ${role} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
} else {
    console.log(`${nama}, kamu jadi NPC aja ya!`)
}
