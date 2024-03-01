import {test, expect} from '@playwright/test';
import {SampleTestPageObject, RadioButtonsLabel} from './sampleTest.po';
import jsonData from '../kb-test/testData.json';

test.describe('Test about getting data from json file', () => {
    test('Should get all data from json and insert them into the test page inputs and check that they are not empty', async ({ page }) => {
      const sampleTestPO = new SampleTestPageObject(page);
      
      // Go to page url
      await page.goto(sampleTestPO.samplePageUrl);

      // Accept cookies if cookie bar is visible
      await sampleTestPO.acceptCookieBar();

      // Insert json data into the test page inputs and the checkbox below 
      await sampleTestPO.insertUserJsonDataIntoInputs(jsonData);
      
      // Check one of "Education" radio buttons by it's name
      await sampleTestPO.checkRadioButtonByName(RadioButtonsLabel.PostGraduate);

      // Check that correct json data were passed into the test page inputs and the checkbox
      await sampleTestPO.areAllInputsFilledWithCorrectJsonData(jsonData);

      // Get the longest string from custom array and insert it into the comment text area
      const longestValue = sampleTestPO.getLongestStringFromArray(sampleTestPO.testData.arrayOfStrings);
      await sampleTestPO.commentTextArea.fill(longestValue);

      // Check that comment text area is not empty as well
      await expect(sampleTestPO.commentTextArea).not.toBeEmpty();
    });
});