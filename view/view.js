/**
 * @license CyanZone
 * (c) 2020 Cyan See https://github.com/1227233860/cyan-zone-ui
 * License: MIT
 */
const __View = /** @class */ (function () {
  function __View(document) {
    this._document = document;
  }
  const __view = new __View();
  /**
   * 判断指定节点是否显示在可视区域
   * @param targetEl 目标节点
   * @param containerEl 容器节点
   */
  __View.prototype.inView = function (targetEl, containerEl) {
    const rect = targetEl.getBoundingClientRect();
    containerEl = containerEl ? containerEl : window;
    return rect.top >= 0 && rect.bottom <= containerEl.innerHeight;
  }
  /**
   * 判断指定节点是否溢出
   * @param el 目标节点
   */
  __View.prototype.isOverflow = function(el) {
    if (!el) {
      console.error('isOverflow函数需要提供正确的element');
      return false;
    }
    return el.scrollHeight > el.clientHeight;
  }
  return __view;
}());
export { __View };
