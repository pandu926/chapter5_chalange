// mendefinisikan variabel

let reset = document.getElementById("reset");
let batu = document.getElementById("batu");
let gunting = document.getElementById("gunting");
let kertas = document.getElementById("kertas");
let result = document.getElementById("result");
let resultText = document.getElementById("result-text");
let com = comSelect();
let comChange = document.getElementsByClassName(com);

// dom event untuk pemilihan

batu.onclick = function () {
  batu.style.background = "white";
  let player = "batu";
  let gameSuit = new GameSuit(com, player);
  comChange[0].style.background = "white";
  result.style.opacity = 1;
  let hasil = gameSuit.rules();
  resultText.innerHTML = hasil;
};

gunting.onclick = function () {
  gunting.style.background = "white";
  let player = "gunting";
  let gameSuit = new GameSuit(com, player);
  comChange[0].style.background = "white";
  result.style.opacity = 1;
  let hasil = gameSuit.rules();
  resultText.innerHTML = hasil;
};
kertas.onclick = function () {
  kertas.style.background = "white";
  let player = "kertas";
  let gameSuit = new GameSuit(com, player);
  comChange[0].style.background = "white";
  result.style.opacity = 1;
  let hasil = gameSuit.rules();
  resultText.innerHTML = hasil;
};
reset.onclick = function () {
  gunting.style.background = "none";
  batu.style.background = "none";
  kertas.style.background = "none";
  comChange[0].style.background = "none";
  result.style.opacity = 0;
};

// menentukan pilihan computer

function comSelect() {
  let com = Math.random();
  if (com < 0.34) {
    com = "batu";
  } else if (com > 0.33 && com < 0.67) {
    com = "kertas";
  } else {
    com = "gunting";
  }
  return com;
}
