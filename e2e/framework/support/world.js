/**
 * Created by Dora_Vereb on 12/1/2015.
 */
module.exports = function(){
    require('cucumber').Util.Colors(true);

    var chai = require('chai'),
        chaiAsPromised = require('chai-as-promised');
    chai.use(chaiAsPromised);
    global.expect = chai.expect;
};