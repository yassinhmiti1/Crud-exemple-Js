const st1 = document.getElementById("step-1");
const st2 = document.getElementById("step-2");
const st3 = document.getElementById("step-3");
const bs1 = document.getElementById("btn-suivant-1");
const bs2 = document.getElementById("btn-suivant-2");
const bb1 = document.getElementById("btn-back-1");
const bb2 = document.getElementById("btn-back-2");
const br = document.getElementById("btn-register");
const i1 = document.getElementById("i1");
const i2 = document.getElementById("i2");
const i4 = document.getElementById("i4");
const i5 = document.getElementById("i5");
const i6 = document.getElementById("i6");
const i7 = document.getElementById("i7");
const i8 = document.getElementById("i8");

bs1.addEventListener("click", function (e) {
  e.preventDefault();
  const checkedradio = document.querySelector('input[name="g"]:checked');
  let val1 = i1.value.trim();
  let val2 = i2.value.trim();
  let val3 = checkedradio ? checkedradio.value : "";
  let val4 = i4.value;
  if (val1 === "" || val2 === "" || val3 === "" || val4 === "") {
    alert("il faut saisir tout les champs!");
  } else {
    var t1 = document.getElementById("ti-1");
    t1.innerHTML = "1- Informations Personnelles✅"
    st1.classList.add("hidden");
    st2.classList.remove("hidden");
    st3.classList.add("hidden");
  }
});
bs2.addEventListener("click", function (e) {
  e.preventDefault();
  let val5 = i5.value.trim();
  let val6 = i6.value.trim();
  if (val5 === "" || val6 === "") {
    alert("il faut saisir tout les champs!");
  } else {
    var t2 = document.getElementById("ti-2");
    t2.innerHTML = "2- Infos De Contact✅"
    st1.classList.add("hidden");
    st2.classList.add("hidden");
    st3.classList.remove("hidden");
  }
});
bb1.addEventListener("click", function (e) {
  st1.classList.remove("hidden");
  st2.classList.add("hidden");
  st3.classList.add("hidden");
});
bb2.addEventListener("click", function (e) {
  st1.classList.add("hidden");
  st2.classList.remove("hidden");
  st3.classList.add("hidden");
});

class User {
  constructor(fname, lname, genre, pays, pn, email, pass) {
    this.fname = fname;
    this.lname = lname;
    this.genre = genre;
    this.pays = pays;
    this.pn = pn;
    this.email = email;
    this.pass = pass;
  }
}
var users = [];
br.addEventListener("click", function (e) {
  e.preventDefault();
  const checkedradio = document.querySelector('input[name="g"]:checked');
  let val1 = i1.value.trim();
  let val2 = i2.value.trim();
  let val3 = checkedradio ? checkedradio.value : "";
  let val4 = i4.value;
  let val5 = i5.value.trim();
  let val6 = i6.value.trim();
  let val7 = i7.value.trim();
  let val8 = i8.value.trim();

  if (val7 !== val8) {
    alert("password doesn't match!!!");
  } else {
    var u1 = new User(val1, val2, val3, val4, val5, val6, val7);
    var dc={
      first_name: val1,
      last_name: val2,
      gender: val3,
      pays: val4,
      phone_number: val5,
      email: val6,
      password: val7
    };
    users.push(dc);
    var data = JSON.stringify(users);
    console.log(data);
    alert("registration complete!!!");
  }
});

st1.classList.remove("hidden");
st2.classList.add("hidden");
st3.classList.add("hidden");
