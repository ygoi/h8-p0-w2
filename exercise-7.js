/*
1. Menyusun Barisan Bintang
Output
jika rows1 = 5

*
*
*
*
*
*/

for (var i = 1; i <=5; i++) {
  console.log('*');
}

/*
2. Menyusun Barisan Bintang Dengan Nested Looping
Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki jumlah simbol '*' sesuai dengan jumlah baris. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.

Output
jika rows2 = 5

*****
*****
*****
*****
*****
*/

var baris = '';
for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= 5; j++) {
    baris += '*';
  }
  baris += '\n'; //enter
}

console.log(baris);

/*
3.
Output
jika rows3 = 5

*
**
***
****
*****
*/

var baris = '';
for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= i; j++) {
    baris += '*';
  }
  baris += '\n'; //enter
}

console.log(baris);
