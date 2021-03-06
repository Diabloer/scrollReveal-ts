"use strict";
/// <reference path="./../interface/interface.ts" />
/// <reference path="./../scrollReveal-core/scrollReveal.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ScrollRevealPlugin = /** @class */ (function (_super) {
    __extends(ScrollRevealPlugin, _super);
    function ScrollRevealPlugin(pluginFunObject, options) {
        var _this = _super.call(this) || this;
        _this.defaultOptions = {
            //  if 0, the element is considered in the viewport as soon as it enters
            //  如果为0，则在该元素进入时立即在视窗中考虑
            //  if 1, the element is considered in the viewport when it's fully visible
            //  如果是1，则在元素完全可见时在视口中考虑它
            viewportFactor: 0.33,
            // if false, animations occur only once
            // 如果为false，则只会出现一次动画
            // if true, animations occur each time an element enters the viewport
            // 如果为真，则每当一个元素进入视窗时，动画就会出现
            reset: false,
            // if true, scrollReveal.init() is automaticaly called upon instantiation
            // 如果为真，则在实例化时自动调用scrollReveal.init()
            init: true,
            elem: window.document.documentElement,
            queryCondition: "data-scroll-reveal-plugin"
        };
        _this.options = {};
        _this.coreInstance = _super.prototype.getInstance.call(_this);
        _this.options = options ? _this.coreInstance.extend(_this.defaultOptions, options) : _this.defaultOptions;
        _this.pluginFunObject = pluginFunObject;
        _super.prototype.setCore.call(_this);
        return _this;
    }
    ScrollRevealPlugin.prototype.getOptions = function () {
        return this.options;
    };
    ScrollRevealPlugin.prototype.getPluginFunObject = function (el) {
        return this.pluginFunObject;
    };
    return ScrollRevealPlugin;
}(ScrollReveal));
