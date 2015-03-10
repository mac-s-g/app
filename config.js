module.exports = function(config) {

  // Output directory
  config.dest = 'www';

  // Inject cordova script into html
  config.cordova = true;

  //IMPORTANT: uncomment above when running on phone
  // config.cordova = false;

  // Images minification
  config.minify_images = true;

  // Development web server

  config.server.host = '0.0.0.0';
  config.server.port = '8000';

  // Set to false to disable it:
  // config.server = false;

  // Weinre Remote debug server

  config.weinre.httpPort = 8001;
  // config.weinre.boundHost = 'localhost';
  config.weinre.boundHost = '0.0.0.0';

  // Set to false to disable it:
  config.weinre = false;

  /* js dependencies */
  // config.vendor.js.push('.bower_components/lib/dist/lib.js');
  // config.vendor.fonts.push('.bower_components/font/dist/*');
  // chartist js
  config.vendor.js.push('./bower_components/chartist/dist/chartist.js');
  // angular carousel js
  config.vendor.js.push('./bower_components/angular-carousel/dist/angular-carousel.js');
  // angular touch js
  config.vendor.js.push('./bower_components/angular-touch/angular-touch.js');
  //angular bootstrap calendar
  config.vendor.js.push('./bower_components/moment/moment.js');
  // config.vendor.js.push('./bower_components/angular-ui-bootstrap/src/*/*.js');
  config.vendor.js.push('./bower_components/angular-bootstrap/ui-bootstrap-tpls.js');
  config.vendor.js.push('./bower_components/angular-bootstrap-calendar/dist/js/angular-bootstrap-calendar-tpls.min.js');
  //mobile angular ui overlay directive
  config.vendor.js.push('./bower_components/mobile-angular-ui/src/js/migrate/overlay.js');

  config.vendor.js.push('./bower_components/mobile-angular-ui/src/js/migrate/overlay.js');


  /* css dependencies */
  //custom app css
  config.vendor.css.push('./src/css/*.css');
  //chartist dependency
  config.vendor.css.push('./bower_components/chartist/dist/chartist.min.css');
  //angular carousel dependency
  config.vendor.css.push('./bower_components/angular-carousel/dist/angular-carousel.css');
  //angular bootstrap calendar
  config.vendor.css.push('./bower_components/angular-bootstrap-calendar/dist/css/angular-bootstrap-calendar.min.css');

  /* templates */
  config.vendor.templates.push('src/templates/**/*.html');

};