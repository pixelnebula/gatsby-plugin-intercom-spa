"use strict";

exports.onInitialClientRender = function () {
  if (typeof Intercom === "function" && window.IntercomAppId) {
    window.Intercom("boot", {
      app_id: window.IntercomAppId
    });
  }
};

exports.onRouteUpdate = function (_ref) {
  var location = _ref.location;

  if (typeof Intercom === "function" && window.IntercomAppId) {
    window.Intercom("update");
  }
};