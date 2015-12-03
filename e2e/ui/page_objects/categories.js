var Categories = function() {
    this.getCategoryLink = function(name){
        return this.getCategory(name).element(by.tagName('a'));
    };

    this.getCategory = function(name){
        return element(by.cssContainingText('h2.title', name));
    };

    this.getSeeAllLink = function(name){
        return this.getCategory(name).element(by.xpath('../div/p/a'));
    };

    this.isCategoryVisibile = function(name){
        return this.getCategory(name).isPresent();
    };

    this.clickCategory = function(name){
        return this.getCategoryLink(name).click();
    };

    this.isSeeAllVisibile = function(name){
        return this.getSeeAllLink(name).isPresent();
    };

    this.clickSeeAll = function(name){
        return this.getSeeAllLink(name).click();
    };

    this.getImageCount = function(name){
        return this.getCategory(name).all(by.xpath('../..//div[contains(@class,"card")]/a/img')).count();
    };

};
module.exports = new Categories();
