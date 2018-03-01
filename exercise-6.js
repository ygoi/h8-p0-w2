/*
1. Melakukan Looping Menggunakan While
Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
*/
LOOPING PERTAMA
var angka = 2;
while(angka <= 20) { // Loop akan terus berjalan selama nilai flag masih dibawah dan sama dengan 20
  console.log(angka + ' - I Love coding' ); // Menambahkan I love coding
  angka +=2; // Mengubah nilai flag dengan menambahkan 2
}

LOOPING KEDUA
var angka = 20;
while(angka >= 2) { // Loop akan terus berjalan selama nilai flag bernilai 2
  console.log(angka + ' - I Love coding' ); // Menambahkan I love coding
  angka -=2; // Mengubah nilai flag dengan mengurangi 2
}

/*
2. Melakukan Looping Menggunakan For
Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.

Hints
Operator ++ disebut dengan operator Increment Operator -- disebut dengan operator Decrement
*/
LOOPING PERTAMA
for(var angka = 0; angka <= 20; angka ++) {
  console.log(angka + ' - I love coding')
}

LOOPING KEDUA
for(var angka = 20; angka >= 2; angka -= 2) {
  console.log(angka + ' - I will become fullstack developer')
}

/*
3. Angka Ganjil dan Genap
Hint: kamu akan menggunakan kondisional juga di kasus ini.

Problem
1. Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
2. Di dalam perulangan, periksa setiap angka counter:
    - Apabila angka counter adalah angka genap, tuliskan GENAP
    - Apabila angka counter adalah angka ganjil, tuliskan GANJIL
*/
for(var angka = 1; angka <=100; angka ++) {
  if(angka % 2 === 0) {
    console.log('GENAP')
  }
  else {
    console.log('GANJIL')
  }
}

/*
3. Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
*/
for(var angka = 1; angka <=100; angka += 2) {
  console.log(angka);
}

for(var angka = 1; angka <=100; angka += 5) {
  console.log(angka);
}

for(var angka = 1; angka <=100; angka += 9) {
  console.log(angka);
}

/*
4. Pada 3 perulangan baru ini periksa setiap angka counter:
Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
"3 kelipatan 3" dan seterusnya.
*/

for(var angka = 1; angka <=100; angka += 2) {
  if(angka % 3 === 0) {
  console.log(angka + ' kelipatan 3');
  }
}

for(var angka = 1; angka <=100; angka += 5) {
  if(angka % 6 === 0) {
  console.log(angka + ' kelipatan 6');
  }
}

for(var angka = 1; angka <=100; angka += 9) {
  if(angka % 10 === 0) {
  console.log(angka + ' kelipatan 9');
  }
}

/*
