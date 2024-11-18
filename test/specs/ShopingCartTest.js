import { browser } from '@wdio/globals'
import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import Login from '../pageobjects/login.js';
import HamburgerMenu from '../pageobjects/hamburgerMenu.js';
import Inventory from '../pageobjects/inventory.js'
import InventoryNavigate from '../pageobjects/hamburgerNavigate.js';
import CheckoutPage from '../pageobjects/checkoutPage.js';
import inventoryNavigate from '../pageobjects/inventoryNavigate.js';


describe('Shopping Cart', () => {
    it('Shopping cart function was fully tested', async () => {
        await Login.login('standard_user', 'secret_sauce');
        await Inventory.addAllItems();
        await inventoryNavigate.navigateToCart();
        await browser.pause(3000);
        await Inventory.removeItems();
        await browser.pause(3000);
        await inventoryNavigate.navigateToCheckout();
        await browser.pause(3000);
        await CheckoutPage.fillForm();
        await browser.pause(3000);
        await inventoryNavigate.navToContinue();
        await browser.pause(3000);
        await inventoryNavigate.navToFinish();
    })
})