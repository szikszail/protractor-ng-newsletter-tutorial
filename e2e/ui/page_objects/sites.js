var Sites = function () {

    this.getSiteLink = function(name){
        return element(by.cssContainingText('div.card > a', name));
    };

    this.getSiteText = function(name){
        return element(by.cssContainingText('div.card > a > h3', name));
    };

    this.clickOnSite = function(siteName){
        return this.getSiteLink(siteName).click();
    };
};
module.exports = new Sites();