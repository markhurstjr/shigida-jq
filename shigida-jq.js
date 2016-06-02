$.fn.center = function( options ) {
  var opts = $.extend( {}, $.fn.center.defaults, options);
  return this.each(function(){
    $(this).addClass(opts.position+'-center').css({
      position:opts.position,
      left:$(window).width() / 2 - $(this).outerWidth(true) / 2,
      top:$(window).height() / 2 - $(this).outerHeight(true) / 2
    });
  });
}

$.fn.center.defaults = {
  position:'fixed'
}

$(window).on('load resize', function(){
  $('.fixed-center').center();
  $('.absolute-center').center({position:'absolute'});
});