// 
/*!
 * jquery.plugin.menuTree.pack.js v0.7
 * Copyright 2010, Bill Heaton http://pixelhandler.com
 *
 * Requires jquery version 1.4
 * http://jquery.com/
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://docs.jquery.com/License
 *
 * Date: Sat Feb 6 10:50 GMT-8:00
 */
(function($){$.fn.menuTree=function(c){var d=$.extend({},$.fn.menuTree.defaults,c);$.fn.menuTree.defaults={animation:false,handler:'css',speed:'fast',listElement:'ul',hrefBegins:'#',trace:false};$.fn.menuTree.mtParent=$(this);$.fn.menuTree.mtTargets=$.fn.menuTree.mtParent.find("a[href^='"+d.hrefBegins+"']");function reveal(a){var b=$(a);switch(d.listElement){case"dd":b.mtReveal=b.parent().next(d.listElement);break;case"ol":b.mtReveal=b.next(d.listElement);break;default:b.mtReveal=b.next(d.listElement)}return b.mtReveal}function clickHandler(a){var b=$(a.target);if(!b.data('responsive')){return}b.stop();if(!d.animation){reveal(b).toggleClass('collapsed');b.toggleClass('expanded').data('state','ready').trigger('statechange')}else{b.data('state','transition').trigger('statechange');switch(d.handler){case"slideToggle":reveal(b).slideToggle(d.speed,function(){$(this).prev('.menuTree').toggleClass('expanded').data('state','ready').trigger('statechange')}).toggleClass('collapsed');break;case"toggle":reveal(b).toggle(d.speed,function(){$(this).prev('.menuTree').toggleClass('expanded').data('state','ready').trigger('statechange')}).toggleClass('collapsed');break;default:}}a.preventDefault()}$.fn.menuTree.controller=function(a){var b=$(a.target);if(b.data('state')!='ready'){b.data('responsive',false)}else{b.data('responsive',true);if(b.next(d.listElement).find('.expanded').length>0){b.next(d.listElement).find('.expanded').each(function(){$(this).removeClass('expanded').next(d.listElement).hide().addClass('collapsed')})}}};$.fn.menuTree.init=(function(){$.fn.menuTree.mtTargets.each(function(){var a=$(this);a.data({state:'ready',responsive:true});a.addClass('menuTree');reveal(a).toggleClass('collapsed');$.fn.menuTree.mtParent.click(clickHandler);$.fn.menuTree.mtParent.bind('statechange',$.fn.menuTree.controller)})});return $.fn.menuTree.init()}})(jQuery);
