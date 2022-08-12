import { defineParameterType } from "@cucumber/cucumber";

defineParameterType(
  // defineP = method
  {
    // we specify custom parameter
    name: "units",
    regexp: /C|F|Celsius|Fahrenheit/,
    transformer(conversion) {
      return conversion.startsWith("C") ? "toCelsius" : "toFahrenheit";
    },
  }
);
