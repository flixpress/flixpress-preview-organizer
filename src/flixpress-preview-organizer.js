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

      $recentItems.wrapAll( '<div class="recent-orders"></div>' );
      $pastItems.wrapAll( '<div class="past-orders"></div>' );

      var $recentOrders = $module.find('.recent-orders');
      var $pastOrders = $module.find('.past-orders');

      $recentOrders.prepend('<h2>Recent Previews</h2>');
      $pastOrders.prepend('<h2>Past Previews Grouped By Template</h2>');

      // Get rid of pagination display
      $module.find('.RadDataPager').remove();
    });
  };
}(jQuery));
