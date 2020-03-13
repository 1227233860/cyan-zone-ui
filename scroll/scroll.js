/**
 * @license CyanZone
 * (c) 2020 Cyan See https://github.com/1227233860/cyan-zone-ui
 * License: MIT
 */
import { __View } from '@cyan-zone/ui';

const __Scroll = (function () {
  function __Scroll(document) {
    this._document = document;
  }
  const __scroll = new __Scroll();
  const startAnimation = function (immediate) {
    __Scroll.prototype.target.forEach(el => {
      const inView = __View(el, __Scroll.prototype.container);
      const isActivated = el.classList.contains('cyan-activated');
      if (inView && !isActivated) {
        const delay = immediate ? 100 : el.getAttribute('cyan-delay');
        const duration = el.getAttribute('cyan-duration') ? el.getAttribute('cyan-duration') : 500;
        const timing = el.getAttribute('cyan-functions') ? el.getAttribute('cyan-functions') : 'ease-in';
        const name = el.getAttribute('cyan-name') ? el.getAttribute('cyan-name') : 'opacity';
        el.style.animationTimingFunction = timing;
        el.style.animationDuration = `${duration}ms`;
        el.style.animationDelay = `${delay}ms`;
        el.style.animationName = name;
        setTimeout(() => {
          el.style.visibility = 'visible';
          el.classList.add('cyan-activated');
        }, delay);
      }
    });
  }
  __Scroll.prototype.prepare = function (selector) {
    if (!contain) {
      throw ReferenceError('必须传入父级选择器');
    }
    const parentEl = document.querySelector(selector);
    __Scroll.prototype.container = parentEl;
    __Scroll.prototype.target = parentEl.querySelectorAll('.cyan-animate');
    startAnimation();
    document.querySelector(container).onscroll =
      window.onresize = () => startAnimation(true);
    return __Scroll;
  }
  return __scroll;
})();
exports = { __Scroll };

