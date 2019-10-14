var pswpElement = document.querySelectorAll('.pswp')[0];

// Items array defined in individual post

// define options (if needed)
var options = {
    index: 0, // start at first slide
    bgOpacity: 0.7
};

// Initializes and opens PhotoSwipe
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();
