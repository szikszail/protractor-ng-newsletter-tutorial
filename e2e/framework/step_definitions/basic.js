
module.exports = function () {
var menu = require('../../ui/page_objects/menu');

    this.Given (/^the Made with Angular page is opened$/, function(){
        return browser.get('https://www.madewithangular.com');
    });

    // ToDo: amend back, forward and refresh too
    this.When(/^Back button is clicked$/, function () {
        return browser.navigate().back();
    });

    this.Then(/^the Made with Angular logo should be visible$/, function (callback) {
        expect(menu.isLogoDisplayed()).to.eventually.be.true.and.notify(callback);
    });


};
