(function ($) {
  module('jQuery#flixpressPreviewOrganizer', {
    setup: function () {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function () {
    expect(1);
    strictEqual(this.elems.flixpressPreviewOrganizer(), this.elems, 'should be chainable');
  });

  test('is flixpressPreviewOrganizer', function () {
    expect(1);
    strictEqual(this.elems.flixpressPreviewOrganizer().text(), 'flixpressPreviewOrganizer0flixpressPreviewOrganizer1flixpressPreviewOrganizer2', 'should be flixpressPreviewOrganizer');
  });

}(jQuery));
