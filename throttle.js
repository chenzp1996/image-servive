/**
 * 节流函数,利用定时器、闭包
 * @param fn
 * @param delay
 */
function throttleByTimer(fn, delay) {
  let timer = null;

  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        clearTimeout(timer);
        fn.apply(this, args);
      }, delay);
    }
  };
}

/**
 * 节流函数,计算时间差、闭包
 * @param fn
 * @param delay
 */
function throttleByDate(fn, delay) {
  let last = 0;

  return function (...args) {
    let now = Date.now();
    if (now - last > delay) {
      last = now;

      fn.apply(this, args);
    }
  };
}
