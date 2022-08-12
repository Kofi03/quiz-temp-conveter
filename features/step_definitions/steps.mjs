import { Given, When, Then } from "@cucumber/cucumber";
import tryConvert from "../../app/index.js";
import { expect } from "expect";
//TODO: implement testing for blank screen
Given("I have a temperature of {float}° {units}", function (temp2Convert, _) {
  // 'this' will not work with arrow function.
  this.temp2Convert = temp2Convert;
});

When("I convert it to degrees {units}", function (units) {
  // units = toc oR toFahrenheit

  this.convertedTemperature = tryConvert(this.temp2Convert, units);
});

Then("I see {float}° {units}", function (expected, _) {
  const expectHelper = () => {
    expect(this.convertedTemperature).toBe(expected.toString());
  };
});

// Given('I have a temperature of {float}° Celsius', function (float) {
// Write code here that turns the phrase above into concrete actions
