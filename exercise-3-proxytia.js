var nama = "";
var peran = "";

if (nama === "") {
  console.log("Nama harus diisi!")
}

else if((nama === "Nina") && (peran === "Ksatria")) {
  console.log("Selamat datang di Dunia Proxytia, Nina")
  console.log("Halo " +peran+ " " + nama + ", kamu dapat menyerang dengan senjatamu!")
}

else if((nama === "Nina") && (peran === "Ksatria")) {
  console.log("Selamat datang di Dunia Proxytia, " +nama)
  console.log("Halo " +peran+ " " + nama + ", kamu dapat menyerang dengan senjatamu!")
}
else if((nama === "Danu") && (peran === "Tabib")) {
  console.log("Selamat datang di Dunia Proxytia, " +nama)
  console.log("Halo " +peran+ " " + nama + ", kamu dapat menyerang dengan senjatamu!")
}
else if((nama === "Zero") && (peran === "Tabib")) {
  console.log("Selamat datang di Dunia Proxytia, " +nama)
  console.log("Halo " +peran+ " " + nama + ", kamu dapat menyerang dengan senjatamu!");
}

else {
  console.log("Halo " + nama + ", pilih peranmu")
}
