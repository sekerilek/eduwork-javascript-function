alert(`selamat datang di game tebak angka
Anda diminta untuk menebak angka 1-3
pemain dengan tebakan benar akan memenangkan game
SELAMAT BERMAIN!
`);
function game() {
  let pemain1 = prompt("Pemain 1 : masukkan angka");
  let pemain2 = prompt("Pemain 2 : masukkan angka");

  function validasi() {
    let validasiAngka = /^[0-9]+$/;
    if (pemain1.match(validasiAngka) && pemain2.match(validasiAngka)) {
      if (pemain1 == pemain2) {
        alert(`nilai tidak boleh sama`);
        game();
      } else if (pemain1 > 3 || pemain2 > 3) {
        alert(`nilai tidak boleh lebih dari 3`);
        game();
      }
    } else if (confirm(`masukkan angka`) == true) {
      game();
    } else {
      alert(`Sampai jumpa di game berikutnya`);
    }
  }
  validasi();

  function ulang() {
    if (confirm(`Apakah anda ingin bermain lagi?`) == true) {
      game();
    } else {
      alert(`Sampai jumpa di game berikutnya`);
    }
  }
  if (pemain1 == 3) {
    alert(`Tebakan : 3
      Pemain 1 : ${pemain1}
      Pemain 2 : ${pemain2}
      selamat untuk Pemain 1
    `);
    ulang();
  } else if (pemain2 == 3) {
    alert(`Tebakan : 3
      Pemain 1 : ${pemain1}
      Pemain 2 : ${pemain2}
      selamat untuk Pemain 2
    `);
    ulang();
  } else {
    confirm(`Tebakan : 3
      Tidak ada yang menjawab dengan benar
    `);
    ulang();
  }
}
game();
