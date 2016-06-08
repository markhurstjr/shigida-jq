/* CENTER */
//function
$.fn.center = function( options ) {
  var opts = $.extend( {}, $.fn.center.defaults, options);
  return this.each(function(){
    $(this).addClass(opts.position+'-center').css({
      position:opts.position,
      left:$(window).width() / 2 - $(this).outerWidth(true) / 2,
      top:$(window).height() / 2 - $(this).outerHeight(true) / 2
    });
  });
};
//default options
$.fn.center.defaults = {
  position:'fixed'
};
//automatic triggers
$(window).on('load resize', function(){
  $('.fixed-center').center();
  $('.absolute-center').center({position:'absolute'});
});

/* FIX */
//function
$.fn.fix = function( options ) {
  var opts = $.extend( {}, $.fn.fix.defaults, options);
  return this.each(function(){
    var cssopts = { position:'fixed' }
    switch(opts.to){
      case 'top left':
        cssopts.top = '0';
        cssopts.left = '0';
        break;
      case 'top':
        cssopts.top = '0';
        break;
      case 'top right':
        cssopts.top = '0';
        cssopts.right = '0';
        break;
      case 'left':
        cssopts.left = '0';
        break;
      case 'right':
        cssopts.right = '0';
        break;
      case 'bottom left':
        cssopts.bottom = '0';
        cssopts.left = '0';
        break;
      case 'bottom':
        cssopts.bottom = '0';
        break;
      case 'bottom right':
        cssopts.bottom = '0';
        cssopts.right = '0';
        break;
    }
    $(this).css(cssopts);
  });
};
//default options
$.fn.fix.defaults = {
  to:'top left'
};

/* SH CLASSES */
//sh-toggle
$(document).on('click', '.sh-toggle', function(){
  $($(this).attr('data-toggle')).slideToggle();
});
$.fn.shToggle = function(options){
  return this.each(function(){
    if(options === undefined || options.ele === undefined){
      console.error('no ele option for shToggle, cannot toggle any elements');
    }
    else{
      $(this).addClass('sh-toggle').attr('data-toggle', options.ele);
    }
  });
};