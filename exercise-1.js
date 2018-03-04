function calculateMultiply(num1,num2){
	return num1 * num2
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

console.log('------------')

function bandingkanAngka(angka1, angka2) {
if (angka2 > angka1)
{
    return true
 } else if (angka2 < angka1){
    return false
 } else if (angka2 === angka1){
    return -1}
}


console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

console.log('------------')

function balikKata(kata) {
var str = ''
	for (var i=[kata.length-1]; i>=0; i--) {
	str += kata[i]
	}return str
}

console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS

console.log('------------')


console.log('------------')

function konversiMenit(menit) {

var jam = Math.floor(menit / 60)
var sisaMenit = menit % 60

  if (sisaMenit < 10) {
    return jam + ':0' + sisaMenit
  }
  else {
    return jam + ':' + sisaMenit
  }

	//return jam + ':' + sisaMenit
}

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
