/**
 * 防抖，利用定时器、闭包
 * @param {*} fn
 * @param {*} delay
 * @returns 返回一个函数（闭包）
 */
function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
