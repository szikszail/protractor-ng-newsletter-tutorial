
module.exports = function () {
var menu = require('../../ui/page_objects/menu');

    this.Given (/^the Made with Angular page is opened$/, function(){
        return browser.get('https://www.madewithangular.com');
    });

    this.Then(/^the Made with Angular logo should be visible$/, function (callback) {
        expect(menu.isLogoDisplayed()).to.eventually.be.true.and.notify(callback);
    });
};
