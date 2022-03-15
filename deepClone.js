/**
 * 深拷贝
 * @param {*} obj 需要拷贝的对象
 * @param {*} cache 用来处理死循环调用
 * @returns
 */
function deepClone(obj, cache = new WeakMap()) {
  //基础类型直接返回
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  // 防止循环引用，程序进入死循环
  if (cache.get(obj)) return cache.get(obj);

  //日期类型
  if (obj instanceof Date) {
    return new Date(obj);
  }
  //正则类型
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  // 找到所属原型上的constructor，所属原型上的constructor指向当前对象的构造函数
  let cloneObj = new obj.contructor();
  // 缓存拷贝的对象，用于处理循环引用的情况
  cache.set(obj, cloneObj);

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(object[key], cache);
    }
  }

  return cloneObj;
}
