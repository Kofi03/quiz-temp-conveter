import tryConvert from "./index.js";

console.log(tryConvert);

//Answer [Function: tryConvert]
// Remember the three A's Arrange Act and Assert
// first argument is a string, whatever we want
test("100° Celsius coverts to 212 Fahrenheit", () => {
  const temp2Convert = 100;
  const conversion = "toFahrenheit";
  const expected = "212"; // the correct value/answer
  //Act
  const result = tryConvert(temp2Convert, conversion);

  //assert

  expect(result).toBe(expected); // like doing ===
});

test("50°Celsius coverts to 10 Celsius", () => {
  expect(tryConvert(50, "toCelsius")).toBe("10");
});

test("bring back a blank string when given non-numerical input", () => {
  const temp2Convert = "abc";
  const conversion = "toCelsius";

  //Act
  const result = tryConvert(temp2Convert, conversion);

  //assert

  expect(result).toBe("");
});
