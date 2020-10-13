const ikaoAlphabet = {
  A: "Alfa",
  B: "Bravo",
  C: "Charlie",
  D: "Delta",
  E: "Echo",
  F: "Foxtrot",
  G: "Golf",
  H: "Hotel",
  I: "India",
  J: "Juliett",
  K: "Kilo",
  L: "Lima",
  M: "Mike",
  N: "November",
  O: "Oscar",
  P: "Papa",
  Q: "Quebec",
  R: "Romeo",
  S: "Sierra",
  T: "Tango",
  U: "Uniform",
  V: "Victor",
  W: "Whiskey",
  X: "Xray",
  Y: "Yankee",
  Z: "Zulu",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  0: "Zero",
};

let userCode = prompt("Введіть код");
if (
  userCode == "" ||
  userCode == null ||
  userCode.length > 6 ||
  userCode.length < 6
) {
  document.write(
    `
    <div>
      <span>Помилка при введенні данних</span>
    </div>
  `
  );
} else {
  let splitCode = userCode.split("");
  let element = splitCode[0].toUpperCase();
  let element1 = splitCode[1].toUpperCase();
  let element2 = splitCode[2].toUpperCase();
  let element3 = splitCode[3].toUpperCase();
  let element4 = splitCode[4].toUpperCase();
  let element5 = splitCode[5].toUpperCase();
  document.write(
    `
    <div>
      <span>${ikaoAlphabet[element]} ${ikaoAlphabet[element1]} ${ikaoAlphabet[element2]} ${ikaoAlphabet[element3]} ${ikaoAlphabet[element4]} ${ikaoAlphabet[element5]}</span>
    </div>
  `
  );
}
