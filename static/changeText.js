/**
 * Created by linyuhua on 2017/1/14.
 */
define(function (require, exports, module) {
    var init= function() {
        var textContent_test = [
            'yes it works',
            'dev 分支新增内容12222233333'
        ];
        var index = Math.floor(Math.random()*textContent_test.length);
        return textContent_test[index];
    }
    module.exports = {
        init:init
    }
})
