/**
 * Created by linyuhua on 2017/1/14.
 */
define(function (require, exports, module) {
    var init= function() {
        var master = ['master新增']
        var textContent = [
            'yes it works',
            'seajs demo',
            'it is a lucky day',
            'wish this help you',
            'thank you for reading'
            'master新增内容'
        ];
        var index = Math.floor(Math.random()*textContent.length);
        return textContent[index];
    }
    module.exports = {
        init:init
    }
})