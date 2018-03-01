/*
Menggunakan Switch-Case

Objectives
Mengerti Cara Menggunakan Switch-Case
Mengerti Logika Switch-Case

Directions
Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

Gunakan switch case untuk kasus ini!

Contoh:

var hari = 21; var bulan = 1; var tahun = 1945;

Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

Skeleton Code / Code yang dicontohkan yang perlu diikuti dan dimodifikasi
var tanggal; 10 // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan; 12// assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun; 1945 // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

*/

var tanggal = 31
var bulan = 12
var tahun = 1986
switch (bulan) {
  case 1:   { console.log('Januari'); break; }
  case 2:   { console.log('Februari'); break; }
  case 3:   { console.log('Maret'); break; }
  case 4:   { console.log('April'); break; }
  case 5:   { console.log('Mei'); break; }
  case 6:   { console.log('Juni'); break; }
  case 7:   { console.log('Juli'); break; }
  case 8:   { console.log('Agustus'); break; }
  case 9:   { console.log('September'); break; }
  case 10:   { console.log('Oktober'); break; }
  case 11:   { console.log('November'); break; }
  case 12:   { console.log('Desember'); break; }
}

console.log(tanggal, bulan, tahun)
