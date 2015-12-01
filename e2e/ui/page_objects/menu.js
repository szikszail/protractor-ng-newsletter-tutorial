var Menu = function() {
    this.isLogoDisplayed = function(){
        return element(by.css('div.header > div > a > img')).isDisplayed();
    };
};
module.exports = new Menu();