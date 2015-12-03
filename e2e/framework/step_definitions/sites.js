module.exports = function() {
    var Sites = require('../../ui/page_objects/sites');

    this.Then(/^the following sites should be visible: (.+)$/, function (name, callback) {
        expect(Sites.getSiteText(name).isDisplayed()).to.eventually.be.true.and.notify(callback);
    });

    this.When(/^"([^"]+)" site is clicked$/, function (pageMadeWithAngular) {
        return Sites.clickOnSite(pageMadeWithAngular);
    });

    this.Then(/^text "([^"]+)" should be shown$/, function (text, callback) {
        expect(element(by.cssContainingText('*',text)).isPresent()).to.eventually.be.true.and.notify(callback);
    });
};

