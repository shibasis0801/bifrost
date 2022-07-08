(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root.kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core = factory(typeof kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core === 'undefined' ? {} : kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.js.map