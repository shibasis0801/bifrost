(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'batcave'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'batcave'.");
    }
    if (typeof kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core === 'undefined') {
      throw new Error("Error loading module 'batcave'. Its dependency 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core' was not found. Please, check whether 'kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core' is loaded prior to 'batcave'.");
    }
    root.batcave = factory(typeof batcave === 'undefined' ? {} : batcave, this['kotlin-kotlin-stdlib-js-ir'], kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var classMeta = kotlin_kotlin.$_$.u;
  var objectMeta = kotlin_kotlin.$_$.b1;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var Unit_getInstance = kotlin_kotlin.$_$.j;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var THROW_CCE = kotlin_kotlin.$_$.g1;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var getStringHashCode = kotlin_kotlin.$_$.y;
  //endregion
  //region block: pre-declaration
  //endregion
  function helloWorld(message) {
    return 'Hello ' + message;
  }
  function Greeting() {
  }
  Greeting.prototype.greeting = function () {
    return 'Hello, ' + (new Platform()).h8_1 + '!';
  };
  Greeting.$metadata$ = classMeta('Greeting');
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.serializer = function () {
    return $serializer_getInstance();
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('me.user.shared.Test', this, 1);
    tmp0_serialDesc.d8('name', false);
    this.i8_1 = tmp0_serialDesc;
  }
  $serializer.prototype.f7 = function () {
    return this.i8_1;
  };
  $serializer.prototype.a8 = function () {
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
  $serializer.prototype.j8 = function (decoder) {
    var tmp0_desc = this.i8_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.k8(tmp0_desc);
    if (tmp5_input.n8()) {
      tmp4_local0 = tmp5_input.m8(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.l8(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.m8(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.o8(tmp0_desc);
    return Test_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer.prototype.p8 = function (encoder, value) {
    var tmp0_desc = this.i8_1;
    var tmp1_output = encoder.k8(tmp0_desc);
    tmp1_output.r8(tmp0_desc, 0, value.q8_1);
    tmp1_output.o8(tmp0_desc);
  };
  $serializer.prototype.s8 = function (encoder, value) {
    return this.p8(encoder, value instanceof Test ? value : THROW_CCE());
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
      throwMissingFieldException(seen1, 1, $serializer_getInstance().i8_1);
    $this.q8_1 = name;
    return $this;
  }
  function Test_init_$Create$(seen1, name, serializationConstructorMarker) {
    return Test_init_$Init$(seen1, name, serializationConstructorMarker, Object.create(Test.prototype));
  }
  function Test(name) {
    Companion_getInstance();
    this.q8_1 = name;
  }
  Test.prototype.t8 = function () {
    return this.q8_1;
  };
  Test.prototype.component1 = function () {
    return this.q8_1;
  };
  Test.prototype.copy = function (name) {
    return this.u8(name === void 1 ? this.q8_1 : name);
  };
  Test.prototype.u8 = function (name) {
    return new Test(name);
  };
  Test.prototype.v8 = function (name, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.q8_1;
    return this.u8(name);
  };
  Test.prototype.toString = function () {
    return 'Test(name=' + this.q8_1 + ')';
  };
  Test.prototype.hashCode = function () {
    return getStringHashCode(this.q8_1);
  };
  Test.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Test))
      return false;
    var tmp0_other_with_cast = other instanceof Test ? other : THROW_CCE();
    if (!(this.q8_1 === tmp0_other_with_cast.q8_1))
      return false;
    return true;
  };
  Test.$metadata$ = classMeta('Test', undefined, undefined, {0: $serializer_getInstance});
  Object.defineProperty(Test.prototype, 'name', {
    configurable: true,
    get: Test.prototype.t8
  });
  function Platform() {
    this.h8_1 = window.navigator.userAgent;
  }
  Platform.$metadata$ = classMeta('Platform');
  //region block: post-declaration
  $serializer.prototype.b8 = typeParametersSerializers;
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
      get: Companion_getInstance
    });
    Object.defineProperty($me$user$shared.Test, '$serializer', {
      configurable: true,
      get: $serializer_getInstance
    });
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=batcave.js.map