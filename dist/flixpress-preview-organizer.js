/*! flixpress-preview-organizer - v0.1.0 - 2015-04-23
* Copyright (c) 2015 Don Denton; Licensed MIT */
(function ($) {
  var numRecentItems = 4;
  var numItemsPerRow = 4;
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

      // pastItemsByTemplate is an array like the following
      // [
      //   {
      //     name: 83,
      //     imgSrc: 'path/to/img.jpg',
      //     elements: [
      //       DOM_Element,
      //       DOM_Element,
      //       DOM_Element
      //     ]
      //   },
      //   {
      //     name: 78,
      //     imgSrc: 'path/to/img.jpg',
      //     elements: [
      //       DOM_Element
      //     ]
      //   }, 
      //   {
      //     name: 82,
      //     imgSrc: 'path/to/img.jpg',
      //     elements: [
      //       DOM_Element
      //     ]
      //   }  
      // ]
      var pastItemsByTemplate = [];
      
      // Function to add elemnts into the pastItemsByTemplate array.
      // Checks if the template is new or old and adds accordingly.
      var addToTemplatesArray = function(id,imgSrc,element){
        var is_new = true;
        $.each(pastItemsByTemplate, function(i, obj){
          if (obj.name === id){
            pastItemsByTemplate[i].elements.push(element);
            is_new = false;
          }
        });
        if (!is_new) {return;}
        var new_object = {
          name: id,
          imgSrc: imgSrc,
          elements: [element]
        };
        pastItemsByTemplate.push(new_object);
      };

      $.each($pastItems, function(i,obj){
        var imgSrc = $(obj).find('.TemplateImageDiv img').attr('src');
        var regex = /([^\/]*).(jpg|png|jpeg)$/i;
        var templateName = imgSrc.match(regex)[1];
        addToTemplatesArray(templateName, imgSrc, obj);
      });

      $.each(pastItemsByTemplate, function(i,obj){
        if (i % numItemsPerRow === 0){
          $pastOrders.append('<div class="past-orders-group"></div>');
        }
        var $lastGroup = $pastOrders.find('.past-orders-group:last');
        $lastGroup.before('<div id="past-orders-group-'+ obj.name +'" class="template-folder"><div class="OrderItemDiv"></div><div class="OrderItemDiv"><img src="'+ obj.imgSrc +'" /><span>Click to Expand</span></div></div>');

        $lastGroup.append('<div class="past-orders-group-'+ obj.name +'"></div>');
        $.each(obj.elements, function(i,el){
          $pastOrders.find('.past-orders-group-'+ obj.name).append($(el));
        });
      });

      $module.on('click', '.template-folder', function(){
        var id = $(this).attr('id');
        var animation = {
          duration: 400,
          easing: 'swing'
        };
        $module.find('.past-orders-group > div').stop().hide(animation);
        $module.find('.'+id).stop().show(animation);
      });

      // Get rid of pagination display
      $module.find('.RadDataPager').remove();
    });
  };
}(jQuery));
