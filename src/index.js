let vdt = {
  install: function (vue, opt) {
    let delay = (opt && opt.delay) || 300;
    vue.directive("debounce", {
      bind: function (el, binding) {
        const { even, fn } = getFun(binding, delay);
        el[`on${even}`] = fn;
      },
      update(el, binding) {
        const { even, fn } = getFun(binding, delay);
        el[`on${even}`] = fn;
      },
    });

    vue.directive("throttle", {
      bind: function (el, binding) {
        const { even, fn } = getFun(binding, delay, "throttle");
        el[`on${even}`] = fn;
      },
      update(el, binding) {
        const { even, fn } = getFun(binding, delay, "throttle");
        el[`on${even}`] = fn;
      },
    });
  },
};

function getFun(binding, delay, type) {
  if (!binding.value) return;
  let initialFn;
  let callBack;
  let fn;
  let even;
  let stop = binding.modifiers.stop || null;
  let params = binding.value.params;
  let value = params ? (Array.isArray(params) ? params : [params]) : null;
  let use = binding.value.use || null;
  even = binding.value.even || "click";
  initialFn = isFunction(binding.value) ? binding.value : binding.value.fn;
  type === "throttle"
    ? (callBack = _throttle(initialFn, delay))
    : (callBack = _debounce(initialFn, delay, use));
  fn = value ? callBack.bind(null, ...value) : callBack;
  stop &&
    (fn = function (e) {
      e.stopPropagation();
      value ? callBack.call(this, ...value, e) : callBack.call(this, e);
    });
  return {
    even,
    fn,
  };
}

function isFunction(fn) {
  return Object.prototype.toString.call(fn) === "[object Function]";
}

function _debounce(fn, delay, opt) {
  let timer = setTimeout(() => {}, delay);
  let flag = true;
  return function () {
    if (opt === "before") {
      if (flag) {
        fn.apply(this, arguments);
        flag = false;
      }
      clearTimeout(timer);
      timer = setTimeout(() => {
        flag = true;
      }, delay);
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, arguments);
      }, delay);
    }
  };
}

function _throttle(fn, delay) {
  let flag = true;
  return function () {
    if (!flag) return;
    fn.apply(this, arguments);
    flag = false;
    setTimeout(() => {
      flag = true;
    }, delay);
  };
}

export default vdt;
