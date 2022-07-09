(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './sqldelight-runtime-js-ir.js', './kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './sqldelight-sqljs-driver-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./sqldelight-runtime-js-ir.js'), require('./kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./sqldelight-sqljs-driver-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'batcave'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'batcave'.");
    }
    if (typeof this['sqldelight-runtime-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'batcave'. Its dependency 'sqldelight-runtime-js-ir' was not found. Please, check whether 'sqldelight-runtime-js-ir' is loaded prior to 'batcave'.");
    }
    if (typeof kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core === 'undefined') {
      throw new Error("Error loading module 'batcave'. Its dependency 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core' was not found. Please, check whether 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core' is loaded prior to 'batcave'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'batcave'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'batcave'.");
    }
    if (typeof this['sqldelight-sqljs-driver-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'batcave'. Its dependency 'sqldelight-sqljs-driver-js-ir' was not found. Please, check whether 'sqldelight-sqljs-driver-js-ir' is loaded prior to 'batcave'.");
    }
    root.batcave = factory(typeof batcave === 'undefined' ? {} : batcave, this['kotlin-kotlin-stdlib-js-ir'], this['sqldelight-runtime-js-ir'], kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['sqldelight-sqljs-driver-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_com_squareup_sqldelight_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_squareup_sqldelight_sqljs_driver) {
  'use strict';
  //region block: imports
  var getKClass = kotlin_kotlin.$_$.b;
  var objectMeta = kotlin_kotlin.$_$.v2;
  var Transacter = kotlin_com_squareup_sqldelight_runtime.$_$.h;
  var interfaceMeta = kotlin_kotlin.$_$.r2;
  var Schema = kotlin_com_squareup_sqldelight_runtime.$_$.b;
  var TransacterImpl = kotlin_com_squareup_sqldelight_runtime.$_$.g;
  var classMeta = kotlin_kotlin.$_$.l2;
  var ensureNotNull = kotlin_kotlin.$_$.j3;
  var Unit_getInstance = kotlin_kotlin.$_$.b1;
  var copyOnWriteList = kotlin_com_squareup_sqldelight_runtime.$_$.e;
  var Query = kotlin_com_squareup_sqldelight_runtime.$_$.f;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var THROW_CCE = kotlin_kotlin.$_$.g3;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var getStringHashCode = kotlin_kotlin.$_$.p2;
  var println = kotlin_kotlin.$_$.g2;
  var GlobalScope_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var CoroutineImpl = kotlin_kotlin.$_$.d2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.o1;
  var Long = kotlin_kotlin.$_$.e3;
  var isInterface = kotlin_kotlin.$_$.s2;
  var toString = kotlin_kotlin.$_$.w2;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var KSuspendFunction1 = kotlin_kotlin.$_$.z2;
  var SuspendFunction1 = kotlin_kotlin.$_$.e2;
  var initSqlDriver = kotlin_com_squareup_sqldelight_sqljs_driver.$_$.a;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  //endregion
  //region block: pre-declaration
  BatcaveDBImpl.prototype = Object.create(TransacterImpl.prototype);
  BatcaveDBImpl.prototype.constructor = BatcaveDBImpl;
  HelloQueriesImpl.prototype = Object.create(TransacterImpl.prototype);
  HelloQueriesImpl.prototype.constructor = HelloQueriesImpl;
  $getDatabaseCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $getDatabaseCOROUTINE$0.prototype.constructor = $getDatabaseCOROUTINE$0;
  $invokeCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $invokeCOROUTINE$1.prototype.constructor = $invokeCOROUTINE$1;
  helloSQL$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  helloSQL$slambda$slambda.prototype.constructor = helloSQL$slambda$slambda;
  helloSQL$slambda.prototype = Object.create(CoroutineImpl.prototype);
  helloSQL$slambda.prototype.constructor = helloSQL$slambda;
  //endregion
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.io = function () {
    return get_schema(getKClass(BatcaveDB));
  };
  Companion.prototype.jo = function (driver) {
    return newInstance(getKClass(BatcaveDB), driver);
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function BatcaveDB() {
    Companion_getInstance();
  }
  BatcaveDB.$metadata$ = interfaceMeta('BatcaveDB', [Transacter]);
  function HelloQueries() {
  }
  HelloQueries.$metadata$ = interfaceMeta('HelloQueries', [Transacter]);
  function get_schema(_this__u8e3s4) {
    return Schema_getInstance();
  }
  function newInstance(_this__u8e3s4, driver) {
    return new BatcaveDBImpl(driver);
  }
  function Schema_0() {
    Schema_instance = this;
  }
  Schema_0.prototype.mc = function (driver) {
    driver.pc(null, 'CREATE TABLE hockeyPlayer (\n  player_number INTEGER NOT NULL,\n  full_name TEXT NOT NULL\n)', 0, null, 8, null);
    driver.pc(null, 'CREATE INDEX hockeyPlayer_full_name ON hockeyPlayer(full_name)', 0, null, 8, null);
    driver.pc(null, "INSERT INTO hockeyPlayer (player_number, full_name)\nVALUES (15, 'Ryan Getzlaf')", 0, null, 8, null);
  };
  Schema_0.$metadata$ = objectMeta('Schema', [Schema]);
  var Schema_instance;
  function Schema_getInstance() {
    if (Schema_instance == null)
      new Schema_0();
    return Schema_instance;
  }
  function BatcaveDBImpl(driver) {
    TransacterImpl.call(this, driver);
    this.oo_1 = new HelloQueriesImpl(this, driver);
  }
  BatcaveDBImpl.prototype.ko = function () {
    return this.oo_1;
  };
  BatcaveDBImpl.$metadata$ = classMeta('BatcaveDBImpl', [BatcaveDB], undefined, undefined, undefined, TransacterImpl.prototype);
  function HelloQueriesImpl$selectAll$lambda($mapper) {
    return function (cursor) {
      return $mapper(ensureNotNull(cursor.lc(0)), ensureNotNull(cursor.kc(1)));
    };
  }
  function HelloQueriesImpl$insert$lambda($player_number, $full_name) {
    return function ($this$execute) {
      $this$execute.qc(1, $player_number);
      $this$execute.rc(2, $full_name);
      return Unit_getInstance();
    };
  }
  function HelloQueriesImpl$insert$lambda_0(this$0) {
    return function () {
      return this$0.qo_1.oo_1.so_1;
    };
  }
  function HelloQueriesImpl(database, driver) {
    TransacterImpl.call(this, driver);
    this.qo_1 = database;
    this.ro_1 = driver;
    this.so_1 = copyOnWriteList();
  }
  HelloQueriesImpl.prototype.lo = function (mapper) {
    return Query(1574701543, this.so_1, this.ro_1, 'Hello.sq', 'selectAll', 'SELECT *\nFROM hockeyPlayer', HelloQueriesImpl$selectAll$lambda(mapper));
  };
  HelloQueriesImpl.prototype.mo = function (player_number, full_name) {
    this.ro_1.oc(285986583, 'INSERT INTO hockeyPlayer(player_number, full_name)\nVALUES (?, ?)', 2, HelloQueriesImpl$insert$lambda(player_number, full_name));
    this.bc(285986583, HelloQueriesImpl$insert$lambda_0(this));
  };
  HelloQueriesImpl.$metadata$ = classMeta('HelloQueriesImpl', [HelloQueries], undefined, undefined, undefined, TransacterImpl.prototype);
  function helloWorld(message) {
    return 'Hello ' + message;
  }
  function Greeting() {
  }
  Greeting.prototype.greeting = function () {
    return 'Hello, ' + (new Platform()).to_1 + '!';
  };
  Greeting.$metadata$ = classMeta('Greeting');
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.prototype.serializer = function () {
    return $serializer_getInstance();
  };
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.user.shared.Test', this, 1);
    tmp0_serialDesc.wd('name', false);
    this.uo_1 = tmp0_serialDesc;
  }
  $serializer.prototype.yc = function () {
    return this.uo_1;
  };
  $serializer.prototype.td = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [StringSerializer_getInstance()];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer.prototype.vo = function (decoder) {
    var tmp0_desc = this.uo_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.wo(tmp0_desc);
    if (tmp5_input.zo()) {
      tmp4_local0 = tmp5_input.yo(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.xo(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.yo(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.ap(tmp0_desc);
    return Test_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer.prototype.bp = function (encoder, value) {
    var tmp0_desc = this.uo_1;
    var tmp1_output = encoder.wo(tmp0_desc);
    tmp1_output.dp(tmp0_desc, 0, value.cp_1);
    tmp1_output.ap(tmp0_desc);
  };
  $serializer.prototype.ep = function (encoder, value) {
    return this.bp(encoder, value instanceof Test ? value : THROW_CCE());
  };
  $serializer.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function Test_init_$Init$(seen1, name, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1)))
      throwMissingFieldException(seen1, 1, $serializer_getInstance().uo_1);
    $this.cp_1 = name;
    return $this;
  }
  function Test_init_$Create$(seen1, name, serializationConstructorMarker) {
    return Test_init_$Init$(seen1, name, serializationConstructorMarker, Object.create(Test.prototype));
  }
  function Test(name) {
    Companion_getInstance_0();
    this.cp_1 = name;
  }
  Test.prototype.fp = function () {
    return this.cp_1;
  };
  Test.prototype.component1 = function () {
    return this.cp_1;
  };
  Test.prototype.copy = function (name) {
    return this.gp(name === void 1 ? this.cp_1 : name);
  };
  Test.prototype.gp = function (name) {
    return new Test(name);
  };
  Test.prototype.hp = function (name, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.cp_1;
    return this.gp(name);
  };
  Test.prototype.toString = function () {
    return 'Test(name=' + this.cp_1 + ')';
  };
  Test.prototype.hashCode = function () {
    return getStringHashCode(this.cp_1);
  };
  Test.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Test))
      return false;
    var tmp0_other_with_cast = other instanceof Test ? other : THROW_CCE();
    if (!(this.cp_1 === tmp0_other_with_cast.cp_1))
      return false;
    return true;
  };
  Test.$metadata$ = classMeta('Test', undefined, undefined, {0: $serializer_getInstance});
  Object.defineProperty(Test.prototype, 'name', {
    configurable: true,
    get: Test.prototype.fp
  });
  function get_sqlDatabase() {
    init_properties_SQLDelight_kt_jji58t();
    return sqlDatabase;
  }
  var sqlDatabase;
  function helloSQL() {
    init_properties_SQLDelight_kt_jji58t();
    println('PRINT SQL DATA');
    var tmp = GlobalScope_getInstance();
    launch$default(tmp, null, null, helloSQL$slambda_0(null), 3, null);
  }
  function $getDatabaseCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.qp_1 = _this__u8e3s4;
  }
  $getDatabaseCOROUTINE$0.prototype.ka = function () {
    var suspendResult = this.ca_1;
    $sm: do
      try {
        var tmp = this.aa_1;
        switch (tmp) {
          case 0:
            this.ba_1 = 3;
            if (this.qp_1.sp_1 == null) {
              this.aa_1 = 1;
              suspendResult = this.qp_1.rp_1(Companion_getInstance().io(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.aa_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            var driver = suspendResult;
            this.qp_1.sp_1 = Companion_getInstance().jo(driver);
            this.aa_1 = 2;
            continue $sm;
          case 2:
            var tmp0_safe_receiver = this.qp_1.sp_1;
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ko();
            if (tmp1_safe_receiver == null)
              null;
            else {
              tmp1_safe_receiver.mo(new Long(7, 0), '0');
            }

            ;
            return ensureNotNull(this.qp_1.sp_1);
          case 3:
            throw this.da_1;
        }
      } catch ($p) {
        if (this.ba_1 === 3) {
          throw $p;
        } else {
          this.aa_1 = this.ba_1;
          this.da_1 = $p;
        }
      }
     while (true);
  };
  $getDatabaseCOROUTINE$0.$metadata$ = classMeta('$getDatabaseCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $invokeCOROUTINE$1(_this__u8e3s4, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.bq_1 = _this__u8e3s4;
    this.cq_1 = block;
  }
  $invokeCOROUTINE$1.prototype.ka = function () {
    var suspendResult = this.ca_1;
    $sm: do
      try {
        var tmp = this.aa_1;
        switch (tmp) {
          case 0:
            this.ba_1 = 3;
            this.aa_1 = 1;
            suspendResult = this.bq_1.eq(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.dq_1 = suspendResult;
            this.aa_1 = 2;
            suspendResult = this.cq_1(this.dq_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.da_1;
        }
      } catch ($p) {
        if (this.ba_1 === 3) {
          throw $p;
        } else {
          this.aa_1 = this.ba_1;
          this.da_1 = $p;
        }
      }
     while (true);
  };
  $invokeCOROUTINE$1.$metadata$ = classMeta('$invokeCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function SQLDatabase(driverProvider) {
    this.rp_1 = driverProvider;
    this.sp_1 = null;
  }
  SQLDatabase.prototype.eq = function ($cont) {
    var tmp = new $getDatabaseCOROUTINE$0(this, $cont);
    tmp.ca_1 = Unit_getInstance();
    tmp.da_1 = null;
    return tmp.ka();
  };
  SQLDatabase.prototype.fq = function (block, $cont) {
    var tmp = new $invokeCOROUTINE$1(this, block, $cont);
    tmp.ca_1 = Unit_getInstance();
    tmp.da_1 = null;
    return tmp.ka();
  };
  SQLDatabase.$metadata$ = classMeta('SQLDatabase');
  function createDriver$ref() {
  }
  createDriver$ref.prototype.gq = function (p0, $cont) {
    return createDriver(p0, $cont);
  };
  createDriver$ref.prototype.la = function (p1, $cont) {
    return this.gq((!(p1 == null) ? isInterface(p1, Schema) : false) ? p1 : THROW_CCE(), $cont);
  };
  createDriver$ref.$metadata$ = classMeta('createDriver$ref', undefined, undefined, undefined, [1]);
  function createDriver$ref_0() {
    var i = new createDriver$ref();
    var l = function (p0, $cont) {
      return i.gq(p0, $cont);
    };
    l.callableName = 'createDriver';
    l.$arity = 1;
    return l;
  }
  function helloSQL$slambda$slambda$lambda() {
    return function (player_number, full_name) {
      println('PRINT SQL DATA, ' + toString(player_number) + ', ' + full_name);
      return Unit_getInstance();
    };
  }
  function helloSQL$slambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  helloSQL$slambda$slambda.prototype.qq = function ($this$invoke, $cont) {
    var tmp = this.rq($this$invoke, $cont);
    tmp.ca_1 = Unit_getInstance();
    tmp.da_1 = null;
    return tmp.ka();
  };
  helloSQL$slambda$slambda.prototype.la = function (p1, $cont) {
    return this.qq((!(p1 == null) ? isInterface(p1, BatcaveDB) : false) ? p1 : THROW_CCE(), $cont);
  };
  helloSQL$slambda$slambda.prototype.ka = function () {
    var suspendResult = this.ca_1;
    $sm: do
      try {
        var tmp = this.aa_1;
        if (tmp === 0) {
          this.ba_1 = 1;
          println('PRINT SQL DATA');
          var tmp_0 = this.pq_1.ko();
          tmp_0.lo(helloSQL$slambda$slambda$lambda()).ob();
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.da_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  helloSQL$slambda$slambda.prototype.rq = function ($this$invoke, completion) {
    var i = new helloSQL$slambda$slambda(completion);
    i.pq_1 = $this$invoke;
    return i;
  };
  helloSQL$slambda$slambda.$metadata$ = classMeta('helloSQL$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function helloSQL$slambda$slambda_0(resultContinuation) {
    var i = new helloSQL$slambda$slambda(resultContinuation);
    var l = function ($this$invoke, $cont) {
      return i.qq($this$invoke, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function helloSQL$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  helloSQL$slambda.prototype.br = function ($this$launch, $cont) {
    var tmp = this.cr($this$launch, $cont);
    tmp.ca_1 = Unit_getInstance();
    tmp.da_1 = null;
    return tmp.ka();
  };
  helloSQL$slambda.prototype.la = function (p1, $cont) {
    return this.br((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  helloSQL$slambda.prototype.ka = function () {
    var suspendResult = this.ca_1;
    $sm: do
      try {
        var tmp = this.aa_1;
        switch (tmp) {
          case 0:
            this.ba_1 = 2;
            println('PRINT SQL DATA');
            this.aa_1 = 1;
            var tmp_0 = get_sqlDatabase();
            suspendResult = tmp_0.fq(helloSQL$slambda$slambda_0(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.da_1;
        }
      } catch ($p) {
        if (this.ba_1 === 2) {
          throw $p;
        } else {
          this.aa_1 = this.ba_1;
          this.da_1 = $p;
        }
      }
     while (true);
  };
  helloSQL$slambda.prototype.cr = function ($this$launch, completion) {
    var i = new helloSQL$slambda(completion);
    i.ar_1 = $this$launch;
    return i;
  };
  helloSQL$slambda.$metadata$ = classMeta('helloSQL$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function helloSQL$slambda_0(resultContinuation) {
    var i = new helloSQL$slambda(resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.br($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  var properties_initialized_SQLDelight_kt_4a5zbr;
  function init_properties_SQLDelight_kt_jji58t() {
    if (properties_initialized_SQLDelight_kt_4a5zbr) {
    } else {
      properties_initialized_SQLDelight_kt_4a5zbr = true;
      sqlDatabase = new SQLDatabase(createDriver$ref_0());
    }
  }
  function Platform() {
    this.to_1 = window.navigator.userAgent;
  }
  Platform.$metadata$ = classMeta('Platform');
  function createDriver(schema, $cont) {
    return await_0(initSqlDriver(schema), $cont);
  }
  //region block: post-declaration
  $serializer.prototype.ud = typeParametersSerializers;
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $me = _.me || (_.me = {});
    var $me$user = $me.user || ($me.user = {});
    var $me$user$shared = $me$user.shared || ($me$user.shared = {});
    $me$user$shared.helloWorld = helloWorld;
    $me$user$shared.Greeting = Greeting;
    var $me = _.me || (_.me = {});
    var $me$user = $me.user || ($me.user = {});
    var $me$user$shared = $me$user.shared || ($me$user.shared = {});
    $me$user$shared.Test = Test;
    $me$user$shared.Test.Test_init_$Create$ = Test_init_$Create$;
    Object.defineProperty($me$user$shared.Test, 'Companion', {
      configurable: true,
      get: Companion_getInstance_0
    });
    Object.defineProperty($me$user$shared.Test, '$serializer', {
      configurable: true,
      get: $serializer_getInstance
    });
    var $me = _.me || (_.me = {});
    var $me$user = $me.user || ($me.user = {});
    var $me$user$shared = $me$user.shared || ($me$user.shared = {});
    var $me$user$shared$database = $me$user$shared.database || ($me$user$shared.database = {});
    $me$user$shared$database.helloSQL = helloSQL;
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=batcave.js.map