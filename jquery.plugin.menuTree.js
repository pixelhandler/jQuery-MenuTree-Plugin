// 
/*!
 * jquery.plugin.menuTree.js v0.1
 * Copyright 2010, Bill Heaton http://pixelhandler.com
 *
 * Requires jquery version 1.4
 * http://jquery.com/
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://docs.jquery.com/License
 *
 * Date: Thur Jan 28 2:50:00 2010 -0800
 */

(function($) {
	$.fn.menuTree = function(options) {
		// extend default options with aruments on function call
		var opts = $.extend({}, $.fn.menuTree.defaults, options);
		// default options
		$.fn.menuTree.defaults = { 
			animation: false, 
			speed: 'fast',
			listElement: 'ul'
		};
		// do the magic with the click event ...
		function ClickHandler(event) {
			var $target = $(event.target);
			// if data value is not ready bail out
			if (!$target.data('responsive')){
				return;
			}
			$target.stop();
			$target.data('state','transition');
			$target.trigger('statechange');
			// choose your animation behavior based on options passed to plugin instance
			if (!opts.animation) {
				this.treeReveal.toggle();
			} else {
				$(this.treeReveal).slideToggle( opts.speed, function() {
					var $handler = $(this).prev('.menuTree');
					$handler.toggleClass('expanded');
					$handler.data('state','ready');
					$handler.trigger('statechange');
				});
			}
			event.preventDefault();
		}
		
		// set up listener controller function on window
		// used to prevent multiple clicks, click event is disabled during animation
		var $win = $(window);
		$win.controller = function(event){
			var $target = $(event.target);
			var $collapse;
			if ($target.data('state') != 'ready'){
				$target.data('responsive',false);
			} else {
				$target.data('responsive',true);
				// may need to collapse children
				if ($target.next(opts.listElement).find('.expanded').length > 0) {
					$collapse = $target.next(opts.listElement).find('.expanded');
					$collapse.each(function() {
						var $toHide = $(this);
						$toHide.removeClass('expanded');
						$toHide.next(opts.listElement).hide();
						//console.log('collapsed: '+ $toHide.text());
					});
				}
			}
			//console.log("controller, "+$target.text()+": responsive, "+$target.data('responsive'));
		};
		// tree behavior only operates on anchor elements in the list that begin with a hash '#'
		var treeTargets = this.find("a[href^='#']");
		// setup tree behavior and bind on controller
		return treeTargets.each(function() {
			var $localTarget = $(this);
			$localTarget.data({
				state: 'ready',
				responsive: true
			});
			// set behavior up on all .menuTree anchors create with plugin
			$localTarget.addClass('menuTree');
			this.treeReveal = $(this).next(opts.listElement).hide();
			$localTarget.click(ClickHandler);
			// bind the Controller to listen for state change on
			$('.menuTree').bind('statechange',$win.controller);
		});
	};

})(jQuery);
