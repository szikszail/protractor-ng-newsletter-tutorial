Feature: Basic Made with Angular page test
  As a user
  I browse on the Made with Angular page
  So I can find interesting pages made with Angular

  Background:
    Given the Made with Angular page is opened
    Then the Made with Angular logo should be visible

  Scenario: 1. Checking the home page
    Then Communication category should be visible
    And 3 images should be shown for Communication category
    And SEE ALL icon should be hidden for Communication category
    And Productivity category should be visible
    And 4 images should be shown for Productivity category
    And SEE ALL icon should be displayed for Productivity category

  Scenario Outline: 2. Checking a category page
   When Productivity category is clicked
    Then 9 images should be shown for Productivity category
    And Communication category should be hidden
    And the following sites should be visible: <SiteNames>

    Examples:
      |SiteNames    |
      | Solar City  |
      | Join.me     |
      | Google Tips |

    When Back button is clicked
    And SEE ALL icon is clicked for Productivity category
    Then 9 images should be shown for Productivity category

    When Back button is clicked
    And Communication category is clicked
    Then 3 images should be shown for Communication category

  Scenario Outline: 3. Checking a page made with Angular
    When Communication category is clicked
    And "<PageMadeWithAngular>" site is clicked
    Then text "<PageMadeWithAngular>" should be shown
    And text "More sites made with Angular" should be shown

    Examples:
      | PageMadeWithAngular   |
      | Maryland State Police |
      | GroupMe               |
