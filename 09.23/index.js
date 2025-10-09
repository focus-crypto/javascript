import input from "./input.js";
// 0. feladat
let txt = await input("kérek egy szöveget(legalább 20 karakter): ");
console.log(txt);
// 1. feladat
const elsoMegoldas = txt.substr(0, 5);
console.log(`Az első 5 karakter: ${elsoMegoldas}`);
// 2. feladat
const haromtolNyolcig = txt.slice(2, 8);
console.log(`A 3.karaktertől a 8. karakterig: ${haromtolNyolcig}`);
// 3. feladat
const otodiktol = txt.substring(4);
console.log("Az 5.karaktertőlk a végéig: " + otodiktol);
// 4. feladat
const hatkarakterHosszan5tol = txt.substring(4, 10);
console.log("Hat karakter 5-től: " + hatkarakterHosszan5tol);
// 5. feladat
const nagybetus = txt.toUpperCase();
console.log("Nagy betűkkel: " + nagybetus);
// 6. feladat
let mindenmasodik = "";
for (let i = 0; i < txt.length; i++) {
  if (i % 2 != 0) {
    mindenmasodik += txt[i].toUpperCase();
  } else {
    mindenmasodik += txt[i];
  }
}
console.log("Minden második nagy: " + mindenmasodik);
// 7. feladat
const nagyEk = txt.replaceAll("e", "E");
console.log("NAgy e:" + nagyEk);
// 8. feladat
const eBetukSzerint = txt.split("e");
for (let i = 0; i <= eBetukSzerint.length; i++) {
  console.log(eBetukSzerint[i]);
}
