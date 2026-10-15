import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import testData from '../../data/testData.json';

test('UI_002: standard user can add a product to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  await loginPage.open();
  await loginPage.login(testData.users.standard.username, testData.users.standard.password);
  await loginPage.verifyLoggedIn();
  await inventoryPage.addProductToCart(testData.product.name);
  await inventoryPage.openCart();
  await inventoryPage.verifyProductInCart(testData.product.name);
});
