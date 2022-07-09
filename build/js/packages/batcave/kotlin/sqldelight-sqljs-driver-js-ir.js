(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'sql.js', './kotlin-kotlin-stdlib-js-ir.js', './sqldelight-runtime-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('sql.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./sqldelight-runtime-js-ir.js'));
  else {
    if (typeof initSqlJs === 'undefined') {
      throw new Error("Error loading module 'sqldelight-sqljs-driver-js-ir'. Its dependency 'sql.js' was not found. Please, check whether 'sql.js' is loaded prior to 'sqldelight-sqljs-driver-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'sqldelight-sqljs-driver-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'sqldelight-sqljs-driver-js-ir'.");
    }
    if (typeof this['sqldelight-runtime-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'sqldelight-sqljs-driver-js-ir'. Its dependency 'sqldelight-runtime-js-ir' was not found. Please, check whether 'sqldelight-runtime-js-ir' is loaded prior to 'sqldelight-sqljs-driver-js-ir'.");
    }
    root['sqldelight-sqljs-driver-js-ir'] = factory(typeof this['sqldelight-sqljs-driver-js-ir'] === 'undefined' ? {} : this['sqldelight-sqljs-driver-js-ir'], initSqlJs, this['kotlin-kotlin-stdlib-js-ir'], this['sqldelight-runtime-js-ir']);
  }
}(this, function (_, initSqlJs, kotlin_kotlin, kotlin_com_squareup_sqldelight_runtime) {
  'use strict';
  //region block: imports
  var copyToArray = kotlin_kotlin.$_$.i1;
  var Unit_getInstance = kotlin_kotlin.$_$.b1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.h;
  var executeQuery$default = kotlin_com_squareup_sqldelight_runtime.$_$.i;
  var execute$default = kotlin_com_squareup_sqldelight_runtime.$_$.j;
  var SqlDriver = kotlin_com_squareup_sqldelight_runtime.$_$.c;
  var classMeta = kotlin_kotlin.$_$.l2;
  var numberToLong = kotlin_kotlin.$_$.u2;
  var SqlCursor = kotlin_com_squareup_sqldelight_runtime.$_$.a;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.e;
  var SqlPreparedStatement = kotlin_com_squareup_sqldelight_runtime.$_$.d;
  var listOf = kotlin_kotlin.$_$.l1;
  var plus = kotlin_kotlin.$_$.m1;
  //endregion
  //region block: pre-declaration
  //endregion
  function initSqlDriver(schema) {
    return withSchema(driver(initDb$default(null, 1, null)), schema);
  }
  function withSchema(_this__u8e3s4, schema) {
    return _this__u8e3s4.then(withSchema$lambda(schema));
  }
  function driver(_this__u8e3s4) {
    return _this__u8e3s4.then(driver$lambda());
  }
  function bind(_this__u8e3s4, $this, binders) {
    var tmp0_safe_receiver = binders;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      {
        {
        }
        var tmp$ret$1;
        {
          var bound = new JsSqlPreparedStatement();
          binders(bound);
          var tmp$ret$0;
          {
            var tmp0_toTypedArray = bound.sc_1;
            tmp$ret$0 = copyToArray(tmp0_toTypedArray);
          }
          tmp$ret$1 = _this__u8e3s4.bind(tmp$ret$0);
        }
        tmp$ret$2 = tmp$ret$1;
      }
      tmp = tmp$ret$2;
    }
    return tmp;
  }
  function createOrGetStatement($this, identifier, sql) {
    var tmp;
    if (identifier == null) {
      tmp = $this.tc_1.prepare(sql);
    } else {
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_getOrPut = $this.uc_1;
          var value = tmp0_getOrPut.j1(identifier);
          var tmp_0;
          if (value == null) {
            var tmp$ret$0;
            {
              tmp$ret$0 = $this.tc_1.prepare(sql);
            }
            var answer = tmp$ret$0;
            tmp0_getOrPut.u1(identifier, answer);
            tmp_0 = answer;
          } else {
            tmp_0 = value;
          }
          tmp$ret$1 = tmp_0;
        }
        var tmp1_apply = tmp$ret$1;
        {
        }
        {
          tmp1_apply.reset();
        }
        tmp$ret$2 = tmp1_apply;
      }
      tmp = tmp$ret$2;
    }
    return tmp;
  }
  function JsSqlDriver(db) {
    this.tc_1 = db;
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = LinkedHashMap_init_$Create$();
    }
    tmp.uc_1 = tmp$ret$0;
    this.vc_1 = null;
  }
  JsSqlDriver.prototype.nc = function (identifier, sql, parameters, binders) {
    var tmp$ret$1;
    {
      var tmp0_run = createOrGetStatement(this, identifier, sql);
      {
      }
      var tmp$ret$0;
      {
        bind(tmp0_run, this, binders);
        tmp$ret$0 = new JsSqlCursor(tmp0_run);
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  };
  JsSqlDriver.prototype.oc = function (identifier, sql, parameters, binders) {
    var tmp$ret$0;
    {
      var tmp0_run = createOrGetStatement(this, identifier, sql);
      {
      }
      bind(tmp0_run, this, binders);
      tmp0_run.step();
      tmp$ret$0 = tmp0_run.freemem();
    }
    return tmp$ret$0;
  };
  JsSqlDriver.prototype.cc = function () {
    return this.vc_1;
  };
  JsSqlDriver.prototype.pb = function () {
    return this.tc_1.close();
  };
  JsSqlDriver.$metadata$ = classMeta('JsSqlDriver', [SqlDriver]);
  function JsSqlCursor(statement) {
    this.wc_1 = statement;
  }
  JsSqlCursor.prototype.e = function () {
    return this.wc_1.step();
  };
  JsSqlCursor.prototype.kc = function (index) {
    return this.wc_1.get()[index];
  };
  JsSqlCursor.prototype.lc = function (index) {
    var tmp = this.wc_1.get()[index];
    var tmp0_safe_receiver = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : null;
    return tmp0_safe_receiver == null ? null : numberToLong(tmp0_safe_receiver);
  };
  JsSqlCursor.prototype.pb = function () {
    this.wc_1.freemem();
  };
  JsSqlCursor.$metadata$ = classMeta('JsSqlCursor', [SqlCursor]);
  function JsSqlPreparedStatement() {
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$();
    }
    tmp.sc_1 = tmp$ret$0;
  }
  JsSqlPreparedStatement.prototype.xc = function () {
    return this.sc_1;
  };
  JsSqlPreparedStatement.prototype.qc = function (index, long) {
    var tmp0_safe_receiver = long;
    this.sc_1.b(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n9());
  };
  JsSqlPreparedStatement.prototype.rc = function (index, string) {
    this.sc_1.b(string);
  };
  JsSqlPreparedStatement.$metadata$ = classMeta('JsSqlPreparedStatement', [SqlPreparedStatement]);
  function withSchema$lambda($schema) {
    return function (it) {
      var tmp0_safe_receiver = $schema;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.mc(it);
      }
      return it;
    };
  }
  function driver$lambda() {
    return function (it) {
      return new JsSqlDriver(it);
    };
  }
  function initDb(config) {
    var tmp = invoke_0(initSqlJs, config);
    return tmp.then(initDb$lambda());
  }
  function initDb$default(config, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      config = {};
    return initDb(config);
  }
  function invoke(_this__u8e3s4) {
    return createInstance(_this__u8e3s4, []);
  }
  function invoke_0(_this__u8e3s4, config) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4;
    }
    return tmp$ret$0(config);
  }
  function createInstance(type, args) {
    var tmp$ret$0;
    {
      var tmp0_toTypedArray = plus(listOf(null), args);
      tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    }
    var argsArray = tmp$ret$0;
    return new (Function.prototype.bind.apply(type, argsArray))();
  }
  function initDb$lambda() {
    return function (it) {
      return invoke(it.Database);
    };
  }
  //region block: post-declaration
  JsSqlDriver.prototype.zb = executeQuery$default;
  JsSqlDriver.prototype.pc = execute$default;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = initSqlDriver;
  //endregion
  return _;
}));

//# sourceMappingURL=sqldelight-sqljs-driver-js-ir.js.map