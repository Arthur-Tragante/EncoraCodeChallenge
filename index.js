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

amount = "5436843";

dollars = ("0000000" + amount)
  .slice(-7)
  .match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);

function write() {
  console.log(dollars);
}

write();
