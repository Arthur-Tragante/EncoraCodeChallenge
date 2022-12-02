const numToWords = require("./numToWords");

describe("Convert Numbers To Words", () => {
  test("converts a number without comma to words", () => {
    expect(numToWords("1234567")).toBe("one million two hundred thirty-four thousand five hundred sixty-seven dollars");
  });
  test("converts a number with comma to words", () => {
    expect(numToWords("1234567,50")).toBe("one million two hundred thirty-four thousand five hundred sixty-seven dollars and 50/100");
  });
});
describe("Numbers With Dot for Cents", () => {
  test("numbers with dots breaking the cents", () => {
    expect(numToWords("09.08")).toBe("nine dollars and 08/100");
  });
});
describe("Convert Numbers Smaller Than To Words", () => {
  test("converts a number smaller than ten without comma to words", () => {
    expect(numToWords("6")).toBe("six dollars");
  });
  test("converts a number smaller than ten with comma to words", () => {
    expect(numToWords("8,10")).toBe("eight dollars and 10/100");
  });
});
describe("Convert Numbers Bigger Than Ten To Words", () => {
  test("converts a number biiger than ten with comma to words", () => {
    expect(numToWords("75")).toBe("seventy-five dollars");
  });
  test("converts a number bigger than ten with comma to words", () => {
    expect(numToWords("81,10")).toBe("eighty-one dollars and 10/100");
  });
});
describe("Invalid Input", () => {
  test("Number with space between", () => {
    expect(numToWords("8 1,10")).toBe("white spaces not allowed");
  });
  test("Number with special characters besides comma", () => {
    expect(numToWords("8-1,10")).toBe("special characters not allowed");
  });
});
describe("Repeated Numbers", () => {
  test("Repeated Numbers without comma", () => {
    expect(numToWords("1111111")).toBe("one million one hundred eleven thousand one hundred eleven dollars");
  });
  test("Repeated Numbers with comma", () => {
    expect(numToWords("1111111,11")).toBe("one million one hundred eleven thousand one hundred eleven dollars and 11/100");
  });
});
describe("Numbers Starting With Zero", () => {
  test("numbers starting with zero", () => {
    expect(numToWords("09,08")).toBe("nine dollars and 08/100");
  });
  test("bigger numbers starting with zero", () => {
    expect(numToWords("0101519,08")).toBe("one hundred one thousand five hundred nineteen dollars and 08/100");
  });
});
