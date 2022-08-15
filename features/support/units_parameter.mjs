import { defineParameterType } from "@cucumber/cucumber";

defineParameterType(
  // defineP = method
  {
    // we specify custom parameter
    name: "units", // name is the of the custom parameter type. CAN BE ANYTHING
    regexp: /\s?C|\s?F|\s?Celsius|\s?Fahrenheit/, //REGEXP
    transformer(conversion) {
      return conversion.startsWith("C") ? "toCelsius" : "toFahrenheit";
    },
  }
);
