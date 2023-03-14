function tambah(a, b) {
  return a + b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  return a / b;
}

function kurang(a, b) {
  return a - b;
}

let operator = prompt("masukkan + * / -");
let a = parseInt(prompt("masukkan nilai 1"));
let b = parseInt(prompt("masukkan nilai 2"));

if (operator == "+") {
  let hasil = a + b;
  console.log(hasil);
}
if (operator == "*") {
  let hasil = a * b;
  console.log(hasil);
}
if (operator == "/") {
  let hasil = a / b;
  console.log(hasil);
}
if (operator == "-") {
  let hasil = a - b;
  console.log(hasil);
}
