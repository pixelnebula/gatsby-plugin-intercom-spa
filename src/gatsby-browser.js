exports.onInitialClientRender = () => {
  if (typeof Intercom === `function` && window.IntercomAppId) {
    window.Intercom("boot", {
      app_id: window.IntercomAppId
    });
  }
}

exports.onRouteUpdate = function({ location }) {
  if (typeof Intercom === `function` && window.IntercomAppId) {
    window.Intercom("update");
  }
}
