import { browser } from '@wdio/globals'
import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import DefaultPage from './defaultPage.js';


class CheckoutPage {

    get FirstNameInput () {
        return $('#first-name')
    }

    get LastNameInput () {
        return $('#last-name')
    }

    get PostalCodeInput () {
        return $('#postal-code')
    }

    async fillForm () {
        await this.FirstNameInput.setValue('temp')
        await this.LastNameInput.setValue('temp')
        await this.PostalCodeInput.setValue('temp')
    }
}

export default new CheckoutPage();