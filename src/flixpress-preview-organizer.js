/*
 * 
 * 
 *
 * Copyright (c) 2015 Don Denton
 * Licensed under the MIT license.
 */
(function ($) {
  var numRecentItems = 4;
  $.fn.flixpressPreviewOrganizer = function () {
    return this.each(function () {
      // Do something to each selected element.
      var $module = $(this);
      var $items = $module.find('.OrderItemDiv');
      var $recentItems = $items.slice(0, numRecentItems);
      var $pastItems = $items.slice(numRecentItems);

      // Get rid of pagination display
      $module.find('.RadDataPager').remove();
    });
  };
}(jQuery));
