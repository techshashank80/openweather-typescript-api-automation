Feature: Get calls for weather report

  Scenario Outline: Scenario Outline name: Verify name attribute corresponds to the entered city name
    Given I call GET on "<Param>"
    Then I expect status code as "<Status>"
    Then I verify the response to be "<City>"

  Examples:
      | Param | Status| City|
      |weather?q=London|200|London|


  Scenario Outline: Verify lat & lon attribute corresponds to the entered lat and lon 
     Given I call GET on "<Param>"
      Then I expect status code as "<Status>"
      Then I verify the lat attrbute response to be "<Lat>"
      Then I verify the lon attrbute response to be "<Lon>"

Examples:
    | Param  | Lat| Lon|Status|
    | weather?lat=35.02&lon=139.01| 35.02 | 139.01 |200|


    Scenario Outline: Verify city name by ZipCode
    Given I call GET on "<Param>"
    Then I expect status code as "<Status>"
    Then I verify the response to be "<City>"

  Examples:
      | Param | Status| City|ZipCountryCode|
      |weather?zip=94040,us|200|Mountain View|94040,us|



