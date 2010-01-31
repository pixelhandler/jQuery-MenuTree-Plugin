// 
/*!
 * jquery.plugin.menuTree.pack.js v0.5
 * Copyright 2010, Bill Heaton http://pixelhandler.com
 *
 * Requires jquery version 1.4
 * http://jquery.com/
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://docs.jquery.com/License
 *
 * Date: Sat Jan 30 8:35 GMT-8:00
 */
(function($){$.fn.menuTree=function(d){var e=$.extend({},$.fn.menuTree.defaults,d);$.fn.menuTree.defaults={animation:false,handler:'css',speed:'fast',listElement:'ul',hrefBegins:'#',trace:false};$.fn.menuTree.treeTargets=this.find("a[href^='"+e.hrefBegins+"']");function clickHandler(b){var c=$(b.target);if(!c.data('responsive')){return}c.stop();c.data('state','transition');c.trigger('statechange');if(!e.animation){$(this.treeReveal).toggleClass('collapsed');c.toggleClass('expanded');c.data('state','ready');c.trigger('statechange')}else{switch(e.handler){case"slideToggle":$(this.treeReveal).slideToggle(e.speed,function(){var a=$(this).prev('.menuTree');a.toggleClass('expanded');a.data('state','ready');a.trigger('statechange')});break;case"toggle":$(this.treeReveal).toggle(e.speed,function(){var a=$(this).prev('.menuTree');a.toggleClass('expanded');a.data('state','ready');a.trigger('statechange')});break;default:}}b.preventDefault()}$.fn.menuTree.controller=function(a){var b=$(a.target);if(b.data('state')!='ready'){b.data('responsive',false)}else{b.data('responsive',true);if(b.next(e.listElement).find('.expanded').length>0){b.next(e.listElement).find('.expanded').each(function(){$(this).removeClass('expanded');$(this).next(e.listElement).hide()})}}};return $.fn.menuTree.treeTargets.each(function(){var a=$(this);a.data({state:'ready',responsive:true});a.addClass('menuTree');switch(e.listElement){case"dd":this.treeReveal=a.parent().next(e.listElement);break;case"ol":this.treeReveal=a.next(e.listElement);break;default:this.treeReveal=a.next(e.listElement)}$(this.treeReveal).toggleClass('collapsed');a.click(clickHandler);$('.menuTree').bind('statechange',$.fn.menuTree.controller)})}})(jQuery);