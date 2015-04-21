/*
 * 
 * 
 *
 * Copyright (c) 2015 Don Denton
 * Licensed under the MIT license.
 */
(function ($) {
  $.fn.flixpressPreviewOrganizer = function () {
    return this.each(function (i) {
      // Do something to each selected element.
      $(this).html('flixpressPreviewOrganizer' + i);
    });
  };
}(jQuery));
