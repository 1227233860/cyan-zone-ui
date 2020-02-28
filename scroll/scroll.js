import { __View } from '@cyan-zone/ui/view';

const __Scroll = (function () {

  const BASE_SELECTOR = '.cyan-animate';
  let activedClass = 'scroll-active';

  function __Scroll(document) {
    this._document = document;
  }
  const __scroll = new __Scroll();
  __Scroll.prototype.prepare = function (el, selector) {
    if (!el) {
      console.error('prepare函数需要提供element');
      return;
    }
    __Scroll.prototype._el = el;
    activedClass = selector ? selector : activedClass;
    // scroll(__Scroll.prototype._el);
    scrollCallback();
    addScrollListener();
  }
  const addScrollListener = function () {
    window.addEventListener('scroll', scrollCallback);
  }
  function scrollCallback() {
    __Scroll.prototype._el.querySelectorAll(BASE_SELECTOR).forEach(target => {
      if (__View.inView(target) && !target.className.includes(activedClass)) {
        target.classList.add(activedClass);
        var animationTypeAttr = target.getAttribute('cyan-type');
        startAnimation(target);
        if (animationTypeAttr) {
          target.classList.add(`cyan-${animationTypeAttr.replace(/[A-Z]/g, '-$&').toLowerCase()}`);
        }
      }
    });
  }
  const startAnimation = function (el) {
    var delay = el.getAttribute('cyan-delay');
    var duration = el.getAttribute('cyan-duration');
    var timingFunction = el.getAttribute('cyan-transition-timing-function');
    el.style.animationDelay = delay ? delay : '.1s';
    el.style.animationDuration = duration ? duration : '.3s';
    el.style.animationTimingFunction = timingFunction ? timingFunction : 'ease';
    setTimeout(() => {
      el.style.visibility = 'visible';
    }, delay ? parseFloat(delay) * 1000 : 100);
  }
  return __scroll;
}());
export { __Scroll };
