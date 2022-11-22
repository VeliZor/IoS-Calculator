let hesap = document.querySelector(".buttons");
let alt = document.querySelector(".bottom");
let ust = document.querySelector(".top");
let del = document.querySelector(".sil");
let yuzde = document.querySelector(".yuzde");
let hal = document.querySelector(".hal");
let esit = document.querySelector(".esit");

hesap.addEventListener("click", (e) => {
  if (e.target.classList.contains("num")) {
    alt.innerHTML += e.target.innerHTML;
  } else if (e.target.classList.contains("islem")) {
    ust.innerHTML = alt.innerHTML + " " + e.target.innerHTML;
    alt.innerHTML = "";
  } else if (e.target.classList.contains("sil")) {
    alt.innerHTML = "";
    ust.innerHTML = "";
  } else if (e.target == yuzde) {
    alt.innerHTML = parseFloat(al.innerHTML) / 100;
  } else if (e.target == hal) {
    alt.innerHTML = -alt.innerHTML;
  } else if (e.target == esit) {
    esitle();
  }
});

function esitle() {
  if (ust.innerHTML.slice(-1) == "÷") {
    alt.innerHTML = (ust.innerHTML.slice(0, -2) / alt.innerHTML).toFixed(1);
  } else if (ust.innerHTML.slice(-1) == "x") {
    alt.innerHTML = (ust.innerHTML.slice(0, -2) * alt.innerHTML).toFixed(1);
  } else if (ust.innerHTML.slice(-1) == "-") {
    alt.innerHTML = (ust.innerHTML.slice(0, -2) - alt.innerHTML).toFixed(1);
  } else if (ust.innerHTML.slice(-1) == "+") {
    alt.innerHTML = Number(ust.innerHTML.slice(0, -2)) + Number(alt.innerHTML);
  }
}
