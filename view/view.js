const __View = /** @class */ (function () {
  function __View(document) {
    this._document = document;
  }
  const __view = new __View();
  __View.prototype.inView = function (targetEl, containerEl) {
    const rect = targetEl.getBoundingClientRect();
    containerEl = containerEl ? containerEl : window;
    return rect.top >= 0 && rect.bottom <= containerEl.innerHeight;
  }
  return __view;
}());
export { __View };
