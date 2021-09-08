// const card1 = document.getElementById("card1");
// const card2 = document.getElementById("card2");
// const card3 = document.getElementById("card3");
// const card4 = document.getElementById("card4");
// const card5 = document.getElementById("card5");
// const card6 = document.getElementById("card6");
// const btn7 = document.getElementById("btn7");

// const cards = [card1, card2, card3, card4, card5, card6];

// let i = card2;
// btn7.addEventListener("click", function () {
//   card1.innerHTML = i;
// });

// console.log(card2);

//----* Sign Up *---
const username = document.getElementById("username");
// const usernamein = document.getElementById("usernamein");
const password = document.getElementById("password");
// const passwordin = document.getElementById("passwordin");
const email = document.getElementById("email");
const number = document.getElementById("number");
// const checkbox = document.getElementById("checkbox");
const btnsubmit = document.getElementById("btnsubmit");

btnsubmit.addEventListener("click", () => {
  username.value = "";
  password.value = "";
  number.value = "";
  email.value = "";
  // alert("You have an account");
});

// Sign up ni bosganda chiqishi

const btn = document.getElementById("btn");
const cancelbtn = document.getElementById("cancel");
const popup = document.querySelector(".popup");

btn.addEventListener("click", () => {
  popup.classList.remove("hidden");
});
cancelbtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});
