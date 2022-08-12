import { tryConvert } from "./index.js";

//console.log(stuff);

//Answer [Function: tryConvert]

test("100° Celsius coverts to 212", () => {
  expect(tryConvert(100)).toBe(212);
});
