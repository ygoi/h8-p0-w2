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

var tanggal = 12
var bulan = null
var tahun = 1970
switch (bulan) {
  case 1:   { (tanggal + ' Januari ' + tahun);
    break; }
  case 2:   { (tanggal + ' Februari ' + tahun);
    break; }
  case 3:   { (tanggal + ' Maret ' + tahun);
    break; }
  case 4:   { (tanggal + ' April ' + tahun);
    break; }
  case 5:   { (tanggal + ' Mei ' + tahun);
    break; }
  case 6:   { (tanggal + ' Juni ' + tahun);
    break; }
  case 7:   { (tanggal + ' Juli ' + tahun);
    break; }
  case 8: { (tanggal + ' Agustus ' + tahun);
    break; }
  case 9: { (tanggal + ' September ' + tahun);
    break; }
  case 10: { (tanggal + ' Oktober ' + tahun);
    break; }
  case 11:  { (tanggal + ' November ' + tahun);
    break; }
  default:  { ('Isi bulan antara 1-12');
    break; }
}
