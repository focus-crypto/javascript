function fetching(id) {
  fetch(`https://surveys-5jvt.onrender.com/api/users/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((user) => {
      console.log(user);
      megjelenites(user);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

function megjelenites(adatok) {
  document.getElementById("id").textContent = adatok.id;
  document.getElementById("nev").textContent = [
    adatok.firstName,
    adatok.lastName,
  ].join(" ");
  document.getElementById("email").textContent = adatok.email;
  document.getElementById("jelszo").textContent = adatok.password;
}

function kereses() {
  let id = document.getElementById("userID").value;
  fetching(id);
}
