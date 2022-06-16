Feature: WithSecure Elements Endpoint Protection Page

    As a user 
    I want to verify
    All basic scenarios for EPP Page
    
    Scenario: Navigation & Functional flow of EPP page
      Given I am on the EPP page
      When I accept all cookies
      Then I verify EPP label on the page
      When I click on Computer Edition
      When I click on Mobile Protection
      When I click on Find Out More
      When I click on Product Support