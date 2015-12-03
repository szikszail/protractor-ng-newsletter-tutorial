 module.exports = function(){
     var Categories = require('../../ui/page_objects/categories');

     this.When(/^(.+) category is clicked$/, function (name) {
         return Categories.clickCategory(name);
     });

     this.Then(/^(.+) category should be (visible|hidden)$/, function (name, visibility, callback) {
         expect(Categories.isCategoryVisibile(name)).to.eventually.equal(visibility === "visible").and.notify(callback);
     });

     this.Then(/^(\d+) images should be shown for (.+) category$/, function (image, name, callback) {
         expect(Categories.getImageCount(name)).to.eventually.equal(+image).and.notify(callback);
     });

     this.When(/^SEE ALL icon is clicked for (.+) category$/, function (name) {
         return Categories.clickSeeAll(name);
     });

     this.Then(/^SEE ALL icon should be (displayed|hidden) for (.+) category$/, function (visibility, name, callback) {
         expect(Categories.isSeeAllVisibile(name)).to.eventually.equal(visibility == "displayed").and.notify(callback);
     });
 };
