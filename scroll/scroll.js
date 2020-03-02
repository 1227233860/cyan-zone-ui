/**
 * @license CyanZone
 * (c) 2020 Cyan See https://github.com/1227233860/cyan-zone-ui
 * License: MIT
 */
import { __View } from '@cyan-zone/ui/view';

const __Scroll = (function () {

  const BASE_SELECTOR = '.cyan-animate';
  const activedClass = 'scroll-active';

  function __Scroll(document) {
    this._document = document;
  }
  const __scroll = new __Scroll();
  /** 初始化滚动效果 */
  __Scroll.prototype.prepare = function () {
    scrollCallback();
    addScrollListener();
  }
  const addScrollListener = function () {
    document.querySelector('.cyan-animate-scrollable').addEventListener('scroll', scrollCallback);
  }
  function scrollCallback() {
    document.querySelectorAll(BASE_SELECTOR).forEach(target => {
      if (__View.inView(target) && !target.className.includes(activedClass)) {
        target.classList.add(activedClass);
        const animationTypeAttr = target.getAttribute('cyan-type');
        startAnimation(target);
        if (animationTypeAttr) {
          /** 将中划线的动画类型转换为驼峰类型 */
          target.classList.add(`cyan-${animationTypeAttr.replace(/[A-Z]/g, '-$&').toLowerCase()}`);
        }
      }
    });
  }
  const startAnimation = function (el) {
    const delay = el.getAttribute('cyan-delay');
    const duration = el.getAttribute('cyan-duration');
    const timingFunction = el.getAttribute('cyan-transition-timing-function');
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
