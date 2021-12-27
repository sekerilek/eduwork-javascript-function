alert(`selamat datang di game tebak angka
Anda diminta untuk menebak angka 1-3
pemain dengan tebakan benar akan memenangkan game
SELAMAT BERMAIN!
`);
const score = [0, 0];
let tebakan = Math.floor(Math.random() * 3) + 1;

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
    }
  }
  validasi();

  if (pemain1 == tebakan) {
    alert(`Tebakan : ${tebakan}
      Pemain 1 : ${pemain1}
      Pemain 2 : ${pemain2}
      selamat untuk Pemain 1
    `);
    score[0] += 1;
  } else if (pemain2 == tebakan) {
    alert(`Tebakan : ${tebakan}
      Pemain 1 : ${pemain1}
      Pemain 2 : ${pemain2}
      selamat untuk Pemain 2
    `);
    score[1] += 1;
  }
  alert(`Score :
  Pemain 1 : ${score[0]}
  Pemain 2 : ${score[1]}`);
}
let ronde = 0;
while (ronde < 3) {
  game();
  if (ronde == 2) {
    if (score[0] > score[1]) {
      alert(`Selamat Pemain 1 memenangkan permainan`);
    } else if (score[0] < score[1]) {
      alert(`Selamat Pemain 2 memenangkan permainan`);
    }
  }
  ronde++;
}
