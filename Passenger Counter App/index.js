let count = 0;
let innercount = document.getElementById("count-el");
let saveValue = document.getElementById("save-el");
const increment = () => {
  count = count + 1;
  innercount.textContent = count;
};

const save = () => {
  let countStr = count + "  - ";
  saveValue.textContent += countStr;
  innercount.textContent = 0;
  count = 0;
};
