
'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show();
    $('#home').hide();
    $('#scholarships').hide();
    $('#school-program').hide();
  };
  module.aboutController = aboutController;
})(app);