const word = prompt("Informe uma palavra:");
let iword = "";

for (let i = word.length - 1; i >= 0; i--) {
  iword += word[i];
}

if (word === iword) {
  alert(`${word} é um palindromo`);
} else {
  alert(`${word} não é um palindromo\n\n ${word} !== ${iword}`);
}
