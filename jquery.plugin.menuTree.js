// 
/*!
 * jquery.plugin.menuTree.js v0.7
 * Copyright 2010, Bill Heaton http://pixelhandler.com
 *
 * Requires jquery version 1.4
 * http://jquery.com/
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://docs.jquery.com/License
 *
 * Sat Feb 6 10:20 GMT-8:00
 */

(function($) {
	$.fn.menuTree = function(options) {
		// extend default options with aruments on function call
		var opts = $.extend({}, $.fn.menuTree.defaults, options);
		
		// default options
		$.fn.menuTree.defaults = { 
			// setup animation
			animation: false, 
			handler: 'css',
			speed: 'fast',
			// setup hooks in markup
			listElement: 'ul',
			hrefBegins: '#',
			// uses 'tracer' plugin
			trace: false
		};
		// console.log('find: '+opts.hrefBegins); // hrefBegins undefined using 'toggle' unless called for
		
		// tree behavior only operates on anchor elements in the list that begin with a hash '#' unless options called for
		$.fn.menuTree.mtParent = $(this);
		$.fn.menuTree.mtTargets = $.fn.menuTree.mtParent.find("a[href^='"+opts.hrefBegins+"']");
		
		function reveal(element) {
			var $reveal = $(element);
			// select targets to reveal based on options we choose what list element to target default is 'ul'
			switch(opts.listElement) {
				case "dd": 
					$reveal.mtReveal = $reveal.parent().next(opts.listElement);
					break;
				case "ol":
					$reveal.mtReveal = $reveal.next(opts.listElement);
					break;
				default: 
					$reveal.mtReveal = $reveal.next(opts.listElement);
			}
			return $reveal.mtReveal; 
		}
		
		// do the magic with the click event ...
		function clickHandler(event) {
			var $target = $(event.target);
			if (opts.trace) { 
				$.fn.menuTree.msg = $target.text()+": responsive, "+$target.data('responsive')+", "+opts.handler;
				$.fn.tracer.log($.fn.menuTree.msg); 
			}
			// if data value is not ready bail out
			if (!$target.data('responsive')){
				return;
			}
			$target.stop();
			
			// choose your animation behavior based on options passed to plugin instance
			if (!opts.animation) { 
				// false uses CSS to handle effects
				reveal($target).toggleClass('collapsed');
				$target.toggleClass('expanded').data('state','ready').trigger('statechange');
			} else { 
				// true uses opts.handler to choose effects
				$target.data('state','transition').trigger('statechange');

				switch(opts.handler) {
					case "slideToggle":
						reveal($target).slideToggle( opts.speed, function() {
							$(this).prev('.menuTree').toggleClass('expanded').data('state','ready').trigger('statechange');
						}).toggleClass('collapsed');
						break;
					case "toggle":
						reveal($target).toggle(opts.speed, function() {
							$(this).prev('.menuTree').toggleClass('expanded').data('state','ready').trigger('statechange');
						}).toggleClass('collapsed');
						break;
					default: 
						// css only, but if called with true we should do something
				}
			}
			event.preventDefault();
		}
		
		// set up listener controller function
		// used to prevent multiple clicks, click event is disabled during animation
		$.fn.menuTree.controller = function(event) {
			var $target = $(event.target);
			// manage link state
			if ($target.data('state') != 'ready'){
				$target.data('responsive',false);
			} else {
				$target.data('responsive',true);
				// may need to collapse children
				if ($target.next(opts.listElement).find('.expanded').length > 0) {
					$target.next(opts.listElement).find('.expanded').each(function() {
						$(this).removeClass('expanded').next(opts.listElement).hide().addClass('collapsed');
						if (opts.trace) { 
							$.fn.menuTree.msg = 'collapsed child';
							$.fn.tracer.log($.fn.menuTree.msg); 
						}
					});
				}
			}
		};
		
		// setup tree behavior and bind on controller
		$.fn.menuTree.init = (function() {
			
			$.fn.menuTree.mtTargets.each(function() {
			
				var $localTarget = $(this);
				$localTarget.data({
					state: 'ready',
					responsive: true
				});
				// set behavior up on all .menuTree anchors create with plugin
				$localTarget.addClass('menuTree');
			
				// hide the child elements to reveal later // $.fn.menuTree.
				reveal($localTarget).toggleClass('collapsed');
			
				// set Click event handler for targets
				//$localTarget.click(clickHandler); // no event delegation
				$.fn.menuTree.mtParent.click(clickHandler);
			
				// bind the Controller to listen for state change on
				//$localTarget.bind('statechange',$.fn.menuTree.controller); // no event delegation
				$.fn.menuTree.mtParent.bind('statechange',$.fn.menuTree.controller);
				
				// trace setup if option is called as true uses 'tracer' plugin 
				if (opts.trace) { 
					$.fn.menuTree.msg = "option :";
					$.fn.menuTree.msg += opts.hrefBegins;
					$.fn.menuTree.msg += ", animation: " + opts.animation;
					$.fn.tracer.log($.fn.menuTree.msg);
					$.fn.menuTree.msg = opts.listElement + ": ";
					$.fn.menuTree.msg = $localTarget.text().substr(0,21) + "..." ;
					$.fn.menuTree.msg += $localTarget.data('state') + ", responsive: ";
					$.fn.menuTree.msg += $localTarget.data('responsive');
					$.fn.tracer.log($.fn.menuTree.msg); 
				}
			});
		});
		
		return $.fn.menuTree.init();

	};
})(jQuery);