function config($stateProvider) {
  $stateProvider
  .state("profile", {
    url: "/profile",
    controller: "ProfileController as profileCtrl",
    template: require('./profile.html')
  });
}

export default config;
