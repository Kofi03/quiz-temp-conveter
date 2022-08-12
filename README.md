# Quiz Temperature converter QA Testing Example

# User stories and Scenario Outline

The 3 amigos user meeting is outlined in this instance specfic user stories and scenarios would be formulated.

Gherkin ( given when and then when)

```gherkin
Feature: Convert Temperatures

    We convert temperatures between Celsius and Fahrenheit.

  Scenario: Convert between Celsius and Fahrenheit
    Given I have a temperature of 100° Celsius
    When I convert it to degrees Fahrenheit
    Then I see 212° Fahrenheit

  Scenario: Convert between Fahrenheit and Celsius
    Given I have a temperature of 50° Fahrenheit
    When I convert it to degrees Celsius
    Then I see 10° Celsius

  Scenario: Convert to Celsius with non-numerical input
    Given I have non-numerical input
    When I convert it to degrees Celsius
    Then I "see" a blank string

  Scenario: Convert to Fahrenheit with non-numerical input
    Given I have non-numerical input
    When I convert it to degrees Fahrenheit
    Then I "see" a blank string
```
