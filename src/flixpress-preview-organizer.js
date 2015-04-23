/*
 * 
 * 
 *
 * Copyright (c) 2015 Don Denton
 * Licensed under the MIT license.
 */
(function ($) {
  $.fn.flixpressPreviewOrganizer = function () {
    return this.each(function () {
      // Do something to each selected element.
      var $module = $(this);

      // Get rid of pagination display
      $module.find('.RadDataPager').remove();
    });
  };
}(jQuery));
