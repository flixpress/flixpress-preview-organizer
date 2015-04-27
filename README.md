# Flixpress Preview Organizer

> Re-jiggers the previews tab of the My Account page at FLixpress.com

If you are not affiliated with Flixpress, LLC, feel free to poke around these
files and see how we put this together, but you'll proably have to change a
lot to get it to work for your specific needs.

If you are interested in making changes, you'll want to familiarize yourself
with [Grunt](http://gruntjs.com) and [Bower](http://bower.io) before you get
too far.

------------

## Testing it out

Now this will only work if there isn't a version of this script already
running on the page, but you can copy and paste the following into the
javascript console to take the most current version of the code out for a
spin.

```javascript
$('head').append('<link rel="stylesheet" href="https://rawgit.com/flixpress/flixpress-preview-organizer/master/dist/flixpress-preview-organizer.min.css" />');
$.getScript('https://rawgit.com/flixpress/flixpress-preview-organizer/master/dist/flixpress-preview-organizer.min.js', function(){
  $('.DnnModule-previews').flixpressPreviewOrganizer();
});

```

## Wiring it up

The files in the `dist` folder are all that need to be uploaded to the server.
Don't ever manually change the contents of this file. If you do, it will
absolutely get overwritten.

The `dist` folder only gets altered at tagged commits. This will also
correspond to version changes after `v0.1.0`. It'd be pretty boss to hook this
up to deploy with webhooks, but manually is fine for now...

Then you'll need to call the main file somewhere on the previews tab. The
script will call the rest of the necessaries. Just make sure they are all on
the live server in `/scripts/flixpress-preview-organizer/`.

Something like this should work just fine on the previews page:

```javascript

$(document).ready( function(){

  $('head').append('<link rel="stylesheet" href="/scripts/flixpress-preview-organizer/flixpress-preview-organizer.css" />');

  $.getScript('/scripts/flixpress-preview-organizer/flixpress-preview-organizer.min.js', function(){
    $('.DnnModule-previews').flixpressPreviewOrganizer();
  });

});

```

:exclamation: WARNING: jQuery and the data for the preview tab must be loaded before anything
runs. :exclamation:

## The 'other' files

The files in the root directory of this repository are really only helpful
to me. They run a couple node scripts that allow me to keep these files in
version control (as they are getting more complex) and automatically copies
them to the server every time I save.

In theory, you could also use them in Windows, but you'd probably have to
alter the `pathToServer` property in `Gruntfile.js` first.

------------

## License

MIT © Don Denton

## Releases

### v1.0

Prettied everything up for production

### v0.1.0

Initial commit.
