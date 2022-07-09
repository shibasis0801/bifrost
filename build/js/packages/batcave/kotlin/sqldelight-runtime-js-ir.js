(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'sqldelight-runtime-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'sqldelight-runtime-js-ir'.");
    }
    root['sqldelight-runtime-js-ir'] = factory(typeof this['sqldelight-runtime-js-ir'] === 'undefined' ? {} : this['sqldelight-runtime-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.b1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.e;
  var classMeta = kotlin_kotlin.$_$.l2;
  var interfaceMeta = kotlin_kotlin.$_$.r2;
  //endregion
  //region block: pre-declaration
  SimpleQuery.prototype = Object.create(Query.prototype);
  SimpleQuery.prototype.constructor = SimpleQuery;
  function executeQuery$default(identifier, sql, parameters, binders, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      binders = null;
    return $handler == null ? this.nc(identifier, sql, parameters, binders) : $handler(identifier, sql, parameters, binders);
  }
  function execute$default(identifier, sql, parameters, binders, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      binders = null;
    return $handler == null ? this.oc(identifier, sql, parameters, binders) : $handler(identifier, sql, parameters, binders);
  }
  //endregion
  function Query(queries, mapper) {
    this.hb_1 = queries;
    this.ib_1 = mapper;
    this.jb_1 = new QueryLock();
    this.kb_1 = copyOnWriteList_0();
  }
  Query.prototype.lb = function () {
    var tmp$ret$0;
    {
      var tmp0_withLock = this.jb_1;
      var tmp0_forEach = this.kb_1;
      var tmp0_iterator = tmp0_forEach.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        element.mb();
      }
      tmp$ret$0 = Unit_getInstance();
    }
  };
  Query.prototype.ob = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$();
    }
    var result = tmp$ret$0;
    var tmp$ret$1;
    $l$block: {
      var tmp0_use = this.nb();
      var exception = null;
      try {
        while (tmp0_use.e()) {
          result.b(this.ib_1(tmp0_use));
        }
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          exception = $p;
          throw $p;
        } else {
          throw $p;
        }
      }
      finally {
        if (tmp0_use == null) {
        } else if (exception == null)
          tmp0_use.pb();
        else
          try {
            tmp0_use.pb();
          } catch ($p) {
            if ($p instanceof Error) {
            } else {
              throw $p;
            }
          }
      }
    }
    return result;
  };
  Query.$metadata$ = classMeta('Query');
  function Query_0(identifier, queries, driver, fileName, label, query, mapper) {
    return new SimpleQuery(identifier, queries, driver, fileName, label, query, mapper);
  }
  function SimpleQuery(identifier, queries, driver, fileName, label, query, mapper) {
    Query.call(this, queries, mapper);
    this.ub_1 = identifier;
    this.vb_1 = driver;
    this.wb_1 = fileName;
    this.xb_1 = label;
    this.yb_1 = query;
  }
  SimpleQuery.prototype.nb = function () {
    return this.vb_1.zb(this.ub_1, this.yb_1, 0, null, 8, null);
  };
  SimpleQuery.prototype.toString = function () {
    return this.wb_1 + ':' + this.xb_1;
  };
  SimpleQuery.$metadata$ = classMeta('SimpleQuery', undefined, undefined, undefined, undefined, Query.prototype);
  function Transacter() {
  }
  Transacter.$metadata$ = interfaceMeta('Transacter');
  function TransacterImpl(driver) {
    this.ac_1 = driver;
  }
  TransacterImpl.prototype.bc = function (identifier, queryList) {
    var transaction = this.ac_1.cc();
    if (!(transaction == null)) {
      if (!transaction.gc_1.h1(identifier)) {
        {
          var tmp0_set = transaction.gc_1;
          tmp0_set.u1(identifier, queryList);
        }
      }
    } else {
      {
        var tmp1_forEach = queryList();
        var tmp0_iterator = tmp1_forEach.c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          {
            element.lb();
          }
        }
      }
    }
  };
  TransacterImpl.$metadata$ = classMeta('TransacterImpl', [Transacter]);
  function SqlCursor() {
  }
  SqlCursor.$metadata$ = interfaceMeta('SqlCursor', [Closeable]);
  function Schema() {
  }
  Schema.$metadata$ = interfaceMeta('Schema');
  function SqlDriver() {
  }
  SqlDriver.$metadata$ = interfaceMeta('SqlDriver', [Closeable]);
  function SqlPreparedStatement() {
  }
  SqlPreparedStatement.$metadata$ = interfaceMeta('SqlPreparedStatement');
  function Closeable() {
  }
  Closeable.$metadata$ = interfaceMeta('Closeable');
  function use(_this__u8e3s4, body) {
    var exception = null;
    try {
      return body(_this__u8e3s4);
    } catch ($p) {
      if ($p instanceof Error) {
        exception = $p;
        throw $p;
      } else {
        throw $p;
      }
    }
    finally {
      if (_this__u8e3s4 == null) {
      } else if (exception == null)
        _this__u8e3s4.pb();
      else
        try {
          _this__u8e3s4.pb();
        } catch ($p) {
          if ($p instanceof Error) {
          } else {
            throw $p;
          }
        }
    }
  }
  function copyOnWriteList() {
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$();
    }
    return tmp$ret$0;
  }
  function QueryLock() {
  }
  QueryLock.$metadata$ = classMeta('QueryLock');
  function copyOnWriteList_0() {
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$();
    }
    return tmp$ret$0;
  }
  function withLock(_this__u8e3s4, block) {
    return block();
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SqlCursor;
  _.$_$.b = Schema;
  _.$_$.c = SqlDriver;
  _.$_$.d = SqlPreparedStatement;
  _.$_$.e = copyOnWriteList;
  _.$_$.f = Query_0;
  _.$_$.g = TransacterImpl;
  _.$_$.h = Transacter;
  _.$_$.i = executeQuery$default;
  _.$_$.j = execute$default;
  //endregion
  return _;
}));

//# sourceMappingURL=sqldelight-runtime-js-ir.js.map