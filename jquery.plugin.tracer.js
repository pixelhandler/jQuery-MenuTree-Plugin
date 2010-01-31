// 
/*!
 * jquery.plugin.tracer.js v0.1
 * Copyright 2010, Bill Heaton http://pixelhandler.com
 *
 * Requires jquery version 1.4
 * http://jquery.com/
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://docs.jquery.com/License
 *
 * Date: Sat Jan 30 5:00 GMT-8:00
 */
(function($) {
	$.fn.tracer = function(options) {
		
		//var opts = $.extend({}, $.fn.tracer.defaults, options);
		$.fn.tracer.defaults = {output: '#trace', element: 'li', clear: "#empty"};
		
		$.fn.tracer.log = function(msg) {
			$($.fn.tracer.defaults.output).prepend("<"+$.fn.tracer.defaults.element+">"+msg+"</"+$.fn.tracer.defaults.element+">");
		};
		return this.each(function() {
			$($.fn.tracer.defaults.clear).click(function(){
				$($.fn.tracer.defaults.output).empty();
			});
			$($.fn.tracer.defaults.clear).click();
			$($.fn.tracer.defaults.output).tracer.log("hello!");
		});
	};
})(jQuery);