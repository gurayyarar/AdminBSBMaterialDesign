Package.describe({
  name: 'rochal:slimscroll',
  version: '1.3.6',
  summary: 'jQuery SlimScroll package for meteor.',
  git: 'https://github.com/rochal/jQuery-slimScroll',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.use('jquery', 'client');
  api.addFiles('jquery.slimscroll.js', 'client');
});
