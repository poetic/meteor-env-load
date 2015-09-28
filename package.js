Package.describe({
  name: 'poetic:env-load',
  version: '0.0.1',
  summary: 'Stop a Meteor app on startup if any environment variables are missing as per environment.json.',
  git: 'https://github.com/poetic/meteor-env-load',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.use('ecmascript');
  api.addFiles('env-load.es6.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('poetic:env-load');
  api.addFiles('env-load-tests.js');
});
