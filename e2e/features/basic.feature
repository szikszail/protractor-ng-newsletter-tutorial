Feature: Basic Made with Angular page test
  As a user
  I browse on the Made with Angular page
  So I can find interesting pages made with Angular

  Scenario: 1. Checking the home page
    Given the Made with Angular page is opened
    Then the Made with Angular logo should be visible
    And "<Category>" should be visible
    And "<ImageNumberOnHomePage>" images should be shown
    And SEE ALL icon should be (displayed|hidden)

  Scenario: 2. Checking a category page
    When "<Category>" name is clicked on
    Then "<ImageNumber>" images should be shown

    When SEE ALL is clicked on
    Then "<ImageNumber>" images should be shown

  Scenario: 3. Checking a page made with Angular
    When "<PageMadeWithAngular>" is clicked on
    Then "<PageMadeWithAngular>" is shown
    And More sites made with Angular is shown


  Example:
  | Category      | ImageNumberOnHomePage | ImageNumber | PageMadeWithAngular   |
  | Communication | 3                     | 3           | Maryland State Police |
  | Productivity  | 4                     | 9           | Solar City            |