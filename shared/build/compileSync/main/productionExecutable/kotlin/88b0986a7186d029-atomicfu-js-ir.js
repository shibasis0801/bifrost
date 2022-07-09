(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module '88b0986a7186d029-atomicfu-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to '88b0986a7186d029-atomicfu-js-ir'.");
    }
    root['88b0986a7186d029-atomicfu-js-ir'] = factory(typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined' ? {} : this['88b0986a7186d029-atomicfu-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var objectMeta = kotlin_kotlin.$_$.v2;
  var classMeta = kotlin_kotlin.$_$.l2;
  var toString = kotlin_kotlin.$_$.n3;
  //endregion
  //region block: pre-declaration
  None.prototype = Object.create(atomicfu$TraceBase.prototype);
  None.prototype.constructor = None;
  //endregion
  function loop(_this__u8e3s4, action) {
    while (true) {
      action(_this__u8e3s4.ae_1);
    }
  }
  function loop_0(_this__u8e3s4, action) {
    while (true) {
      action(_this__u8e3s4.be_1);
    }
  }
  function None() {
    None_instance = this;
    atomicfu$TraceBase.call(this);
  }
  None.$metadata$ = objectMeta('None', undefined, undefined, undefined, undefined, atomicfu$TraceBase.prototype);
  var None_instance;
  function None_getInstance() {
    if (None_instance == null)
      new None();
    return None_instance;
  }
  function atomicfu$TraceBase() {
  }
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$1 = function (event) {
  };
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$2 = function (event1, event2) {
  };
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$3 = function (event1, event2, event3) {
  };
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$4 = function (event1, event2, event3, event4) {
  };
  atomicfu$TraceBase.$metadata$ = classMeta('TraceBase');
  function AtomicRef(value) {
    this.ae_1 = value;
  }
  AtomicRef.prototype.ce = function (_set____db54di) {
    this.ae_1 = _set____db54di;
  };
  AtomicRef.prototype.de = function () {
    return this.ae_1;
  };
  AtomicRef.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.ae_1 === expect))
      return false;
    this.ae_1 = update;
    return true;
  };
  AtomicRef.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.ae_1;
    this.ae_1 = value;
    return oldValue;
  };
  AtomicRef.prototype.toString = function () {
    return toString(this.ae_1);
  };
  AtomicRef.$metadata$ = classMeta('AtomicRef');
  Object.defineProperty(AtomicRef.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicRef.prototype.de,
    set: AtomicRef.prototype.ce
  });
  function atomic$ref$1(initial) {
    return atomic(initial, None_getInstance());
  }
  function AtomicBoolean(value) {
    this.ee_1 = value;
  }
  AtomicBoolean.prototype.fe = function (_set____db54di) {
    this.ee_1 = _set____db54di;
  };
  AtomicBoolean.prototype.de = function () {
    return this.ee_1;
  };
  AtomicBoolean.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.ee_1 === expect))
      return false;
    this.ee_1 = update;
    return true;
  };
  AtomicBoolean.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.ee_1;
    this.ee_1 = value;
    return oldValue;
  };
  AtomicBoolean.prototype.toString = function () {
    return this.ee_1.toString();
  };
  AtomicBoolean.$metadata$ = classMeta('AtomicBoolean');
  Object.defineProperty(AtomicBoolean.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicBoolean.prototype.de,
    set: AtomicBoolean.prototype.fe
  });
  function atomic$boolean$1(initial) {
    return atomic_0(initial, None_getInstance());
  }
  function AtomicInt(value) {
    this.be_1 = value;
  }
  AtomicInt.prototype.ge = function (_set____db54di) {
    this.be_1 = _set____db54di;
  };
  AtomicInt.prototype.de = function () {
    return this.be_1;
  };
  AtomicInt.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.be_1 === expect))
      return false;
    this.be_1 = update;
    return true;
  };
  AtomicInt.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.be_1;
    this.be_1 = value;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$getAndIncrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.be_1;
    tmp0_this.be_1 = tmp1 + 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndDecrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.be_1;
    tmp0_this.be_1 = tmp1 - 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndAdd = function (delta) {
    var oldValue = this.be_1;
    var tmp0_this = this;
    tmp0_this.be_1 = tmp0_this.be_1 + delta | 0;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$addAndGet = function (delta) {
    var tmp0_this = this;
    tmp0_this.be_1 = tmp0_this.be_1 + delta | 0;
    return this.be_1;
  };
  AtomicInt.prototype.atomicfu$incrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this.be_1 = tmp0_this.be_1 + 1 | 0;
    return tmp0_this.be_1;
  };
  AtomicInt.prototype.atomicfu$decrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this.be_1 = tmp0_this.be_1 - 1 | 0;
    return tmp0_this.be_1;
  };
  AtomicInt.prototype.toString = function () {
    return this.be_1.toString();
  };
  AtomicInt.$metadata$ = classMeta('AtomicInt');
  Object.defineProperty(AtomicInt.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicInt.prototype.de,
    set: AtomicInt.prototype.ge
  });
  function atomic$int$1(initial) {
    return atomic_1(initial, None_getInstance());
  }
  function atomic(initial, trace) {
    return new AtomicRef(initial);
  }
  function atomic_0(initial, trace) {
    return new AtomicBoolean(initial);
  }
  function atomic_1(initial, trace) {
    return new AtomicInt(initial);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = atomic$boolean$1;
  _.$_$.b = atomic$ref$1;
  _.$_$.c = atomic$int$1;
  //endregion
  return _;
}));

//# sourceMappingURL=88b0986a7186d029-atomicfu-js-ir.js.map