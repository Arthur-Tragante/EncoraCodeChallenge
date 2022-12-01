let basics = [
  "",
  "one ",
  "two ",
  "three ",
  "four ",
  "five ",
  "six ",
  "seven ",
  "eight ",
  "nine ",
  "ten ",
  "eleven ",
  "twelve ",
  "thirteen ",
  "fourteen ",
  "fifteen ",
  "sixteen ",
  "seventeen ",
  "eighteen ",
  "nineteen ",
];
let ten = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
let scales = ["million", "thousand", "hundred"];
let arrayOfWords = [];
amount = "1111111";
let dollarsArr = [];
dollars = ("0000000" + amount)
  .slice(-7)
  .match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);
// console.log(dollars);
function write() {
  return dollars.map((value, index) => {
    if (index === 1 && value != 0) {
      return `${basics[value]}${scales[index - 1]} `;
    } else if (index === 2 && value != 0) {
      return `${basics[value]}${scales[index]}`;
    } else if (index === 3 && value < 10 && value != 0) {
      return `${basics[value[1]]}${scales[index - 2]}`;
    } else if (index === 3 && value != 0 && value > 20) {
      return `${ten[value[0] - 2]} ${basics[value[1]]}${scales[index - 2]} `;
    } else if (index === 3 && value != 0 && value > 10 && value < 20) {
      return `${basics[value]}${scales[index - 2]} `;
    } else if (index === 4 && value != 0) {
      return `${basics[value]}${scales[index - 2]} `;
    } else if (index === 5 && value < 10 && value != 0) {
      return `${basics[value[1]]}`;
    } else if (index === 5 && value != 0 && value > 20) {
      return `${ten[value[0] - 2]} ${basics[value[1]]} `;
    } else if (index === 5 && value != 0 && value > 10 && value < 20) {
      return `${basics[value]}`;
    }
  });
}

console.log(write());
