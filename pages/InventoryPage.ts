import { expect, type Page } from '@playwright/test';

export class InventoryPage {
  constructor(private readonly page: Page) {}

  async addProductToCart(productName: string): Promise<void> {
    const product = this.page.locator('[data-test="inventory-item"]').filter({ hasText: productName });
    await expect(product).toBeVisible();
    await product.getByRole('button', { name: 'Add to cart' }).click();
  }

  async openCart(): Promise<void> {
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }

  async verifyProductInCart(productName: string): Promise<void> {
    await expect(this.page).toHaveURL(/cart\.html/);
    await expect(this.page.locator('[data-test="inventory-item-name"]')).toHaveText(productName);
  }
}
