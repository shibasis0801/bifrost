(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root.batcave = factory(typeof batcave === 'undefined' ? {} : batcave);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  function helloWorld(message) {
    return 'Hello ' + message;
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $me = _.me || (_.me = {});
    var $me$user = $me.user || ($me.user = {});
    var $me$user$shared = $me$user.shared || ($me$user.shared = {});
    $me$user$shared.helloWorld = helloWorld;
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=batcave.js.map