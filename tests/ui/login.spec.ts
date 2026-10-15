import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import testData from '../../data/testData.json';

test('UI_001: standard user can log in', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login(testData.users.standard.username, testData.users.standard.password);
  await loginPage.verifyLoggedIn();
});
