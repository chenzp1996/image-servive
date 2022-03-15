/**
 * 手写promise
 * 关键点：
 * - 状态 status：pending、fulfilled、rejected
 * - 状态修改回调函数：fulfilledCallbacks、rejectedCallbacks
 * - then方法
 */
class MyPromise {
  construcotr(executor) {
    this.status = "pendding";
    this.value = null;
    this.fulfilledCallbacks = [];
    this.rejectedCallbacks = [];
    let that = this;

    function resolve(value) {
      if (this.status === "pending") {
        this.status = "resolved";
        this.value = value;
        that.fulfilledCallbacks.forEach((myFn) => {
          myFn();
        });
      }
    }

    function reject(value) {
      if (this.status === "pendding") {
        this.status = "rejectd";
        this.value = value;
        that.rejectedCallbacks.forEach((myFn) => {
          myFn();
        });
      }
    }

    try {
      executor(() => {
        resolve(this.value);
      });
    } catch (e) {
      reject(e);
    }
  }

  then(onResolved, onRejected) {
    if (this.status === "pending") {
      this.fulfilledCallbacks.push(() => {
        onResolved(this.value);
      });
      this.rejectedCallbacks.push(() => {
        onRejected(this.value);
      });
    }
    if (this.status === "resolved") {
      onResolved();
    }
    if (this.status === "rejected") {
      onRejected();
    }
  }
}
