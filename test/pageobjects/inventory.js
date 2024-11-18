import { browser } from '@wdio/globals'
import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import DefaultPage from './defaultPage.js';
import CheckoutPage from './checkoutPage.js';
import navigate from './hamburgerNavigate.js';


class Inventory extends DefaultPage {

    get ShopBackpack () {
        return $('#add-to-cart-sauce-labs-backpack')
    }

    get ShopBikeLight () {
        return $('#add-to-cart-sauce-labs-bike-light')
    }

    get ShopBoltTShirt () {
        return $('#add-to-cart-sauce-labs-bolt-t-shirt')
    }

    get ShopFleeceJacket () {
        return $('#add-to-cart-sauce-labs-fleece-jacket')
    }

    get ShopOnesie () {
        return $('#add-to-cart-sauce-labs-onesie')
    }

    get ShopRedTShirt () {
        return $('button[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')
    }

    get RemoveBikeLight () {
        return $('#remove-sauce-labs-bike-light')
    }

    get RemoveOnesie () {
        return $('#remove-sauce-labs-onesie')
    }

    get RemoveBackpack () {
        return $('#remove-sauce-labs-backpack')
    }

    get RemoveRedTShirt () {
        return $('button[data-test="remove-test.allthethings()-t-shirt-(red)"]')
    }


    async addAllItems() {
        await this.ShopBikeLight.click();
        await this.ShopBoltTShirt.click();
        await this.ShopFleeceJacket.click();
        await this.ShopOnesie.click();
        await this.ShopRedTShirt.click();
    }

    async removeItems() {
        await this.RemoveBikeLight.click();
        await this.RemoveOnesie.click();
        await this.RemoveBackpack.click();
        await this.RemoveRedTShirt.click();
    }

}

export default new Inventory();