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
      } else if (pemain1 < 1 || pemain2 < 1) {
        alert(`nilai tidak boleh kurang dari 1`);
        game();
      }
    } else if (confirm(`masukkan angka`) == true) {
      game();
    } else {
      alert(`Sampai jumpa di game berikutnya`);
    }
  }
  validasi();

  let tebakan = Math.floor(Math.random() * 3) + 1;

  if (pemain1 == tebakan) {
    alert(`Tebakan : ${tebakan}
      Pemain 1 : ${pemain1}
      Pemain 2 : ${pemain2}
      selamat untuk Pemain 1
    `);
  } else if (pemain2 == tebakan) {
    alert(`Tebakan : ${tebakan}
      Pemain 1 : ${pemain1}
      Pemain 2 : ${pemain2}
      selamat untuk Pemain 2
    `);
  }
}

let ronde = 0;
while (ronde < 3) {
  game();
  ronde++;
}
