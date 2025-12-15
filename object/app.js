const programok = [];
const tbody = document
  .getElementById("tasksTable")
  .getElementsByTagName("tbody")[0];
const mentett = localStorage.getItem("programok");
if (mentett) {
  programok.push(...JSON.parse(mentett));
  tablazatFriss();
}
function gombUj() {
  const tdNev = document.getElementById("neve").value;
  const tdLeiras = document.getElementById("leirasa").value;
  const tdIdopont = document.getElementById("datuma").value;
  const program = {
    nev: tdNev,
    leiras: tdLeiras,
    idopont: tdIdopont,
  };
  programok.push(program);
  tablazatFriss();
}
function tablazatFriss() {
  tbody.innerHTML = "";
  programok.forEach((program, index) => {
    const tr = document.createElement("tr");
    const tdIndex = document.createElement("td");
    tdIndex.textContent = index + 1;
    tr.appendChild(tdIndex);
    const tdNev = document.createElement("td");
    tdNev.textContent = program.nev;
    tr.appendChild(tdNev);

    const tdLeiras = document.createElement("td");
    tdLeiras.textContent = program.leiras;
    tr.appendChild(tdLeiras);

    const tdIdopont = document.createElement("td");
    tdIdopont.textContent = program.idopont;
    tr.appendChild(tdIdopont);

    const tdTorlesGombok = document.createElement("td");
    tdTorlesGombok.appendChild(ujTorlesGomb(index));
    tr.appendChild(tdTorlesGombok);

    const tdModGombok = document.createElement("td");
    tdModGombok.appendChild(ujModGomb(index));
    tr.appendChild(tdModGombok);
    tbody.appendChild(tr);
  });
}
function ujTorlesGomb(index) {
  const button = document.createElement("button");
  button.textContent = "Törlés";
  button.onclick = function () {
    torlesFugg(index);
  };
  return button;
}
function ujModGomb(index) {
  const button = document.createElement("button");
  button.textContent = "Módosítás";
  button.onclick = function () {
    modFugg(index);
  };
  localStorage.setItem("programok", JSON.stringify(programok));
  return button;
}
function torlesFugg(index) {
  programok.splice(index, 1);
  tablazatFriss();
  localStorage.setItem("programok", JSON.stringify(programok));
}
function modFugg(index) {
  const tdNev = document.getElementById("neve").value;
  const tdLeiras = document.getElementById("leirasa").value;
  const tdIdopont = document.getElementById("datuma").value;
  programok[index] = {
    nev: tdNev,
    leiras: tdLeiras,
    idopont: tdIdopont,
  };
  tablazatFriss();
  localStorage.setItem("programok", JSON.stringify(programok));
}
