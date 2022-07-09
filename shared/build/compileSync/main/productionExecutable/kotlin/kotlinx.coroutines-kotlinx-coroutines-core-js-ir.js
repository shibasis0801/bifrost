(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    root['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] = factory(typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined' ? {} : this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var THROW_CCE = kotlin_kotlin.$_$.g3;
  var isObject = kotlin_kotlin.$_$.t2;
  var Unit_getInstance = kotlin_kotlin.$_$.b1;
  var plus = kotlin_kotlin.$_$.c2;
  var get = kotlin_kotlin.$_$.y1;
  var fold = kotlin_kotlin.$_$.x1;
  var minusKey = kotlin_kotlin.$_$.z1;
  var Continuation = kotlin_kotlin.$_$.w1;
  var classMeta = kotlin_kotlin.$_$.l2;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.z;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.p1;
  var interfaceMeta = kotlin_kotlin.$_$.r2;
  var isInterface = kotlin_kotlin.$_$.s2;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p;
  var toString = kotlin_kotlin.$_$.n3;
  var toString_0 = kotlin_kotlin.$_$.w2;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.o1;
  var objectMeta = kotlin_kotlin.$_$.v2;
  var hashCode = kotlin_kotlin.$_$.q2;
  var equals = kotlin_kotlin.$_$.m2;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.i;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.w;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.x;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.s1;
  var Key_getInstance = kotlin_kotlin.$_$.y;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.r1;
  var get_0 = kotlin_kotlin.$_$.t1;
  var minusKey_0 = kotlin_kotlin.$_$.u1;
  var ContinuationInterceptor = kotlin_kotlin.$_$.v1;
  var Key = kotlin_kotlin.$_$.b2;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.t;
  var Enum = kotlin_kotlin.$_$.b3;
  var startCoroutine = kotlin_kotlin.$_$.f2;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.l3;
  var Long = kotlin_kotlin.$_$.e3;
  var RuntimeException = kotlin_kotlin.$_$.f3;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.s;
  var captureStack = kotlin_kotlin.$_$.k2;
  var Error_0 = kotlin_kotlin.$_$.c3;
  var Error_init_$Init$ = kotlin_kotlin.$_$.l;
  var Element = kotlin_kotlin.$_$.a2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.k;
  var anyToString = kotlin_kotlin.$_$.h2;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.m3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d;
  var CancellationException = kotlin_kotlin.$_$.n1;
  var ArrayList = kotlin_kotlin.$_$.c1;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.q;
  var UnsupportedOperationException = kotlin_kotlin.$_$.h3;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.u;
  var fillArrayVal = kotlin_kotlin.$_$.n2;
  var arrayCopy = kotlin_kotlin.$_$.f1;
  var Companion_getInstance = kotlin_kotlin.$_$.a1;
  var createFailure = kotlin_kotlin.$_$.i3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.v;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.n;
  var ensureNotNull = kotlin_kotlin.$_$.j3;
  var intercepted = kotlin_kotlin.$_$.q1;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.j;
  var getStringHashCode = kotlin_kotlin.$_$.p2;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.g;
  //endregion
  //region block: pre-declaration
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancelling = false;
    if (!(($mask0 & 2) === 0))
      invokeImmediately = true;
    return $handler == null ? this.of(onCancelling, invokeImmediately, handler) : $handler(onCancelling, invokeImmediately, handler);
  }
  AbstractCoroutine.prototype = Object.create(JobSupport.prototype);
  AbstractCoroutine.prototype.constructor = AbstractCoroutine;
  StandaloneCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  StandaloneCoroutine.prototype.constructor = StandaloneCoroutine;
  LazyStandaloneCoroutine.prototype = Object.create(StandaloneCoroutine.prototype);
  LazyStandaloneCoroutine.prototype.constructor = LazyStandaloneCoroutine;
  DispatchedTask.prototype = Object.create(SchedulerTask.prototype);
  DispatchedTask.prototype.constructor = DispatchedTask;
  CancellableContinuationImpl.prototype = Object.create(DispatchedTask.prototype);
  CancellableContinuationImpl.prototype.constructor = CancellableContinuationImpl;
  CancelHandler.prototype = Object.create(CancelHandlerBase.prototype);
  CancelHandler.prototype.constructor = CancelHandler;
  BeforeResumeCancelHandler.prototype = Object.create(CancelHandler.prototype);
  BeforeResumeCancelHandler.prototype.constructor = BeforeResumeCancelHandler;
  CancelledContinuation.prototype = Object.create(CompletedExceptionally.prototype);
  CancelledContinuation.prototype.constructor = CancelledContinuation;
  Key_0.prototype = Object.create(AbstractCoroutineContextKey.prototype);
  Key_0.prototype.constructor = Key_0;
  CoroutineDispatcher.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CoroutineDispatcher.prototype.constructor = CoroutineDispatcher;
  CoroutineStart.prototype = Object.create(Enum.prototype);
  CoroutineStart.prototype.constructor = CoroutineStart;
  EventLoop.prototype = Object.create(CoroutineDispatcher.prototype);
  EventLoop.prototype.constructor = EventLoop;
  CompletionHandlerException.prototype = Object.create(RuntimeException.prototype);
  CompletionHandlerException.prototype.constructor = CompletionHandlerException;
  CoroutinesInternalError.prototype = Object.create(Error_0.prototype);
  CoroutinesInternalError.prototype.constructor = CoroutinesInternalError;
  LinkedListHead.prototype = Object.create(LinkedListNode.prototype);
  LinkedListHead.prototype.constructor = LinkedListHead;
  NodeList.prototype = Object.create(LinkedListHead.prototype);
  NodeList.prototype.constructor = NodeList;
  CompletionHandlerBase.prototype = Object.create(LinkedListNode.prototype);
  CompletionHandlerBase.prototype.constructor = CompletionHandlerBase;
  JobNode.prototype = Object.create(CompletionHandlerBase.prototype);
  JobNode.prototype.constructor = JobNode;
  ChildCompletion.prototype = Object.create(JobNode.prototype);
  ChildCompletion.prototype.constructor = ChildCompletion;
  JobCancellingNode.prototype = Object.create(JobNode.prototype);
  JobCancellingNode.prototype.constructor = JobCancellingNode;
  ChildHandleNode.prototype = Object.create(JobCancellingNode.prototype);
  ChildHandleNode.prototype.constructor = ChildHandleNode;
  InvokeOnCancelling.prototype = Object.create(JobCancellingNode.prototype);
  InvokeOnCancelling.prototype.constructor = InvokeOnCancelling;
  InvokeOnCompletion.prototype = Object.create(JobNode.prototype);
  InvokeOnCompletion.prototype.constructor = InvokeOnCompletion;
  ChildContinuation.prototype = Object.create(JobCancellingNode.prototype);
  ChildContinuation.prototype.constructor = ChildContinuation;
  MainCoroutineDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  MainCoroutineDispatcher.prototype.constructor = MainCoroutineDispatcher;
  TimeoutCancellationException.prototype = Object.create(CancellationException.prototype);
  TimeoutCancellationException.prototype.constructor = TimeoutCancellationException;
  Unconfined.prototype = Object.create(CoroutineDispatcher.prototype);
  Unconfined.prototype.constructor = Unconfined;
  DispatchedContinuation.prototype = Object.create(DispatchedTask.prototype);
  DispatchedContinuation.prototype.constructor = DispatchedContinuation;
  JsMainDispatcher.prototype = Object.create(MainCoroutineDispatcher.prototype);
  JsMainDispatcher.prototype.constructor = JsMainDispatcher;
  UnconfinedEventLoop.prototype = Object.create(EventLoop.prototype);
  UnconfinedEventLoop.prototype.constructor = UnconfinedEventLoop;
  JobCancellationException.prototype = Object.create(CancellationException.prototype);
  JobCancellationException.prototype.constructor = JobCancellationException;
  SetTimeoutBasedDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  SetTimeoutBasedDispatcher.prototype.constructor = SetTimeoutBasedDispatcher;
  NodeDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  NodeDispatcher.prototype.constructor = NodeDispatcher;
  SetTimeoutDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  SetTimeoutDispatcher.prototype.constructor = SetTimeoutDispatcher;
  MessageQueue.prototype = Object.create(ArrayQueue.prototype);
  MessageQueue.prototype.constructor = MessageQueue;
  ScheduledMessageQueue.prototype = Object.create(MessageQueue.prototype);
  ScheduledMessageQueue.prototype.constructor = ScheduledMessageQueue;
  WindowDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  WindowDispatcher.prototype.constructor = WindowDispatcher;
  WindowMessageQueue.prototype = Object.create(MessageQueue.prototype);
  WindowMessageQueue.prototype.constructor = WindowMessageQueue;
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob)
      this.je(parentContext.b2(Key_getInstance_2()));
    this.me_1 = parentContext.i2(this);
  }
  AbstractCoroutine.prototype.x1 = function () {
    return this.me_1;
  };
  AbstractCoroutine.prototype.ne = function () {
    return this.me_1;
  };
  AbstractCoroutine.prototype.oe = function () {
    return JobSupport.prototype.oe.call(this);
  };
  AbstractCoroutine.prototype.pe = function (value) {
  };
  AbstractCoroutine.prototype.qe = function (cause, handled) {
  };
  AbstractCoroutine.prototype.re = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  AbstractCoroutine.prototype.se = function (state) {
    if (state instanceof CompletedExceptionally)
      this.qe(state.te_1, state.ve());
    else {
      this.pe((state == null ? true : isObject(state)) ? state : THROW_CCE());
    }
  };
  AbstractCoroutine.prototype.y1 = function (result) {
    var state = this.we(toState$default(result, null, 1, null));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_getInstance();
    this.xe(state);
  };
  AbstractCoroutine.prototype.xe = function (state) {
    return this.ye(state);
  };
  AbstractCoroutine.prototype.ze = function (exception) {
    handleCoroutineException(this.me_1, exception);
  };
  AbstractCoroutine.prototype.af = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.me_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return JobSupport.prototype.af.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + JobSupport.prototype.af.call(this);
  };
  AbstractCoroutine.prototype.bf = function (start, receiver, block) {
    start.ef(block, receiver, this);
  };
  AbstractCoroutine.$metadata$ = classMeta('AbstractCoroutine', [Job, Continuation, CoroutineScope], undefined, undefined, undefined, JobSupport.prototype);
  function launch(_this__u8e3s4, context, start, block) {
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.dg() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.bf(start, coroutine, block);
    return coroutine;
  }
  function launch$default(_this__u8e3s4, context, start, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    return launch(_this__u8e3s4, context, start, block);
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  StandaloneCoroutine.prototype.bg = function (exception) {
    handleCoroutineException(this.x1(), exception);
    return true;
  };
  StandaloneCoroutine.$metadata$ = classMeta('StandaloneCoroutine', undefined, undefined, undefined, undefined, AbstractCoroutine.prototype);
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.kg_1 = createCoroutineUnintercepted(block, this, this);
  }
  LazyStandaloneCoroutine.prototype.kf = function () {
    startCoroutineCancellable_0(this.kg_1, this);
  };
  LazyStandaloneCoroutine.$metadata$ = classMeta('LazyStandaloneCoroutine', undefined, undefined, undefined, undefined, StandaloneCoroutine.prototype);
  function CancellableContinuation() {
  }
  CancellableContinuation.$metadata$ = interfaceMeta('CancellableContinuation', [Continuation]);
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.hf();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.zg())) {
      var tmp_0 = $this.mg_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).xg();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.mg_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.ah(cause);
  }
  function trySuspend($this) {
    {
      var tmp0_loop = $this.og_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.be_1;
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          switch (tmp0_subject) {
            case 0:
              if ($this.og_1.atomicfu$compareAndSet(0, 1))
                return true;
              break;
            case 2:
              return false;
            default:
              throw IllegalStateException_init_$Create$('Already suspended');
          }
        }
      }
    }
  }
  function tryResume($this) {
    {
      var tmp0_loop = $this.og_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.be_1;
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          switch (tmp0_subject) {
            case 0:
              if ($this.og_1.atomicfu$compareAndSet(0, 2))
                return true;
              break;
            case 1:
              return false;
            default:
              throw IllegalStateException_init_$Create$('Already resumed');
          }
        }
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.x1().b2(Key_getInstance_2());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp$ret$1;
    {
      var tmp0__get_asHandler__gq3rkj = new ChildContinuation($this);
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    var handle = parent.pf(true, false, tmp$ret$1, 2, null);
    $this.qg_1 = handle;
    return handle;
  }
  function releaseClaimedReusableContinuation($this) {
    var tmp = $this.mg_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bh($this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    $this.ch();
    $this.dh(cancellationCause);
  }
  function dispatchResume($this, mode) {
    if (tryResume($this))
      return Unit_getInstance();
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      {
      }
      {
      }
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) ? idempotent == null : false) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          var tmp_2;
          if (state instanceof CancelHandler) {
            tmp_2 = !(state instanceof BeforeResumeCancelHandler);
          } else {
            tmp_2 = false;
          }
          tmp_1 = tmp_2;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          var tmp_3 = state instanceof CancelHandler ? state : null;
          tmp = CompletedContinuation_init_$Create$(proposedUpdate, tmp_3, onCancellation, idempotent, null, 16, null);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    {
      var tmp0_loop = $this.pg_1;
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp1__anonymous__uwfjfc = tmp0_loop.ae_1;
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
            var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, resumeMode, onCancellation, null);
            if (!$this.pg_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }
            detachChildIfNonResuable($this);
            dispatchResume($this, resumeMode);
            return Unit_getInstance();
          } else {
            if (tmp0_subject instanceof CancelledContinuation) {
              if (tmp1__anonymous__uwfjfc.ih()) {
                var tmp1_safe_receiver = onCancellation;
                if (tmp1_safe_receiver == null)
                  null;
                else {
                  var tmp$ret$1;
                  {
                    {
                    }
                    tmp$ret$1 = $this.eh(tmp1_safe_receiver, tmp1__anonymous__uwfjfc.z2());
                  }
                }
                return Unit_getInstance();
              }
            }
          }
          alreadyResumedError($this, proposedUpdate);
        }
      }
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      onCancellation = null;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function alreadyResumedError($this, proposedUpdate) {
    {
      var tmp0_error = 'Already resumed, but proposed with update ' + toString(proposedUpdate);
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    }
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this))
      $this.ch();
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.mg_1 = delegate;
    {
    }
    this.ng_1 = this.mg_1.x1();
    this.og_1 = atomic$int$1(0);
    this.pg_1 = atomic$ref$1(Active_getInstance());
    this.qg_1 = null;
  }
  CancellableContinuationImpl.prototype.jh = function () {
    return this.mg_1;
  };
  CancellableContinuationImpl.prototype.x1 = function () {
    return this.ng_1;
  };
  CancellableContinuationImpl.prototype.hf = function () {
    return this.pg_1.ae_1;
  };
  CancellableContinuationImpl.prototype.if = function () {
    var tmp = this.hf();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  CancellableContinuationImpl.prototype.kh = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.if()) {
      handle.lh();
      this.qg_1 = NonDisposableHandle_getInstance();
    }
  };
  CancellableContinuationImpl.prototype.mh = function () {
    return this.hf();
  };
  CancellableContinuationImpl.prototype.nh = function (takenState, cause) {
    var tmp0_loop = this.pg_1;
    while (true) {
      {
        var tmp1__anonymous__uwfjfc = tmp0_loop.ae_1;
        var tmp0_subject = tmp1__anonymous__uwfjfc;
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
          throw IllegalStateException_init_$Create$('Not completed');
        } else {
          if (tmp0_subject instanceof CompletedExceptionally)
            return Unit_getInstance();
          else {
            if (tmp0_subject instanceof CompletedContinuation) {
              {
                var tmp0_check = !tmp1__anonymous__uwfjfc.th();
                {
                }
                if (!tmp0_check) {
                  var tmp$ret$0;
                  {
                    tmp$ret$0 = 'Must be called at most once';
                  }
                  var message = tmp$ret$0;
                  throw IllegalStateException_init_$Create$(toString_0(message));
                }
              }
              var update = tmp1__anonymous__uwfjfc.uh(null, null, null, null, cause, 15, null);
              if (this.pg_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
                tmp1__anonymous__uwfjfc.vh(this, cause);
                return Unit_getInstance();
              }
            } else {
              if (this.pg_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, CompletedContinuation_init_$Create$(tmp1__anonymous__uwfjfc, null, null, null, cause, 14, null))) {
                return Unit_getInstance();
              }
            }
          }
        }
      }
    }
    return Unit_getInstance();
  };
  CancellableContinuationImpl.prototype.dh = function (cause) {
    {
      var tmp0_loop = this.pg_1;
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp1__anonymous__uwfjfc = tmp0_loop.ae_1;
          if (!(!(tmp1__anonymous__uwfjfc == null) ? isInterface(tmp1__anonymous__uwfjfc, NotCompleted) : false))
            return false;
          var update = new CancelledContinuation(this, cause, tmp1__anonymous__uwfjfc instanceof CancelHandler);
          if (!this.pg_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          var tmp0_safe_receiver = tmp1__anonymous__uwfjfc instanceof CancelHandler ? tmp1__anonymous__uwfjfc : null;
          if (tmp0_safe_receiver == null)
            null;
          else {
            var tmp$ret$1;
            {
              {
              }
              tmp$ret$1 = this.wh(tmp0_safe_receiver, cause);
            }
          }
          detachChildIfNonResuable(this);
          dispatchResume(this, this.zg());
          return true;
        }
      }
    }
  };
  CancellableContinuationImpl.prototype.xh = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.dh(cause);
    detachChildIfNonResuable(this);
  };
  CancellableContinuationImpl.prototype.wh = function (handler, cause) {
    var tmp;
    try {
      tmp = handler.invoke(cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = handleCoroutineException(this.x1(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, $p));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.eh = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineException(this.x1(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this, $p));
      } else {
        throw $p;
      }
    }
  };
  CancellableContinuationImpl.prototype.yh = function (parent) {
    return parent.lf();
  };
  CancellableContinuationImpl.prototype.zh = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend(this)) {
      if (this.qg_1 == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        releaseClaimedReusableContinuation(this);
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      releaseClaimedReusableContinuation(this);
    }
    var state = this.hf();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.te_1, this);
    if (get_isCancellableMode(this.zg())) {
      var job = this.x1().b2(Key_getInstance_2());
      if (!(job == null) ? !job.oe() : false) {
        var cause = job.lf();
        this.nh(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.ai(state);
  };
  CancellableContinuationImpl.prototype.y1 = function (result) {
    var tmp = toState(result, this);
    var tmp_0 = this.zg();
    return resumeImpl$default(this, tmp, tmp_0, null, 8, null);
  };
  CancellableContinuationImpl.prototype.ch = function () {
    var tmp0_elvis_lhs = this.qg_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.lh();
    this.qg_1 = NonDisposableHandle_getInstance();
  };
  CancellableContinuationImpl.prototype.ai = function (state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof CompletedContinuation) {
      var tmp_0 = state.oh_1;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : isObject(state)) ? state : THROW_CCE();
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.bi = function (state) {
    var tmp0_safe_receiver = DispatchedTask.prototype.bi.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      {
        {
        }
        var tmp$ret$0;
        {
          tmp$ret$0 = recoverStackTrace(tmp0_safe_receiver, this.mg_1);
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.toString = function () {
    return this.af() + '(' + toDebugString(this.mg_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  CancellableContinuationImpl.prototype.af = function () {
    return 'CancellableContinuation';
  };
  CancellableContinuationImpl.$metadata$ = classMeta('CancellableContinuationImpl', [CancellableContinuation, CoroutineStackFrame], undefined, undefined, undefined, DispatchedTask.prototype);
  function CancelHandler() {
  }
  CancelHandler.$metadata$ = classMeta('CancelHandler', [NotCompleted], undefined, undefined, undefined, CancelHandlerBase.prototype);
  function get_UNDECIDED() {
    return UNDECIDED;
  }
  var UNDECIDED;
  function Active() {
    Active_instance = this;
  }
  Active.prototype.toString = function () {
    return 'Active';
  };
  Active.$metadata$ = objectMeta('Active', [NotCompleted]);
  var Active_instance;
  function Active_getInstance() {
    if (Active_instance == null)
      new Active();
    return Active_instance;
  }
  function NotCompleted() {
  }
  NotCompleted.$metadata$ = interfaceMeta('NotCompleted');
  function CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cancelHandler = null;
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    if (!(($mask0 & 8) === 0))
      idempotentResume = null;
    if (!(($mask0 & 16) === 0))
      cancelCause = null;
    CompletedContinuation.call($this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
    return $this;
  }
  function CompletedContinuation_init_$Create$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker) {
    return CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, Object.create(CompletedContinuation.prototype));
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    this.oh_1 = result;
    this.ph_1 = cancelHandler;
    this.qh_1 = onCancellation;
    this.rh_1 = idempotentResume;
    this.sh_1 = cancelCause;
  }
  CompletedContinuation.prototype.th = function () {
    return !(this.sh_1 == null);
  };
  CompletedContinuation.prototype.vh = function (cont, cause) {
    var tmp0_safe_receiver = this.ph_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        tmp$ret$0 = cont.wh(tmp0_safe_receiver, cause);
      }
    }
    var tmp1_safe_receiver = this.qh_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      {
        {
        }
        tmp$ret$1 = cont.eh(tmp1_safe_receiver, cause);
      }
    }
  };
  CompletedContinuation.prototype.ei = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation.prototype.uh = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      result = this.oh_1;
    if (!(($mask0 & 2) === 0))
      cancelHandler = this.ph_1;
    if (!(($mask0 & 4) === 0))
      onCancellation = this.qh_1;
    if (!(($mask0 & 8) === 0))
      idempotentResume = this.rh_1;
    if (!(($mask0 & 16) === 0))
      cancelCause = this.sh_1;
    return this.ei(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation.prototype.toString = function () {
    return 'CompletedContinuation(result=' + toString(this.oh_1) + ', cancelHandler=' + this.ph_1 + ', onCancellation=' + this.qh_1 + ', idempotentResume=' + toString(this.rh_1) + ', cancelCause=' + this.sh_1 + ')';
  };
  CompletedContinuation.prototype.hashCode = function () {
    var result = this.oh_1 == null ? 0 : hashCode(this.oh_1);
    result = imul(result, 31) + (this.ph_1 == null ? 0 : hashCode(this.ph_1)) | 0;
    result = imul(result, 31) + (this.qh_1 == null ? 0 : hashCode(this.qh_1)) | 0;
    result = imul(result, 31) + (this.rh_1 == null ? 0 : hashCode(this.rh_1)) | 0;
    result = imul(result, 31) + (this.sh_1 == null ? 0 : hashCode(this.sh_1)) | 0;
    return result;
  };
  CompletedContinuation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.oh_1, tmp0_other_with_cast.oh_1))
      return false;
    if (!equals(this.ph_1, tmp0_other_with_cast.ph_1))
      return false;
    if (!equals(this.qh_1, tmp0_other_with_cast.qh_1))
      return false;
    if (!equals(this.rh_1, tmp0_other_with_cast.rh_1))
      return false;
    if (!equals(this.sh_1, tmp0_other_with_cast.sh_1))
      return false;
    return true;
  };
  CompletedContinuation.$metadata$ = classMeta('CompletedContinuation');
  function get_SUSPENDED() {
    return SUSPENDED;
  }
  var SUSPENDED;
  function get_RESUMED() {
    return RESUMED;
  }
  var RESUMED;
  function BeforeResumeCancelHandler() {
  }
  BeforeResumeCancelHandler.$metadata$ = classMeta('BeforeResumeCancelHandler', undefined, undefined, undefined, undefined, CancelHandler.prototype);
  function CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      handled = false;
    CompletedExceptionally.call($this, cause, handled);
    return $this;
  }
  function CompletedExceptionally_init_$Create$(cause, handled, $mask0, $marker) {
    return CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, Object.create(CompletedExceptionally.prototype));
  }
  function CompletedExceptionally(cause, handled) {
    this.te_1 = cause;
    this.ue_1 = atomic$boolean$1(handled);
  }
  CompletedExceptionally.prototype.z2 = function () {
    return this.te_1;
  };
  CompletedExceptionally.prototype.ve = function () {
    return this.ue_1.ee_1;
  };
  CompletedExceptionally.prototype.fi = function () {
    return this.ue_1.atomicfu$compareAndSet(false, true);
  };
  CompletedExceptionally.prototype.toString = function () {
    return get_classSimpleName(this) + '[' + this.te_1 + ']';
  };
  CompletedExceptionally.$metadata$ = classMeta('CompletedExceptionally');
  function CancelledContinuation(continuation, cause, handled) {
    var tmp0_elvis_lhs = cause;
    CompletedExceptionally.call(this, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Continuation ' + continuation + ' was cancelled normally') : tmp0_elvis_lhs, handled);
    this.hh_1 = atomic$boolean$1(false);
  }
  CancelledContinuation.prototype.ih = function () {
    return this.hh_1.atomicfu$compareAndSet(false, true);
  };
  CancelledContinuation.$metadata$ = classMeta('CancelledContinuation', undefined, undefined, undefined, undefined, CompletedExceptionally.prototype);
  function toState(_this__u8e3s4, caller) {
    var tmp$ret$2;
    {
      {
      }
      var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
      var tmp;
      if (exception == null) {
        var tmp$ret$0;
        {
          var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
          var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          tmp$ret$0 = tmp0__anonymous__q1qw7t;
        }
        tmp = tmp$ret$0;
      } else {
        var tmp$ret$1;
        {
          var tmp_1 = recoverStackTrace(exception, caller);
          tmp$ret$1 = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
        }
        tmp = tmp$ret$1;
      }
      tmp$ret$2 = tmp;
    }
    return tmp$ret$2;
  }
  function toState_0(_this__u8e3s4, onCancellation) {
    var tmp$ret$2;
    {
      {
      }
      var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
      var tmp;
      if (exception == null) {
        var tmp$ret$0;
        {
          var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
          var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          tmp$ret$0 = !(onCancellation == null) ? new CompletedWithCancellation(tmp0__anonymous__q1qw7t, onCancellation) : tmp0__anonymous__q1qw7t;
        }
        tmp = tmp$ret$0;
      } else {
        var tmp$ret$1;
        {
          tmp$ret$1 = CompletedExceptionally_init_$Create$(exception, false, 2, null);
        }
        tmp = tmp$ret$1;
      }
      tmp$ret$2 = tmp;
    }
    return tmp$ret$2;
  }
  function toState$default(_this__u8e3s4, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancellation = null;
    return toState_0(_this__u8e3s4, onCancellation);
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.gi_1 = result;
    this.hi_1 = onCancellation;
  }
  CompletedWithCancellation.prototype.toString = function () {
    return 'CompletedWithCancellation(result=' + toString(this.gi_1) + ', onCancellation=' + this.hi_1 + ')';
  };
  CompletedWithCancellation.prototype.hashCode = function () {
    var result = this.gi_1 == null ? 0 : hashCode(this.gi_1);
    result = imul(result, 31) + hashCode(this.hi_1) | 0;
    return result;
  };
  CompletedWithCancellation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.gi_1, tmp0_other_with_cast.gi_1))
      return false;
    if (!equals(this.hi_1, tmp0_other_with_cast.hi_1))
      return false;
    return true;
  };
  CompletedWithCancellation.$metadata$ = classMeta('CompletedWithCancellation');
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5() {
    return function (it) {
      return it instanceof CoroutineDispatcher ? it : null;
    };
  }
  function Key_0() {
    Key_instance = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5());
  }
  Key_0.$metadata$ = objectMeta('Key', undefined, undefined, undefined, undefined, AbstractCoroutineContextKey.prototype);
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key_0();
    return Key_instance;
  }
  function CoroutineDispatcher() {
    Key_getInstance_0();
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  CoroutineDispatcher.prototype.ji = function (context) {
    return true;
  };
  CoroutineDispatcher.prototype.z1 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  CoroutineDispatcher.prototype.a2 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.li();
  };
  CoroutineDispatcher.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  CoroutineDispatcher.$metadata$ = classMeta('CoroutineDispatcher', [ContinuationInterceptor], undefined, undefined, undefined, AbstractCoroutineContextElement.prototype);
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.b2(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        {
          {
          }
          tmp0_safe_receiver.mi(context, exception);
          return Unit_getInstance();
        }
      }
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineExceptionImpl(context, handlerException(exception, $p));
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    handleCoroutineExceptionImpl(context, exception);
  }
  function Key_1() {
    Key_instance_0 = this;
  }
  Key_1.$metadata$ = objectMeta('Key', [Key]);
  var Key_instance_0;
  function Key_getInstance_1() {
    if (Key_instance_0 == null)
      new Key_1();
    return Key_instance_0;
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    var tmp$ret$0;
    {
      var tmp0_apply = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
      {
      }
      {
        {
        }
      }
      tmp$ret$0 = tmp0_apply;
    }
    return tmp$ret$0;
  }
  function CoroutineScope() {
  }
  CoroutineScope.$metadata$ = interfaceMeta('CoroutineScope');
  function GlobalScope() {
    GlobalScope_instance = this;
  }
  GlobalScope.prototype.ne = function () {
    return EmptyCoroutineContext_getInstance();
  };
  GlobalScope.$metadata$ = objectMeta('GlobalScope', [CoroutineScope]);
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    if (GlobalScope_instance == null)
      new GlobalScope();
    return GlobalScope_instance;
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_getInstance();
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  CoroutineStart.prototype.ef = function (block, receiver, completion) {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.i9();
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = startCoroutineCancellable$default(block, receiver, completion, null, 4, null);
        break;
      case 2:
        tmp = startCoroutine(block, receiver, completion);
        break;
      case 3:
        tmp = startCoroutineUndispatched(block, receiver, completion);
        break;
      case 1:
        tmp = Unit_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  CoroutineStart.prototype.dg = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  CoroutineStart.$metadata$ = classMeta('CoroutineStart', undefined, undefined, undefined, undefined, Enum.prototype);
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CopyableThrowable() {
  }
  CopyableThrowable.$metadata$ = interfaceMeta('CopyableThrowable');
  function Delay() {
  }
  Delay.$metadata$ = interfaceMeta('Delay');
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.oi_1 = new Long(0, 0);
    this.pi_1 = false;
    this.qi_1 = null;
  }
  EventLoop.prototype.ri = function () {
    var tmp0_elvis_lhs = this.qi_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.vi();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.ci();
    return true;
  };
  EventLoop.prototype.wi = function (task) {
    var tmp0_elvis_lhs = this.qi_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      {
        var tmp0_also = new ArrayQueue();
        {
        }
        {
          this.qi_1 = tmp0_also;
        }
        tmp$ret$0 = tmp0_also;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.xi(task);
  };
  EventLoop.prototype.yi = function () {
    return this.oi_1.s9(delta(this, true)) >= 0;
  };
  EventLoop.prototype.zi = function () {
    var tmp0_safe_receiver = this.qi_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.aj();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  EventLoop.prototype.bj = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.oi_1 = tmp0_this.oi_1.t9(delta(this, unconfined));
    if (!unconfined)
      this.pi_1 = true;
  };
  EventLoop.prototype.cj = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.oi_1 = tmp0_this.oi_1.u9(delta(this, unconfined));
    if (this.oi_1.s9(new Long(0, 0)) > 0)
      return Unit_getInstance();
    {
    }
    if (this.pi_1) {
      this.dj();
    }
  };
  EventLoop.prototype.dj = function () {
  };
  EventLoop.$metadata$ = classMeta('EventLoop', undefined, undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.ej_1 = new CommonThreadLocal();
  }
  ThreadLocalEventLoop.prototype.fj = function () {
    var tmp0_elvis_lhs = this.ej_1.hj();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      {
        var tmp0_also = createEventLoop();
        {
        }
        {
          ThreadLocalEventLoop_getInstance().ej_1.ij(tmp0_also);
        }
        tmp$ret$0 = tmp0_also;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ThreadLocalEventLoop.$metadata$ = objectMeta('ThreadLocalEventLoop');
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  CompletionHandlerException.$metadata$ = classMeta('CompletionHandlerException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  CoroutinesInternalError.$metadata$ = classMeta('CoroutinesInternalError', undefined, undefined, undefined, undefined, Error_0.prototype);
  function DisposableHandle() {
  }
  DisposableHandle.$metadata$ = interfaceMeta('DisposableHandle');
  function Key_2() {
    Key_instance_1 = this;
  }
  Key_2.$metadata$ = objectMeta('Key', [Key]);
  var Key_instance_1;
  function Key_getInstance_2() {
    if (Key_instance_1 == null)
      new Key_2();
    return Key_instance_1;
  }
  function Job() {
  }
  Job.$metadata$ = interfaceMeta('Job', [Element]);
  function ChildJob() {
  }
  ChildJob.$metadata$ = interfaceMeta('ChildJob', [Job]);
  function ParentJob() {
  }
  ParentJob.$metadata$ = interfaceMeta('ParentJob', [Job]);
  function ChildHandle() {
  }
  ChildHandle.$metadata$ = interfaceMeta('ChildHandle', [DisposableHandle]);
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  NonDisposableHandle.prototype.lh = function () {
  };
  NonDisposableHandle.prototype.tf = function (cause) {
    return false;
  };
  NonDisposableHandle.prototype.toString = function () {
    return 'NonDisposableHandle';
  };
  NonDisposableHandle.$metadata$ = objectMeta('NonDisposableHandle', [DisposableHandle, ChildHandle]);
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  function get_COMPLETING_ALREADY() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    init_properties_JobSupport_kt_iaxwag();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    init_properties_JobSupport_kt_iaxwag();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    init_properties_JobSupport_kt_iaxwag();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    init_properties_JobSupport_kt_iaxwag();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.jj_1 = isActive;
  }
  Empty.prototype.oe = function () {
    return this.jj_1;
  };
  Empty.prototype.kj = function () {
    return null;
  };
  Empty.prototype.toString = function () {
    return 'Empty{' + (this.jj_1 ? 'Active' : 'New') + '}';
  };
  Empty.$metadata$ = classMeta('Empty', [Incomplete]);
  function Incomplete() {
  }
  Incomplete.$metadata$ = interfaceMeta('Incomplete');
  function NodeList() {
    LinkedListHead.call(this);
  }
  NodeList.prototype.oe = function () {
    return true;
  };
  NodeList.prototype.kj = function () {
    return this;
  };
  NodeList.prototype.oj = function (state) {
    var tmp$ret$1;
    {
      {
      }
      var tmp$ret$0;
      {
        var tmp0_apply = StringBuilder_init_$Create$();
        {
        }
        {
          tmp0_apply.u8('List{');
          tmp0_apply.u8(state);
          tmp0_apply.u8('}[');
          var first = true;
          {
            var cur = this.sj();
            while (!equals(cur, this)) {
              if (cur instanceof JobNode) {
                var tmp0__anonymous__q1qw7t = cur;
                if (first)
                  first = false;
                else {
                  tmp0_apply.u8(', ');
                }
                tmp0_apply.t8(tmp0__anonymous__q1qw7t);
              }
              cur = cur.pj_1;
            }
          }
          tmp0_apply.u8(']');
        }
        tmp$ret$0 = tmp0_apply;
      }
      tmp$ret$1 = tmp$ret$0.toString();
    }
    return tmp$ret$1;
  };
  NodeList.prototype.toString = function () {
    return get_DEBUG() ? this.oj('Active') : anyToString(this);
  };
  NodeList.$metadata$ = classMeta('NodeList', [Incomplete], undefined, undefined, undefined, LinkedListHead.prototype);
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  JobNode.prototype.dk = function () {
    var tmp = this.ck_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  JobNode.prototype.oe = function () {
    return true;
  };
  JobNode.prototype.kj = function () {
    return null;
  };
  JobNode.prototype.lh = function () {
    return this.dk().qf(this);
  };
  JobNode.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.dk()) + ']';
  };
  JobNode.$metadata$ = classMeta('JobNode', [DisposableHandle, Incomplete], undefined, undefined, undefined, CompletionHandlerBase.prototype);
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.jk_1.ae_1 = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.jk_1.ae_1;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    {
    }
    {
    }
    {
    }
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.te_1;
    var wasCancelling = false;
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        wasCancelling = state.kk();
        var exceptions = state.lk(proposedException);
        var finalCause = getFinalRootCause($this, state, exceptions);
        if (!(finalCause == null))
          addSuppressedExceptions($this, finalCause, exceptions);
        tmp$ret$0 = finalCause;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    var finalException = tmp$ret$1;
    var tmp;
    if (finalException == null) {
      tmp = proposedUpdate;
    } else if (finalException === proposedException) {
      tmp = proposedUpdate;
    } else {
      tmp = CompletedExceptionally_init_$Create$(finalException, false, 2, null);
    }
    var finalState = tmp;
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.bg(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).fi();
      }
    }
    if (!wasCancelling)
      $this.yf(finalException);
    $this.se(finalState);
    var casSuccess = $this.he_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    {
    }
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.f()) {
      if (state.kk()) {
        var tmp$ret$0;
        {
          var tmp0_elvis_lhs = null;
          tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.re() : tmp0_elvis_lhs, null, $this);
        }
        return tmp$ret$0;
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      var tmp0_iterator = exceptions.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        var tmp$ret$1;
        {
          tmp$ret$1 = !(element instanceof CancellationException);
        }
        if (tmp$ret$1) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.y3(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        var tmp0_iterator_0 = exceptions.c();
        while (tmp0_iterator_0.d()) {
          var element_0 = tmp0_iterator_0.e();
          var tmp$ret$3;
          {
            var tmp;
            if (!(element_0 === first)) {
              tmp = element_0 instanceof TimeoutCancellationException;
            } else {
              tmp = false;
            }
            tmp$ret$3 = tmp;
          }
          if (tmp$ret$3) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.g() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions.g());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.c();
    while (tmp0_iterator.d()) {
      var exception = tmp0_iterator.e();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.b(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        {
        }
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    {
    }
    {
    }
    if (!$this.he_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.yf(null);
    $this.se(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.gf();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        tmp0_safe_receiver.lh();
        tmp$ret$0 = $this.ff(NonDisposableHandle_getInstance());
      }
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.te_1;
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          $this.ze(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + $this, $p));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.kj();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.yf(cause);
    {
      var exception = null;
      {
        var cur = list.sj();
        while (!equals(cur, list)) {
          if (cur instanceof JobCancellingNode) {
            var tmp0__anonymous__q1qw7t = cur;
            try {
              tmp0__anonymous__q1qw7t.invoke(cause);
            } catch ($p) {
              if ($p instanceof Error) {
                var tmp0_safe_receiver = exception;
                var tmp;
                if (tmp0_safe_receiver == null) {
                  tmp = null;
                } else {
                  var tmp$ret$0;
                  {
                    {
                    }
                    {
                      {
                      }
                    }
                    tmp$ret$0 = tmp0_safe_receiver;
                  }
                  tmp = tmp$ret$0;
                }
                var tmp1_elvis_lhs = tmp;
                if (tmp1_elvis_lhs == null) {
                  var tmp$ret$1;
                  {
                    {
                    }
                    exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, $p);
                    tmp$ret$1 = Unit_getInstance();
                  }
                } else
                  tmp1_elvis_lhs;
              } else {
                throw $p;
              }
            }
          }
          cur = cur.pj_1;
        }
      }
      var tmp0_safe_receiver_0 = exception;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        var tmp$ret$2;
        {
          {
          }
          tmp$ret$2 = $this.ze(tmp0_safe_receiver_0);
        }
      }
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.zf())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.gf();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }
    return parent.tf(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    {
      var cur = _this__u8e3s4.sj();
      while (!equals(cur, _this__u8e3s4)) {
        if (cur instanceof JobNode) {
          var tmp0__anonymous__q1qw7t = cur;
          try {
            tmp0__anonymous__q1qw7t.invoke(cause);
          } catch ($p) {
            if ($p instanceof Error) {
              var tmp0_safe_receiver = exception;
              var tmp;
              if (tmp0_safe_receiver == null) {
                tmp = null;
              } else {
                var tmp$ret$0;
                {
                  {
                  }
                  {
                    {
                    }
                  }
                  tmp$ret$0 = tmp0_safe_receiver;
                }
                tmp = tmp$ret$0;
              }
              var tmp1_elvis_lhs = tmp;
              if (tmp1_elvis_lhs == null) {
                var tmp$ret$1;
                {
                  {
                  }
                  exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, $p);
                  tmp$ret$1 = Unit_getInstance();
                }
              } else
                tmp1_elvis_lhs;
            } else {
              throw $p;
            }
          }
        }
        cur = cur.pj_1;
      }
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      {
        {
        }
        tmp$ret$2 = $this.ze(tmp0_safe_receiver_0);
      }
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    var tmp0_subject = state;
    if (tmp0_subject instanceof Empty) {
      if (state.jj_1)
        return 0;
      if (!$this.he_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.kf();
      return 1;
    } else {
      if (tmp0_subject instanceof InactiveNodeList) {
        if (!$this.he_1.atomicfu$compareAndSet(state, state.mk_1))
          return -1;
        $this.kf();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$0;
        {
          {
          }
          {
            {
            }
          }
          tmp$ret$0 = tmp1_safe_receiver;
        }
        tmp_0 = tmp$ret$0;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.ck_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      var tmp$ret$0;
      {
        tmp$ret$0 = $this.hf() === expect;
      }
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.wj(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.jj_1 ? list : new InactiveNodeList(list);
    $this.he_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.fk(new NodeList());
    var tmp$ret$0;
    {
      tmp$ret$0 = state.pj_1;
    }
    var list = tmp$ret$0;
    $this.he_1.atomicfu$compareAndSet(state, list);
  }
  function cancelMakeCompleting($this, cause) {
    {
      while (true) {
        {
          var tmp0__anonymous__q1qw7t = $this.hf();
          var tmp;
          if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false)) {
            tmp = true;
          } else {
            var tmp_0;
            if (tmp0__anonymous__q1qw7t instanceof Finishing) {
              tmp_0 = tmp0__anonymous__q1qw7t.nk();
            } else {
              tmp_0 = false;
            }
            tmp = tmp_0;
          }
          if (tmp) {
            return get_COMPLETING_ALREADY();
          }
          var tmp_1 = createCauseException($this, cause);
          var proposedUpdate = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
          var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, proposedUpdate);
          if (!(finalState === get_COMPLETING_RETRY()))
            return finalState;
        }
      }
    }
  }
  function createCauseException($this, cause) {
    var tmp0_subject = cause;
    var tmp;
    if (tmp0_subject == null ? true : tmp0_subject instanceof Error) {
      var tmp1_elvis_lhs = cause;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp$ret$0;
        {
          var tmp0_elvis_lhs = null;
          tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.re() : tmp0_elvis_lhs, null, $this);
        }
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).wf();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    {
      while (true) {
        var tmp$ret$7;
        $l$block: {
          var tmp0__anonymous__q1qw7t = $this.hf();
          var tmp0_subject = tmp0__anonymous__q1qw7t;
          if (tmp0_subject instanceof Finishing) {
            var tmp$ret$4;
            {
              var tmp$ret$3;
              {
                if (tmp0__anonymous__q1qw7t.ok())
                  return get_TOO_LATE_TO_CANCEL();
                var wasCancelling = tmp0__anonymous__q1qw7t.kk();
                if (!(cause == null) ? true : !wasCancelling) {
                  var tmp0_elvis_lhs = causeExceptionCache;
                  var tmp;
                  if (tmp0_elvis_lhs == null) {
                    var tmp$ret$0;
                    {
                      var tmp0_also = createCauseException($this, cause);
                      {
                      }
                      {
                        causeExceptionCache = tmp0_also;
                      }
                      tmp$ret$0 = tmp0_also;
                    }
                    tmp = tmp$ret$0;
                  } else {
                    tmp = tmp0_elvis_lhs;
                  }
                  var causeException = tmp;
                  tmp0__anonymous__q1qw7t.pk(causeException);
                }
                var tmp$ret$2;
                {
                  var tmp1_takeIf = tmp0__anonymous__q1qw7t.qk();
                  {
                  }
                  var tmp_0;
                  var tmp$ret$1;
                  {
                    tmp$ret$1 = !wasCancelling;
                  }
                  if (tmp$ret$1) {
                    tmp_0 = tmp1_takeIf;
                  } else {
                    tmp_0 = null;
                  }
                  tmp$ret$2 = tmp_0;
                }
                tmp$ret$3 = tmp$ret$2;
              }
              tmp$ret$4 = tmp$ret$3;
            }
            var notifyRootCause = tmp$ret$4;
            var tmp1_safe_receiver = notifyRootCause;
            if (tmp1_safe_receiver == null)
              null;
            else {
              var tmp$ret$5;
              {
                {
                }
                tmp$ret$5 = notifyCancelling($this, tmp0__anonymous__q1qw7t.gk_1, tmp1_safe_receiver);
              }
            }
            return get_COMPLETING_ALREADY();
          } else {
            if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
              var tmp2_elvis_lhs = causeExceptionCache;
              var tmp_1;
              if (tmp2_elvis_lhs == null) {
                var tmp$ret$6;
                {
                  var tmp0_also_0 = createCauseException($this, cause);
                  {
                  }
                  {
                    causeExceptionCache = tmp0_also_0;
                  }
                  tmp$ret$6 = tmp0_also_0;
                }
                tmp_1 = tmp$ret$6;
              } else {
                tmp_1 = tmp2_elvis_lhs;
              }
              var causeException_0 = tmp_1;
              if (tmp0__anonymous__q1qw7t.oe()) {
                if (tryMakeCancelling($this, tmp0__anonymous__q1qw7t, causeException_0))
                  return get_COMPLETING_ALREADY();
              } else {
                var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, CompletedExceptionally_init_$Create$(causeException_0, false, 2, null));
                if (finalState === get_COMPLETING_ALREADY()) {
                  var tmp1_error = 'Cannot happen in ' + toString(tmp0__anonymous__q1qw7t);
                  throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
                } else if (finalState === get_COMPLETING_RETRY()) {
                  tmp$ret$7 = Unit_getInstance();
                  break $l$block;
                } else
                  return finalState;
              }
            } else {
              return get_TOO_LATE_TO_CANCEL();
            }
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state.kj();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_subject = state;
      var tmp_0;
      if (tmp0_subject instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (tmp0_subject instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var tmp0_error = 'State should have list: ' + state;
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    {
    }
    {
    }
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.he_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    var tmp$ret$3;
    {
      if (finishing.nk())
        return get_COMPLETING_ALREADY();
      finishing.rk(true);
      if (!(finishing === state)) {
        if (!$this.he_1.atomicfu$compareAndSet(state, finishing))
          return get_COMPLETING_RETRY();
      }
      {
      }
      var wasCancelling = finishing.kk();
      var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        {
          {
          }
          tmp$ret$0 = finishing.pk(tmp0_safe_receiver.te_1);
        }
      }
      var tmp$ret$2;
      {
        var tmp0_takeIf = finishing.qk();
        {
        }
        var tmp_0;
        var tmp$ret$1;
        {
          tmp$ret$1 = !wasCancelling;
        }
        if (tmp$ret$1) {
          tmp_0 = tmp0_takeIf;
        } else {
          tmp_0 = null;
        }
        tmp$ret$2 = tmp_0;
      }
      notifyRootCause = tmp$ret$2;
      tmp$ret$3 = Unit_getInstance();
    }
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      {
        {
        }
        tmp$ret$4 = notifyCancelling($this, list, tmp2_safe_receiver);
      }
    }
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.te_1;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.kj();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    while (true) {
      var $this_1 = $this_0;
      var state_1 = state_0;
      var child_1 = child_0;
      var proposedUpdate_1 = proposedUpdate_0;
      var tmp$ret$1;
      {
        var tmp0__get_asHandler__gq3rkj = new ChildCompletion($this_1, state_1, child_1, proposedUpdate_1);
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      var handle = child_1.wk_1.pf(false, false, tmp$ret$1, 1, null);
      if (!(handle === NonDisposableHandle_getInstance()))
        return true;
      var tmp0_elvis_lhs = nextChild(child_1, $this_1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var nextChild_0 = tmp;
      var tmp0 = $this_1;
      var tmp1 = state_1;
      var tmp2 = nextChild_0;
      var tmp3 = proposedUpdate_1;
      $this_0 = tmp0;
      state_0 = tmp1;
      child_0 = tmp2;
      proposedUpdate_0 = tmp3;
      continue;
    }
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    {
    }
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_getInstance();
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.ye(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      var tmp$ret$0;
      {
        var tmp0__get_isRemoved__hsfvgr = cur;
        tmp$ret$0 = tmp0__get_isRemoved__hsfvgr.rj_1;
      }
      if (!tmp$ret$0) {
        break $l$loop;
      }
      var tmp$ret$1;
      {
        var tmp1__get_prevNode__b1i0ed = cur;
        tmp$ret$1 = tmp1__get_prevNode__b1i0ed.qj_1;
      }
      cur = tmp$ret$1;
    }
    $l$loop_0: while (true) {
      var tmp$ret$2;
      {
        var tmp2__get_nextNode__ek7k4a = cur;
        tmp$ret$2 = tmp2__get_nextNode__ek7k4a.pj_1;
      }
      cur = tmp$ret$2;
      var tmp$ret$3;
      {
        var tmp3__get_isRemoved__lodk3s = cur;
        tmp$ret$3 = tmp3__get_isRemoved__lodk3s.rj_1;
      }
      if (tmp$ret$3)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.kk() ? 'Cancelling' : state.nk() ? 'Completing' : 'Active';
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
        tmp = state.oe() ? 'Active' : 'New';
      } else {
        if (tmp0_subject instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    this.gk_1 = list;
    this.hk_1 = atomic$boolean$1(isCompleting);
    this.ik_1 = atomic$ref$1(rootCause);
    this.jk_1 = atomic$ref$1(null);
  }
  Finishing.prototype.kj = function () {
    return this.gk_1;
  };
  Finishing.prototype.rk = function (value) {
    this.hk_1.ee_1 = value;
  };
  Finishing.prototype.nk = function () {
    return this.hk_1.ee_1;
  };
  Finishing.prototype.xk = function (value) {
    this.ik_1.ae_1 = value;
  };
  Finishing.prototype.qk = function () {
    return this.ik_1.ae_1;
  };
  Finishing.prototype.ok = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  Finishing.prototype.kk = function () {
    return !(this.qk() == null);
  };
  Finishing.prototype.oe = function () {
    return this.qk() == null;
  };
  Finishing.prototype.lk = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        var tmp$ret$0;
        {
          var tmp0_also = allocateList(this);
          {
          }
          {
            tmp0_also.b(eh);
          }
          tmp$ret$0 = tmp0_also;
        }
        tmp = tmp$ret$0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
    var list = tmp;
    var rootCause = this.qk();
    var tmp0_safe_receiver = rootCause;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      {
        {
        }
        tmp$ret$1 = list.c4(0, tmp0_safe_receiver);
      }
    }
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.b(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  Finishing.prototype.pk = function (exception) {
    var rootCause = this.qk();
    if (rootCause == null) {
      this.xk(exception);
      return Unit_getInstance();
    }
    if (exception === rootCause)
      return Unit_getInstance();
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null)
      _set_exceptionsHolder__tqm22h(this, exception);
    else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_getInstance();
        var tmp$ret$0;
        {
          var tmp0_apply = allocateList(this);
          {
          }
          {
            tmp0_apply.b(eh);
            tmp0_apply.b(exception);
          }
          tmp$ret$0 = tmp0_apply;
        }
        _set_exceptionsHolder__tqm22h(this, tmp$ret$0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).b(exception);
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  Finishing.prototype.toString = function () {
    return 'Finishing[cancelling=' + this.kk() + ', completing=' + this.nk() + ', rootCause=' + this.qk() + ', exceptions=' + toString(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.gk_1 + ']';
  };
  Finishing.$metadata$ = classMeta('Finishing', [Incomplete]);
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.cl_1 = parent;
    this.dl_1 = state;
    this.el_1 = child;
    this.fl_1 = proposedUpdate;
  }
  ChildCompletion.prototype.gl = function (cause) {
    continueCompleting(this.cl_1, this.dl_1, this.el_1, this.fl_1);
  };
  ChildCompletion.prototype.invoke = function (cause) {
    return this.gl(cause);
  };
  ChildCompletion.$metadata$ = classMeta('ChildCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function JobSupport(active) {
    this.he_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.ie_1 = atomic$ref$1(null);
  }
  JobSupport.prototype.z = function () {
    return Key_getInstance_2();
  };
  JobSupport.prototype.ff = function (value) {
    this.ie_1.ae_1 = value;
  };
  JobSupport.prototype.gf = function () {
    return this.ie_1.ae_1;
  };
  JobSupport.prototype.je = function (parent) {
    {
    }
    if (parent == null) {
      this.ff(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }
    parent.jf();
    var handle = parent.xf(this);
    this.ff(handle);
    if (this.if()) {
      handle.lh();
      this.ff(NonDisposableHandle_getInstance());
    }
  };
  JobSupport.prototype.hf = function () {
    {
      var tmp0_loop = this.he_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.ae_1;
          if (!(tmp1__anonymous__uwfjfc instanceof OpDescriptor))
            return tmp1__anonymous__uwfjfc;
          tmp1__anonymous__uwfjfc.hl(this);
        }
      }
    }
  };
  JobSupport.prototype.oe = function () {
    var state = this.hf();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.oe();
    } else {
      tmp = false;
    }
    return tmp;
  };
  JobSupport.prototype.if = function () {
    var tmp = this.hf();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  JobSupport.prototype.jf = function () {
    {
      while (true) {
        {
          var tmp0__anonymous__q1qw7t = this.hf();
          var tmp0_subject = startInternal(this, tmp0__anonymous__q1qw7t);
          if (tmp0_subject === 0)
            return false;
          else if (tmp0_subject === 1)
            return true;
        }
      }
    }
  };
  JobSupport.prototype.kf = function () {
  };
  JobSupport.prototype.lf = function () {
    var state = this.hf();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.qk();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.mf(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.nf(state.te_1, null, 1, null);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  JobSupport.prototype.mf = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      {
        var tmp0_elvis_lhs_0 = message;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.re() : tmp0_elvis_lhs_0, _this__u8e3s4, this);
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  JobSupport.prototype.nf = function (_this__u8e3s4, message, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      message = null;
    return this.mf(_this__u8e3s4, message);
  };
  JobSupport.prototype.of = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    {
      while (true) {
        var tmp$ret$1;
        $l$block: {
          var tmp0__anonymous__q1qw7t = this.hf();
          var tmp0_subject = tmp0__anonymous__q1qw7t;
          if (tmp0_subject instanceof Empty) {
            if (tmp0__anonymous__q1qw7t.jj_1) {
              if (this.he_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, node))
                return node;
            } else
              promoteEmptyToNodeList(this, tmp0__anonymous__q1qw7t);
          } else {
            if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
              var list = tmp0__anonymous__q1qw7t.kj();
              if (list == null) {
                promoteSingleToNodeList(this, tmp0__anonymous__q1qw7t instanceof JobNode ? tmp0__anonymous__q1qw7t : THROW_CCE());
              } else {
                var rootCause = null;
                var handle = NonDisposableHandle_getInstance();
                var tmp;
                if (onCancelling) {
                  tmp = tmp0__anonymous__q1qw7t instanceof Finishing;
                } else {
                  tmp = false;
                }
                if (tmp) {
                  var tmp$ret$2;
                  {
                    rootCause = tmp0__anonymous__q1qw7t.qk();
                    var tmp_0;
                    var tmp_1;
                    if (rootCause == null) {
                      tmp_1 = true;
                    } else {
                      var tmp_2;
                      var tmp$ret$0;
                      {
                        tmp$ret$0 = handler instanceof ChildHandleNode;
                      }
                      if (tmp$ret$0) {
                        tmp_2 = !tmp0__anonymous__q1qw7t.nk();
                      } else {
                        tmp_2 = false;
                      }
                      tmp_1 = tmp_2;
                    }
                    if (tmp_1) {
                      if (!addLastAtomic(this, tmp0__anonymous__q1qw7t, list, node)) {
                        tmp$ret$1 = Unit_getInstance();
                        break $l$block;
                      }
                      if (rootCause == null)
                        return node;
                      handle = node;
                      tmp_0 = Unit_getInstance();
                    }
                    tmp$ret$2 = tmp_0;
                  }
                }
                if (!(rootCause == null)) {
                  if (invokeImmediately)
                    invokeIt(handler, rootCause);
                  return handle;
                } else {
                  if (addLastAtomic(this, tmp0__anonymous__q1qw7t, list, node))
                    return node;
                }
              }
            } else {
              if (invokeImmediately) {
                var tmp1_safe_receiver = tmp0__anonymous__q1qw7t instanceof CompletedExceptionally ? tmp0__anonymous__q1qw7t : null;
                invokeIt(handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.te_1);
              }
              return NonDisposableHandle_getInstance();
            }
          }
        }
      }
    }
  };
  JobSupport.prototype.qf = function (node) {
    {
      while (true) {
        {
          var tmp0__anonymous__q1qw7t = this.hf();
          var tmp0_subject = tmp0__anonymous__q1qw7t;
          if (tmp0_subject instanceof JobNode) {
            if (!(tmp0__anonymous__q1qw7t === node))
              return Unit_getInstance();
            if (this.he_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, get_EMPTY_ACTIVE()))
              return Unit_getInstance();
          } else {
            if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
              if (!(tmp0__anonymous__q1qw7t.kj() == null)) {
                node.ek();
              }
              return Unit_getInstance();
            } else {
              return Unit_getInstance();
            }
          }
        }
      }
    }
  };
  JobSupport.prototype.rf = function () {
    return false;
  };
  JobSupport.prototype.re = function () {
    return 'Job was cancelled';
  };
  JobSupport.prototype.sf = function (parentJob) {
    this.uf(parentJob);
  };
  JobSupport.prototype.tf = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.uf(cause) ? this.ag() : false;
  };
  JobSupport.prototype.uf = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.rf()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.ye(finalState);
      tmp = true;
    }
    return tmp;
  };
  JobSupport.prototype.vf = function (message, cause) {
    var tmp0_elvis_lhs = message;
    return new JobCancellationException(tmp0_elvis_lhs == null ? this.re() : tmp0_elvis_lhs, cause, this);
  };
  JobSupport.prototype.wf = function () {
    var state = this.hf();
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.qk();
    } else {
      if (tmp0_subject instanceof CompletedExceptionally) {
        tmp = state.te_1;
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          var tmp0_error = 'Cannot be cancelling child in this state: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  JobSupport.prototype.we = function (proposedUpdate) {
    {
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp0__anonymous__q1qw7t = this.hf();
          var finalState = tryMakeCompleting(this, tmp0__anonymous__q1qw7t, proposedUpdate);
          if (finalState === get_COMPLETING_ALREADY())
            throw IllegalStateException_init_$Create$_0('Job ' + this + ' is already complete or completing, ' + ('but is being completed with ' + toString(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
          else if (finalState === get_COMPLETING_RETRY()) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          } else
            return finalState;
        }
      }
    }
  };
  JobSupport.prototype.xf = function (child) {
    var tmp$ret$1;
    {
      var tmp0__get_asHandler__gq3rkj = new ChildHandleNode(child);
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    var tmp = this.pf(true, false, tmp$ret$1, 2, null);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  JobSupport.prototype.ze = function (exception) {
    throw exception;
  };
  JobSupport.prototype.yf = function (cause) {
  };
  JobSupport.prototype.zf = function () {
    return false;
  };
  JobSupport.prototype.ag = function () {
    return true;
  };
  JobSupport.prototype.bg = function (exception) {
    return false;
  };
  JobSupport.prototype.se = function (state) {
  };
  JobSupport.prototype.ye = function (state) {
  };
  JobSupport.prototype.toString = function () {
    return this.cg() + '@' + get_hexAddress(this);
  };
  JobSupport.prototype.cg = function () {
    return this.af() + '{' + stateString(this, this.hf()) + '}';
  };
  JobSupport.prototype.af = function () {
    return get_classSimpleName(this);
  };
  JobSupport.$metadata$ = classMeta('JobSupport', [Job, ChildJob, ParentJob, SelectClause0]);
  function boxIncomplete(_this__u8e3s4) {
    init_properties_JobSupport_kt_iaxwag();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  JobCancellingNode.$metadata$ = classMeta('JobCancellingNode', undefined, undefined, undefined, undefined, JobNode.prototype);
  function get_FALSE() {
    return FALSE;
  }
  var FALSE;
  function get_TRUE() {
    return TRUE;
  }
  var TRUE;
  function InactiveNodeList(list) {
    this.mk_1 = list;
  }
  InactiveNodeList.prototype.kj = function () {
    return this.mk_1;
  };
  InactiveNodeList.prototype.oe = function () {
    return false;
  };
  InactiveNodeList.prototype.toString = function () {
    return get_DEBUG() ? this.mk_1.oj('New') : anyToString(this);
  };
  InactiveNodeList.$metadata$ = classMeta('InactiveNodeList', [Incomplete]);
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.wk_1 = childJob;
  }
  ChildHandleNode.prototype.gl = function (cause) {
    return this.wk_1.sf(this.dk());
  };
  ChildHandleNode.prototype.invoke = function (cause) {
    return this.gl(cause);
  };
  ChildHandleNode.prototype.tf = function (cause) {
    return this.dk().tf(cause);
  };
  ChildHandleNode.$metadata$ = classMeta('ChildHandleNode', [ChildHandle], undefined, undefined, undefined, JobCancellingNode.prototype);
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.ml_1 = handler;
    this.nl_1 = atomic$int$1(0);
  }
  InvokeOnCancelling.prototype.gl = function (cause) {
    if (this.nl_1.atomicfu$compareAndSet(0, 1))
      this.ml_1(cause);
  };
  InvokeOnCancelling.prototype.invoke = function (cause) {
    return this.gl(cause);
  };
  InvokeOnCancelling.$metadata$ = classMeta('InvokeOnCancelling', undefined, undefined, undefined, undefined, JobCancellingNode.prototype);
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.sl_1 = handler;
  }
  InvokeOnCompletion.prototype.gl = function (cause) {
    return this.sl_1(cause);
  };
  InvokeOnCompletion.prototype.invoke = function (cause) {
    return this.gl(cause);
  };
  InvokeOnCompletion.$metadata$ = classMeta('InvokeOnCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function IncompleteStateBox(state) {
    this.tl_1 = state;
  }
  IncompleteStateBox.$metadata$ = classMeta('IncompleteStateBox');
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.yl_1 = child;
  }
  ChildContinuation.prototype.gl = function (cause) {
    this.yl_1.xh(this.yl_1.yh(this.dk()));
  };
  ChildContinuation.prototype.invoke = function (cause) {
    return this.gl(cause);
  };
  ChildContinuation.$metadata$ = classMeta('ChildContinuation', undefined, undefined, undefined, undefined, JobCancellingNode.prototype);
  var properties_initialized_JobSupport_kt_5iq8a4;
  function init_properties_JobSupport_kt_iaxwag() {
    if (properties_initialized_JobSupport_kt_5iq8a4) {
    } else {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  MainCoroutineDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.bm();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  MainCoroutineDispatcher.prototype.bm = function () {
    var main = Dispatchers_getInstance().gm();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.am();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  MainCoroutineDispatcher.$metadata$ = classMeta('MainCoroutineDispatcher', undefined, undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function TimeoutCancellationException() {
  }
  TimeoutCancellationException.$metadata$ = classMeta('TimeoutCancellationException', [CopyableThrowable], undefined, undefined, undefined, CancellationException.prototype);
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  Unconfined.prototype.ji = function (context) {
    return false;
  };
  Unconfined.prototype.ki = function (context, block) {
    var yieldContext = context.b2(Key_getInstance_3());
    if (!(yieldContext == null)) {
      yieldContext.jm_1 = true;
      return Unit_getInstance();
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  Unconfined.prototype.toString = function () {
    return 'Dispatchers.Unconfined';
  };
  Unconfined.$metadata$ = objectMeta('Unconfined', undefined, undefined, undefined, undefined, CoroutineDispatcher.prototype);
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_3() {
    Key_instance_2 = this;
  }
  Key_3.$metadata$ = objectMeta('Key', [Key]);
  var Key_instance_2;
  function Key_getInstance_3() {
    if (Key_instance_2 == null)
      new Key_3();
    return Key_instance_2;
  }
  function ensureCapacity($this) {
    var currentSize = $this.si_1.length;
    var newCapacity = currentSize << 1;
    var tmp$ret$0;
    {
      tmp$ret$0 = fillArrayVal(Array(newCapacity), null);
    }
    var newElements = tmp$ret$0;
    var tmp$ret$1;
    {
      var tmp0_copyInto = $this.si_1;
      var tmp1_copyInto = $this.ti_1;
      var tmp2_copyInto = tmp0_copyInto.length;
      arrayCopy(tmp0_copyInto, newElements, 0, tmp1_copyInto, tmp2_copyInto);
      tmp$ret$1 = newElements;
    }
    var tmp$ret$2;
    {
      var tmp3_copyInto = $this.si_1;
      var tmp4_copyInto = $this.si_1.length - $this.ti_1 | 0;
      var tmp5_copyInto = $this.ti_1;
      arrayCopy(tmp3_copyInto, newElements, tmp4_copyInto, 0, tmp5_copyInto);
      tmp$ret$2 = newElements;
    }
    $this.si_1 = newElements;
    $this.ti_1 = 0;
    $this.ui_1 = currentSize;
  }
  function ArrayQueue() {
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = fillArrayVal(Array(16), null);
    }
    tmp.si_1 = tmp$ret$0;
    this.ti_1 = 0;
    this.ui_1 = 0;
  }
  ArrayQueue.prototype.aj = function () {
    return this.ti_1 === this.ui_1;
  };
  ArrayQueue.prototype.xi = function (element) {
    this.si_1[this.ui_1] = element;
    this.ui_1 = (this.ui_1 + 1 | 0) & (this.si_1.length - 1 | 0);
    if (this.ui_1 === this.ti_1)
      ensureCapacity(this);
  };
  ArrayQueue.prototype.vi = function () {
    if (this.ti_1 === this.ui_1)
      return null;
    var element = this.si_1[this.ti_1];
    this.si_1[this.ti_1] = null;
    this.ti_1 = (this.ti_1 + 1 | 0) & (this.si_1.length - 1 | 0);
    return isObject(element) ? element : THROW_CCE();
  };
  ArrayQueue.$metadata$ = classMeta('ArrayQueue');
  function OpDescriptor() {
  }
  OpDescriptor.$metadata$ = classMeta('OpDescriptor');
  function get_UNDEFINED() {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof DispatchedContinuation) {
      var tmp1_resumeCancellableWith = _this__u8e3s4;
      var state = toState_0(result, onCancellation);
      var tmp_0;
      if (tmp1_resumeCancellableWith.sg_1.ji(tmp1_resumeCancellableWith.x1())) {
        tmp1_resumeCancellableWith.ug_1 = state;
        tmp1_resumeCancellableWith.km(get_MODE_CANCELLABLE());
        tmp_0 = tmp1_resumeCancellableWith.sg_1.ki(tmp1_resumeCancellableWith.x1(), tmp1_resumeCancellableWith);
      } else {
        var tmp$ret$0;
        $l$block: {
          var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
          {
          }
          var eventLoop = ThreadLocalEventLoop_getInstance().fj();
          if (false ? eventLoop.zi() : false) {
            tmp$ret$0 = false;
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.yi()) {
            tmp1_resumeCancellableWith.ug_1 = state;
            tmp1_resumeCancellableWith.km(tmp0_executeUnconfined);
            eventLoop.wi(tmp1_resumeCancellableWith);
            tmp_1 = true;
          } else {
            {
              eventLoop.bj(true);
              try {
                {
                  var tmp$ret$3;
                  $l$block_0: {
                    var job = tmp1_resumeCancellableWith.x1().b2(Key_getInstance_2());
                    if (!(job == null) ? !job.oe() : false) {
                      var cause = job.lf();
                      tmp1_resumeCancellableWith.nh(state, cause);
                      var tmp$ret$2;
                      {
                        var tmp$ret$1;
                        {
                          var tmp0_failure = Companion_getInstance();
                          tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                        }
                        tmp$ret$2 = tmp1_resumeCancellableWith.y1(tmp$ret$1);
                      }
                      tmp$ret$3 = true;
                      break $l$block_0;
                    }
                    tmp$ret$3 = false;
                  }
                  if (!tmp$ret$3) {
                    {
                      var tmp$ret$4;
                      {
                        var tmp0_withContinuationContext = tmp1_resumeCancellableWith.tg_1;
                        var tmp1_withContinuationContext = tmp1_resumeCancellableWith.vg_1;
                        tmp$ret$4 = tmp1_resumeCancellableWith.tg_1.y1(result);
                      }
                    }
                  }
                }
                $l$loop: while (true) {
                  if (!eventLoop.ri())
                    break $l$loop;
                }
              } catch ($p) {
                if ($p instanceof Error) {
                  tmp1_resumeCancellableWith.di($p, null);
                } else {
                  throw $p;
                }
              }
              finally {
                eventLoop.cj(true);
              }
            }
            tmp_1 = false;
          }
          tmp$ret$0 = tmp_1;
        }
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      tmp = _this__u8e3s4.y1(result);
    }
    return tmp;
  }
  function resumeCancellableWith$default(_this__u8e3s4, result, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      onCancellation = null;
    return resumeCancellableWith(_this__u8e3s4, result, onCancellation);
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.wg_1.ae_1;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, get_MODE_UNINITIALIZED());
    this.sg_1 = dispatcher;
    this.tg_1 = continuation;
    this.ug_1 = get_UNDEFINED();
    this.vg_1 = threadContextElements(this.x1());
    this.wg_1 = atomic$ref$1(null);
  }
  DispatchedContinuation.prototype.lm = function () {
    return this.tg_1;
  };
  DispatchedContinuation.prototype.x1 = function () {
    return this.tg_1.x1();
  };
  DispatchedContinuation.prototype.mm = function () {
    return this.vg_1;
  };
  DispatchedContinuation.prototype.xg = function () {
    return !(this.wg_1.ae_1 == null);
  };
  DispatchedContinuation.prototype.nm = function () {
    {
      var tmp0_loop = this.wg_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.ae_1;
          if (!(tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()))
            return Unit_getInstance();
        }
      }
    }
  };
  DispatchedContinuation.prototype.li = function () {
    this.nm();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.ch();
    }
  };
  DispatchedContinuation.prototype.bh = function (continuation) {
    {
      var tmp0_loop = this.wg_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.ae_1;
          if (tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()) {
            if (this.wg_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
              return null;
          } else {
            if (tmp1__anonymous__uwfjfc instanceof Error) {
              {
                var tmp0_require = this.wg_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null);
                {
                }
                {
                  {
                  }
                  if (!tmp0_require) {
                    var tmp$ret$0;
                    {
                      tmp$ret$0 = 'Failed requirement.';
                    }
                    var message = tmp$ret$0;
                    throw IllegalArgumentException_init_$Create$(toString_0(message));
                  }
                }
              }
              return tmp1__anonymous__uwfjfc;
            } else {
              var tmp1_error = 'Inconsistent state ' + toString(tmp1__anonymous__uwfjfc);
              throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
            }
          }
        }
      }
    }
  };
  DispatchedContinuation.prototype.ah = function (cause) {
    {
      var tmp0_loop = this.wg_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.ae_1;
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          if (equals(tmp0_subject, get_REUSABLE_CLAIMED())) {
            if (this.wg_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
              return true;
          } else {
            if (tmp0_subject instanceof Error)
              return true;
            else {
              if (this.wg_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null))
                return false;
            }
          }
        }
      }
    }
  };
  DispatchedContinuation.prototype.mh = function () {
    var state = this.ug_1;
    {
    }
    this.ug_1 = get_UNDEFINED();
    return state;
  };
  DispatchedContinuation.prototype.jh = function () {
    return this;
  };
  DispatchedContinuation.prototype.y1 = function (result) {
    var context = this.tg_1.x1();
    var state = toState$default(result, null, 1, null);
    if (this.sg_1.ji(context)) {
      this.ug_1 = state;
      this.km(get_MODE_ATOMIC());
      this.sg_1.ki(context, this);
    } else {
      var tmp$ret$0;
      $l$block: {
        var tmp0_executeUnconfined = get_MODE_ATOMIC();
        {
        }
        var eventLoop = ThreadLocalEventLoop_getInstance().fj();
        if (false ? eventLoop.zi() : false) {
          tmp$ret$0 = false;
          break $l$block;
        }
        var tmp;
        if (eventLoop.yi()) {
          this.ug_1 = state;
          this.km(tmp0_executeUnconfined);
          eventLoop.wi(this);
          tmp = true;
        } else {
          {
            eventLoop.bj(true);
            try {
              {
                var tmp$ret$1;
                {
                  var tmp0_withCoroutineContext = this.x1();
                  var tmp1_withCoroutineContext = this.vg_1;
                  tmp$ret$1 = this.tg_1.y1(result);
                }
              }
              $l$loop: while (true) {
                if (!eventLoop.ri())
                  break $l$loop;
              }
            } catch ($p) {
              if ($p instanceof Error) {
                this.di($p, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.cj(true);
            }
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
      }
    }
  };
  DispatchedContinuation.prototype.nh = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.hi_1(cause);
    }
  };
  DispatchedContinuation.prototype.om = function (state) {
    var job = this.x1().b2(Key_getInstance_2());
    if (!(job == null) ? !job.oe() : false) {
      var cause = job.lf();
      this.nh(state, cause);
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_failure = Companion_getInstance();
          tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        }
        tmp$ret$1 = this.y1(tmp$ret$0);
      }
      return true;
    }
    return false;
  };
  DispatchedContinuation.prototype.pm = function (result) {
    var tmp$ret$0;
    {
      var tmp0_withContinuationContext = this.tg_1;
      var tmp1_withContinuationContext = this.vg_1;
      tmp$ret$0 = this.tg_1.y1(result);
    }
  };
  DispatchedContinuation.prototype.toString = function () {
    return 'DispatchedContinuation[' + this.sg_1 + ', ' + toDebugString(this.tg_1) + ']';
  };
  DispatchedContinuation.$metadata$ = classMeta('DispatchedContinuation', [CoroutineStackFrame, Continuation], undefined, undefined, undefined, DispatchedTask.prototype);
  function executeUnconfined(_this__u8e3s4, contState, mode, doYield, block) {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    {
    }
    var eventLoop = ThreadLocalEventLoop_getInstance().fj();
    if (doYield ? eventLoop.zi() : false)
      return false;
    var tmp;
    if (eventLoop.yi()) {
      _this__u8e3s4.ug_1 = contState;
      _this__u8e3s4.km(mode);
      eventLoop.wi(_this__u8e3s4);
      tmp = true;
    } else {
      {
        eventLoop.bj(true);
        try {
          block();
          $l$loop: while (true) {
            if (!eventLoop.ri())
              break $l$loop;
          }
        } catch ($p) {
          if ($p instanceof Error) {
            _this__u8e3s4.di($p, null);
          } else {
            throw $p;
          }
        }
        finally {
          eventLoop.cj(true);
        }
      }
      tmp = false;
    }
    return tmp;
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function init_properties_DispatchedContinuation_kt_s7rtw6() {
    if (properties_initialized_DispatchedContinuation_kt_2siadq) {
    } else {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function get_MODE_CANCELLABLE() {
    return MODE_CANCELLABLE;
  }
  var MODE_CANCELLABLE;
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.yg_1 = resumeMode;
  }
  DispatchedTask.prototype.km = function (_set____db54di) {
    this.yg_1 = _set____db54di;
  };
  DispatchedTask.prototype.zg = function () {
    return this.yg_1;
  };
  DispatchedTask.prototype.nh = function (takenState, cause) {
  };
  DispatchedTask.prototype.ai = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  DispatchedTask.prototype.bi = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.te_1;
  };
  DispatchedTask.prototype.ci = function () {
    {
    }
    var taskContext = get_taskContext(this);
    var fatalException = null;
    try {
      var tmp = this.jh();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.tg_1;
      var tmp$ret$5;
      {
        var tmp0_withContinuationContext = delegate.vg_1;
        var context = continuation.x1();
        var state = this.mh();
        var exception = this.bi(state);
        var job = (exception == null ? get_isCancellableMode(this.yg_1) : false) ? context.b2(Key_getInstance_2()) : null;
        var tmp_0;
        if (!(job == null) ? !job.oe() : false) {
          var cause = job.lf();
          this.nh(state, cause);
          var tmp$ret$0;
          {
            var tmp0_failure = Companion_getInstance();
            var tmp1_failure = recoverStackTrace(cause, continuation);
            tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
          }
          tmp_0 = continuation.y1(tmp$ret$0);
        } else {
          var tmp_1;
          if (!(exception == null)) {
            var tmp$ret$2;
            {
              var tmp$ret$1;
              {
                var tmp0_failure_0 = Companion_getInstance();
                tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
              }
              tmp$ret$2 = continuation.y1(tmp$ret$1);
            }
            tmp_1 = tmp$ret$2;
          } else {
            var tmp$ret$4;
            {
              var tmp2_resume = this.ai(state);
              var tmp$ret$3;
              {
                var tmp0_success = Companion_getInstance();
                tmp$ret$3 = _Result___init__impl__xyqfz8(tmp2_resume);
              }
              tmp$ret$4 = continuation.y1(tmp$ret$3);
            }
            tmp_1 = tmp$ret$4;
          }
          tmp_0 = tmp_1;
        }
        tmp$ret$5 = tmp_0;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        fatalException = $p;
      } else {
        throw $p;
      }
    }
    finally {
      var tmp$ret$8;
      {
        var tmp_2;
        try {
          var tmp$ret$6;
          {
            var tmp0_success_0 = Companion_getInstance();
            var tmp1_success = Unit_getInstance();
            tmp$ret$6 = _Result___init__impl__xyqfz8(Unit_getInstance());
          }
          tmp_2 = tmp$ret$6;
        } catch ($p) {
          var tmp_3;
          if ($p instanceof Error) {
            var tmp$ret$7;
            {
              var tmp2_failure = Companion_getInstance();
              tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure($p));
            }
            tmp_3 = tmp$ret$7;
          } else {
            throw $p;
          }
          tmp_2 = tmp_3;
        }
        tmp$ret$8 = tmp_2;
      }
      var result = tmp$ret$8;
      this.di(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  DispatchedTask.prototype.di = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
      {
      }
    }
    var tmp0_elvis_lhs = exception;
    var cause = tmp0_elvis_lhs == null ? finallyException : tmp0_elvis_lhs;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.jh().x1(), reason);
  };
  DispatchedTask.$metadata$ = classMeta('DispatchedTask', undefined, undefined, undefined, undefined, SchedulerTask.prototype);
  function get_MODE_UNINITIALIZED() {
    return MODE_UNINITIALIZED;
  }
  var MODE_UNINITIALIZED;
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 ? true : _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    {
    }
    var delegate = _this__u8e3s4.jh();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.yg_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.sg_1;
      var context = delegate.x1();
      if (dispatcher.ji(context)) {
        dispatcher.ki(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function get_MODE_ATOMIC() {
    return MODE_ATOMIC;
  }
  var MODE_ATOMIC;
  function runUnconfinedEventLoop(_this__u8e3s4, eventLoop, block) {
    eventLoop.bj(true);
    try {
      block();
      $l$loop: while (true) {
        if (!eventLoop.ri())
          break $l$loop;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        _this__u8e3s4.di($p, null);
      } else {
        throw $p;
      }
    }
    finally {
      eventLoop.cj(true);
    }
  }
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().fj();
    if (eventLoop.yi()) {
      eventLoop.wi(_this__u8e3s4);
    } else {
      {
        eventLoop.bj(true);
        try {
          {
            resume(_this__u8e3s4, _this__u8e3s4.jh(), true);
          }
          $l$loop: while (true) {
            if (!eventLoop.ri())
              break $l$loop;
          }
        } catch ($p) {
          if ($p instanceof Error) {
            _this__u8e3s4.di($p, null);
          } else {
            throw $p;
          }
        }
        finally {
          eventLoop.cj(true);
        }
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.mh();
    var exception = _this__u8e3s4.bi(state);
    var tmp;
    if (!(exception == null)) {
      var tmp$ret$0;
      {
        var tmp0_failure = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      }
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      {
        var tmp1_success = Companion_getInstance();
        var tmp2_success = _this__u8e3s4.ai(state);
        tmp$ret$1 = _Result___init__impl__xyqfz8(tmp2_success);
      }
      tmp = tmp$ret$1;
    }
    var result = tmp;
    if (undispatched) {
      var tmp3_resumeUndispatchedWith = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      var tmp$ret$2;
      {
        var tmp0_withContinuationContext = tmp3_resumeUndispatchedWith.tg_1;
        var tmp1_withContinuationContext = tmp3_resumeUndispatchedWith.vg_1;
        tmp$ret$2 = tmp3_resumeUndispatchedWith.tg_1.y1(result);
      }
    } else
      delegate.y1(result);
  }
  function Symbol(symbol) {
    this.qm_1 = symbol;
  }
  Symbol.prototype.toString = function () {
    return '<' + this.qm_1 + '>';
  };
  Symbol.$metadata$ = classMeta('Symbol');
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      var tmp$ret$0;
      {
        var tmp0_success = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      }
      tmp = resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        tmp_1 = dispatcherFailure$accessor$glj1hg(completion, $p);
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable$default(_this__u8e3s4, receiver, completion, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    return startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation);
  }
  function dispatcherFailure(completion, e) {
    var tmp$ret$0;
    {
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    }
    completion.y1(tmp$ret$0);
    throw e;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      var tmp$ret$0;
      {
        var tmp0_success = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      }
      var tmp_1 = tmp$ret$0;
      tmp = resumeCancellableWith$default(tmp_0, tmp_1, null, 2, null);
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        tmp_2 = dispatcherFailure$accessor$glj1hg(fatalCompletion, $p);
      } else {
        throw $p;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function dispatcherFailure$accessor$glj1hg(completion, e) {
    return dispatcherFailure(completion, e);
  }
  function startDirect(completion, block) {
    var tmp$ret$0;
    {
      tmp$ret$0 = completion;
    }
    var actualCompletion = tmp$ret$0;
    var tmp;
    try {
      tmp = block(actualCompletion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var tmp$ret$2;
        {
          var tmp$ret$1;
          {
            var tmp0_failure = Companion_getInstance();
            tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure($p));
          }
          tmp$ret$2 = actualCompletion.y1(tmp$ret$1);
        }
        return Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var value = tmp;
    if (!(value === get_COROUTINE_SUSPENDED())) {
      var tmp$ret$4;
      {
        var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$3;
        {
          var tmp0_success = Companion_getInstance();
          tmp$ret$3 = _Result___init__impl__xyqfz8(tmp0_resume);
        }
        tmp$ret$4 = actualCompletion.y1(tmp$ret$3);
      }
    }
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    var tmp$ret$8;
    $l$block: {
      var tmp$ret$0;
      {
        tmp$ret$0 = completion;
      }
      var actualCompletion = tmp$ret$0;
      var tmp;
      try {
        var tmp$ret$5;
        {
          var tmp$ret$4;
          {
            var tmp0_withCoroutineContext = completion.x1();
            var tmp$ret$3;
            {
              var tmp$ret$2;
              {
                var tmp$ret$1;
                {
                  tmp$ret$1 = _this__u8e3s4;
                }
                var a = tmp$ret$1;
                tmp$ret$2 = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.la(receiver, actualCompletion);
              }
              tmp$ret$3 = tmp$ret$2;
            }
            tmp$ret$4 = tmp$ret$3;
          }
          tmp$ret$5 = tmp$ret$4;
        }
        tmp = tmp$ret$5;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var tmp$ret$7;
          {
            var tmp$ret$6;
            {
              var tmp0_failure = Companion_getInstance();
              tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure($p));
            }
            tmp$ret$7 = actualCompletion.y1(tmp$ret$6);
          }
          tmp$ret$8 = Unit_getInstance();
          break $l$block;
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        var tmp$ret$10;
        {
          var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
          var tmp$ret$9;
          {
            var tmp0_success = Companion_getInstance();
            tmp$ret$9 = _Result___init__impl__xyqfz8(tmp0_resume);
          }
          tmp$ret$10 = actualCompletion.y1(tmp$ret$9);
        }
      }
    }
  }
  function SelectClause0() {
  }
  SelectClause0.$metadata$ = interfaceMeta('SelectClause0');
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  CompletionHandlerBase.$metadata$ = classMeta('CompletionHandlerBase', undefined, undefined, undefined, undefined, LinkedListNode.prototype);
  function invokeIt(_this__u8e3s4, cause) {
    var tmp0_subject = typeof _this__u8e3s4;
    if (tmp0_subject === 'function')
      _this__u8e3s4(cause);
    else {
      var tmp$ret$0;
      {
        tmp$ret$0 = _this__u8e3s4;
      }
      tmp$ret$0.invoke(cause);
    }
  }
  function get_asHandler(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4;
    }
    return tmp$ret$0;
  }
  function CancelHandlerBase() {
  }
  CancelHandlerBase.$metadata$ = classMeta('CancelHandlerBase');
  function toDebugString(_this__u8e3s4) {
    return toString_0(_this__u8e3s4);
  }
  function withCoroutineContext(context, countOrElement, block) {
    return block();
  }
  function withContinuationContext(continuation, countOrElement, block) {
    return block();
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        var tmp$ret$0;
        {
          var tmp0_asDynamic = window;
          tmp$ret$0 = tmp0_asDynamic;
        }
        tmp_1 = tmp$ret$0 != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp$ret$1;
        {
          var tmp1_asDynamic = window;
          tmp$ret$1 = tmp1_asDynamic;
        }
        tmp_0 = !(typeof tmp$ret$1.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' ? true : typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return ((((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.userAgent != null : false) ? !(typeof navigator.userAgent === 'undefined') : false) ? !(typeof navigator.userAgent.match === 'undefined') : false) ? navigator.userAgent.match('\\bjsdom\\b') : false;
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.ne().i2(context);
    return (!(combined === Dispatchers_getInstance().cm_1) ? combined.b2(Key_getInstance()) == null : false) ? combined.i2(Dispatchers_getInstance().cm_1) : combined;
  }
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function handleCoroutineExceptionImpl(context, exception) {
    console.error(exception);
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).w6();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4;
    }
    var result = tmp$ret$0.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      var tmp$ret$1;
      {
        tmp$ret$1 = _this__u8e3s4;
      }
      tmp$ret$1.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function assert(value) {
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.cm_1 = createDefaultDispatcher();
    this.dm_1 = Unconfined_getInstance();
    this.em_1 = new JsMainDispatcher(this.cm_1, false);
    this.fm_1 = null;
  }
  Dispatchers.prototype.gm = function () {
    var tmp0_elvis_lhs = this.fm_1;
    return tmp0_elvis_lhs == null ? this.em_1 : tmp0_elvis_lhs;
  };
  Dispatchers.$metadata$ = objectMeta('Dispatchers');
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.sm_1 = delegate;
    this.tm_1 = invokeImmediately;
    this.um_1 = this.tm_1 ? this : new JsMainDispatcher(this.sm_1, true);
  }
  JsMainDispatcher.prototype.am = function () {
    return this.um_1;
  };
  JsMainDispatcher.prototype.ji = function (context) {
    return !this.tm_1;
  };
  JsMainDispatcher.prototype.ki = function (context, block) {
    return this.sm_1.ki(context, block);
  };
  JsMainDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.bm();
    return tmp0_elvis_lhs == null ? this.sm_1.toString() : tmp0_elvis_lhs;
  };
  JsMainDispatcher.$metadata$ = classMeta('JsMainDispatcher', undefined, undefined, undefined, undefined, MainCoroutineDispatcher.prototype);
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  UnconfinedEventLoop.prototype.ki = function (context, block) {
    unsupported();
  };
  UnconfinedEventLoop.$metadata$ = classMeta('UnconfinedEventLoop', undefined, undefined, undefined, undefined, EventLoop.prototype);
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$(message, cause, this);
    this.zm_1 = job;
    captureStack(this, JobCancellationException);
  }
  JobCancellationException.prototype.toString = function () {
    return CancellationException.prototype.toString.call(this) + '; job=' + this.zm_1;
  };
  JobCancellationException.prototype.equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.zm_1, this.zm_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  JobCancellationException.prototype.hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.zm_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  JobCancellationException.$metadata$ = classMeta('JobCancellationException', undefined, undefined, undefined, undefined, CancellationException.prototype);
  function addSuppressedThrowable(_this__u8e3s4, other) {
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  NodeDispatcher.prototype.cn = function () {
    process.nextTick(this.mn().in_1);
  };
  NodeDispatcher.$metadata$ = objectMeta('NodeDispatcher', undefined, undefined, undefined, undefined, SetTimeoutBasedDispatcher.prototype);
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  SetTimeoutDispatcher.prototype.cn = function () {
    setTimeout(this.mn().in_1, 0);
  };
  SetTimeoutDispatcher.$metadata$ = objectMeta('SetTimeoutDispatcher', undefined, undefined, undefined, undefined, SetTimeoutBasedDispatcher.prototype);
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.un();
      return Unit_getInstance();
    };
  }
  function ScheduledMessageQueue($outer) {
    this.jn_1 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp.in_1 = SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this);
  }
  ScheduledMessageQueue.prototype.vn = function () {
    this.jn_1.cn();
  };
  ScheduledMessageQueue.prototype.wn = function () {
    setTimeout(this.in_1, 0);
  };
  ScheduledMessageQueue.$metadata$ = classMeta('ScheduledMessageQueue', undefined, undefined, undefined, undefined, MessageQueue.prototype);
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.ln_1 = new ScheduledMessageQueue(this);
  }
  SetTimeoutBasedDispatcher.prototype.mn = function () {
    return this.ln_1;
  };
  SetTimeoutBasedDispatcher.prototype.ki = function (context, block) {
    this.ln_1.xn(block);
  };
  SetTimeoutBasedDispatcher.$metadata$ = classMeta('SetTimeoutBasedDispatcher', [Delay], undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function MessageQueue() {
    ArrayQueue.call(this);
    this.sn_1 = 16;
    this.tn_1 = false;
  }
  MessageQueue.prototype.xn = function (element) {
    this.xi(element);
    if (!this.tn_1) {
      this.tn_1 = true;
      this.vn();
    }
  };
  MessageQueue.prototype.un = function () {
    try {
      {
        var tmp0_repeat = this.sn_1;
        {
        }
        var inductionVariable = 0;
        if (inductionVariable < tmp0_repeat)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            {
              var tmp0_elvis_lhs = this.vi();
              var tmp;
              if (tmp0_elvis_lhs == null) {
                return Unit_getInstance();
              } else {
                tmp = tmp0_elvis_lhs;
              }
              var element = tmp;
              element.ci();
            }
          }
           while (inductionVariable < tmp0_repeat);
      }
    }finally {
      if (this.aj()) {
        this.tn_1 = false;
      } else {
        this.wn();
      }
    }
  };
  MessageQueue.$metadata$ = classMeta('MessageQueue', undefined, undefined, undefined, undefined, ArrayQueue.prototype);
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.zn_1 = window_0;
    this.ao_1 = new WindowMessageQueue(this.zn_1);
  }
  WindowDispatcher.prototype.ki = function (context, block) {
    return this.ao_1.xn(block);
  };
  WindowDispatcher.$metadata$ = classMeta('WindowDispatcher', [Delay], undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.go_1 ? event.data == this$0.ho_1 : false) {
        event.stopPropagation();
        tmp = this$0.un();
      }
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.un();
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.go_1 = window_0;
    this.ho_1 = 'dispatchCoroutine';
    this.go_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  WindowMessageQueue.prototype.vn = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  WindowMessageQueue.prototype.wn = function () {
    this.go_1.postMessage(this.ho_1, '*');
  };
  WindowMessageQueue.$metadata$ = classMeta('WindowMessageQueue', undefined, undefined, undefined, undefined, MessageQueue.prototype);
  function await_0(_this__u8e3s4, $cont) {
    var tmp$ret$0;
    {
      var tmp0__anonymous__q1qw7t = $cont;
      var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
      cancellable.kh();
      {
        var tmp = await$lambda(cancellable);
        _this__u8e3s4.then(tmp, await$lambda_0(cancellable));
      }
      tmp$ret$0 = cancellable.zh();
    }
    return tmp$ret$0;
  }
  function await$lambda($cancellable) {
    return function (it) {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_success = Companion_getInstance();
          tmp$ret$0 = _Result___init__impl__xyqfz8(it);
        }
        tmp$ret$1 = $cancellable.y1(tmp$ret$0);
      }
      return Unit_getInstance();
    };
  }
  function await$lambda_0($cancellable) {
    return function (it) {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_failure = Companion_getInstance();
          tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(it));
        }
        tmp$ret$1 = $cancellable.y1(tmp$ret$0);
      }
      return Unit_getInstance();
    };
  }
  function Runnable() {
  }
  Runnable.$metadata$ = interfaceMeta('Runnable');
  function SchedulerTask() {
  }
  SchedulerTask.$metadata$ = classMeta('SchedulerTask', [Runnable]);
  function get_taskContext(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4;
    }
    var tmp0_elvis_lhs = tmp$ret$0.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$2;
      {
        var tmp0_also = new WindowDispatcher(_this__u8e3s4);
        {
        }
        {
          var tmp$ret$1;
          {
            tmp$ret$1 = _this__u8e3s4;
          }
          tmp$ret$1.coroutineDispatcher = tmp0_also;
        }
        tmp$ret$2 = tmp0_also;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  LinkedListHead.$metadata$ = classMeta('LinkedListHead', undefined, undefined, undefined, undefined, LinkedListNode.prototype);
  function LinkedListNode() {
    this.pj_1 = this;
    this.qj_1 = this;
    this.rj_1 = false;
  }
  LinkedListNode.prototype.sj = function () {
    return this.pj_1;
  };
  LinkedListNode.prototype.tj = function () {
    return this.pj_1;
  };
  LinkedListNode.prototype.uj = function () {
    return this.qj_1;
  };
  LinkedListNode.prototype.vj = function () {
    return this.rj_1;
  };
  LinkedListNode.prototype.wj = function (node) {
    var prev = this.qj_1;
    node.pj_1 = this;
    node.qj_1 = prev;
    prev.pj_1 = node;
    this.qj_1 = node;
  };
  LinkedListNode.prototype.ek = function () {
    return this.xj();
  };
  LinkedListNode.prototype.xj = function () {
    if (this.rj_1)
      return false;
    var prev = this.qj_1;
    var next = this.pj_1;
    prev.pj_1 = next;
    next.qj_1 = prev;
    this.rj_1 = true;
    return true;
  };
  LinkedListNode.prototype.fk = function (node) {
    if (!(this.pj_1 === this))
      return false;
    this.wj(node);
    return true;
  };
  LinkedListNode.prototype.yj = function (node, condition) {
    if (!condition())
      return false;
    this.wj(node);
    return true;
  };
  LinkedListNode.$metadata$ = classMeta('LinkedListNode');
  function probeCoroutineCreated(completion) {
    return completion;
  }
  function unwrap(exception) {
    return exception;
  }
  function CoroutineStackFrame() {
  }
  CoroutineStackFrame.$metadata$ = interfaceMeta('CoroutineStackFrame');
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function synchronized(lock, block) {
    return block();
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.gj_1 = null;
  }
  CommonThreadLocal.prototype.hj = function () {
    var tmp = this.gj_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  CommonThreadLocal.prototype.ij = function (value) {
    this.gj_1 = value;
  };
  CommonThreadLocal.$metadata$ = classMeta('CommonThreadLocal');
  //region block: post-declaration
  JobSupport.prototype.pf = invokeOnCompletion$default;
  JobSupport.prototype.i2 = plus;
  JobSupport.prototype.b2 = get;
  JobSupport.prototype.h2 = fold;
  JobSupport.prototype.g2 = minusKey;
  AbstractCoroutine.prototype.pf = invokeOnCompletion$default;
  AbstractCoroutine.prototype.i2 = plus;
  AbstractCoroutine.prototype.b2 = get;
  AbstractCoroutine.prototype.h2 = fold;
  AbstractCoroutine.prototype.g2 = minusKey;
  StandaloneCoroutine.prototype.pf = invokeOnCompletion$default;
  StandaloneCoroutine.prototype.i2 = plus;
  StandaloneCoroutine.prototype.b2 = get;
  StandaloneCoroutine.prototype.h2 = fold;
  StandaloneCoroutine.prototype.g2 = minusKey;
  LazyStandaloneCoroutine.prototype.pf = invokeOnCompletion$default;
  LazyStandaloneCoroutine.prototype.i2 = plus;
  LazyStandaloneCoroutine.prototype.b2 = get;
  LazyStandaloneCoroutine.prototype.h2 = fold;
  LazyStandaloneCoroutine.prototype.g2 = minusKey;
  CoroutineDispatcher.prototype.b2 = get_0;
  CoroutineDispatcher.prototype.h2 = fold;
  CoroutineDispatcher.prototype.g2 = minusKey_0;
  CoroutineDispatcher.prototype.i2 = plus;
  EventLoop.prototype.i2 = plus;
  EventLoop.prototype.b2 = get_0;
  EventLoop.prototype.h2 = fold;
  EventLoop.prototype.g2 = minusKey_0;
  MainCoroutineDispatcher.prototype.i2 = plus;
  MainCoroutineDispatcher.prototype.b2 = get_0;
  MainCoroutineDispatcher.prototype.h2 = fold;
  MainCoroutineDispatcher.prototype.g2 = minusKey_0;
  Unconfined.prototype.i2 = plus;
  Unconfined.prototype.b2 = get_0;
  Unconfined.prototype.h2 = fold;
  Unconfined.prototype.g2 = minusKey_0;
  JsMainDispatcher.prototype.i2 = plus;
  JsMainDispatcher.prototype.b2 = get_0;
  JsMainDispatcher.prototype.h2 = fold;
  JsMainDispatcher.prototype.g2 = minusKey_0;
  UnconfinedEventLoop.prototype.i2 = plus;
  UnconfinedEventLoop.prototype.b2 = get_0;
  UnconfinedEventLoop.prototype.h2 = fold;
  UnconfinedEventLoop.prototype.g2 = minusKey_0;
  SetTimeoutBasedDispatcher.prototype.i2 = plus;
  SetTimeoutBasedDispatcher.prototype.b2 = get_0;
  SetTimeoutBasedDispatcher.prototype.h2 = fold;
  SetTimeoutBasedDispatcher.prototype.g2 = minusKey_0;
  NodeDispatcher.prototype.i2 = plus;
  NodeDispatcher.prototype.b2 = get_0;
  NodeDispatcher.prototype.h2 = fold;
  NodeDispatcher.prototype.g2 = minusKey_0;
  SetTimeoutDispatcher.prototype.i2 = plus;
  SetTimeoutDispatcher.prototype.b2 = get_0;
  SetTimeoutDispatcher.prototype.h2 = fold;
  SetTimeoutDispatcher.prototype.g2 = minusKey_0;
  WindowDispatcher.prototype.i2 = plus;
  WindowDispatcher.prototype.b2 = get_0;
  WindowDispatcher.prototype.h2 = fold;
  WindowDispatcher.prototype.g2 = minusKey_0;
  //endregion
  //region block: init
  UNDECIDED = 0;
  SUSPENDED = 1;
  RESUMED = 2;
  FALSE = 0;
  TRUE = 1;
  MODE_CANCELLABLE = 1;
  MODE_UNINITIALIZED = -1;
  MODE_ATOMIC = 0;
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = await_0;
  _.$_$.b = launch$default;
  _.$_$.c = GlobalScope_getInstance;
  _.$_$.d = CoroutineScope;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js.map