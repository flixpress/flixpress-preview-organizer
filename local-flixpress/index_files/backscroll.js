$(document).ready(function(){

	  $('#dnncontentbox').css({ backgroundPosition: '50% 0px'});

		     
			
     
        $(window).scroll(function() {
         
            var yPos2 = -($(window).scrollTop() / 5); 
            // Put together our final background position

	    var coords2 = '50% '+ yPos2 + 'px';
            // Move the background

	    $('#dnncontentbox').css({ backgroundPosition: coords2 });
		

	});
});