let day = document.querySelector(".day");
let monthe = document.querySelector(".monthe");
let year = document.querySelector(".year");
let submit = document.querySelector(".image > div");
let calc = document.querySelector(".calc");
let div = document.querySelectorAll(".card form div");

const caluTheDate = () => {};
submit.addEventListener("click", () => {
  let date = new Date();
  let yourDate = new Date(`${monthe.value}/${day.value}/${year.value}`);
  let finalDatw = date - yourDate;
  let years = Math.floor(finalDatw / (1000 * 60 * 60 * 24 * 365));
  let mothes = Math.floor(
    (finalDatw % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );
  let days = Math.floor((finalDatw % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  if (day.value <= 30 && monthe.value <= 12) {
    calc.innerHTML = `<h1><span>${years}</span>Years</h1>
    <h1><span>${mothes}</span>Monthes</h1>
    <h1><span>${days}</span>days</h1>`;
    div.forEach((e) => e.classList.remove("e"));
  }
  if (
    day.value === "" ||
    day.value === "0" &&
    monthe.value === "" ||
    monthe.value === "0" &&
    year.value === "" ||
    year.value === "0"
  ) {
    calc.innerHTML = `<h1><span>--</span>Years</h1>
    <h1><span>--</span>Monthes</h1>
    <h1><span>--</span>days</h1>`;
    div.forEach((e) => e.classList.add("e"));
  }
});

day.oninput = () => {
  if (day.value < 1 ||day.value > 30 ) {
    day.value = false;
  } 
};
monthe.oninput = () => {
  if (monthe.value < 1 || monthe.value > 12) {
    monthe.value = false;}
};
year.oninput = () => {
  if (year.value < 0 || year.value > new Date().getFullYear()) {
    year.value = false;
  }
};
