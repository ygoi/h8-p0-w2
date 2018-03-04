/*
Tugas1

 Menampilkan "Halo Function!" di console
*/

function shoutout() {
  console.log('Halo Function!');
}

shoutout();

/*
 Tugas 2
 Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari dua parameter yang dikirim.
 Menampilkan angka 30
*/

function calculateMultiply(){
var num1 = 5;
var num2 = 6;
return num1 * num2
}
var hasilPerkalian = calculateMultiply;
console.log(hasilPerkalian()); // Menampilkan angka 30

/*
Tugas 3
Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi satu kalimat berikut: "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"
*/

function processSentence(){
  return "nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + "dan saya punya hobby yaitu " + hobby
}
var name = "Yogi";
var age = 31;
var address = "Jalan Karya Utama Srengseng Kembangan Jakarta Barat ";
var hobby = "menonton bola dan musik"
var fullSentence = processSentence (name,age,address,hobby)

console.log(fullSentence)
