// 
/*!
 * jquery.plugin.menuTree.pack.js v0.6
 * Copyright 2010, Bill Heaton http://pixelhandler.com
 *
 * Requires jquery version 1.4
 * http://jquery.com/
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://docs.jquery.com/License
 *
 * Date: Sat Jan 30 23:00 GMT-8:00
 */
(function($){$.fn.menuTree=function(c){var d=$.extend({},$.fn.menuTree.defaults,c);$.fn.menuTree.defaults={animation:false,handler:'css',speed:'fast',listElement:'ul',hrefBegins:'#',trace:false};this.treeTargets=this.find("a[href^='"+d.hrefBegins+"']");function clickHandler(a){var b=$(a.target);if(!b.data('responsive')){return}b.stop();if(!d.animation){$(this.treeReveal).toggleClass('collapsed');b.toggleClass('expanded').data('state','ready').trigger('statechange')}else{b.data('state','transition').trigger('statechange');switch(d.handler){case"slideToggle":$(this.treeReveal).slideToggle(d.speed,function(){$(this).prev('.menuTree').toggleClass('expanded').data('state','ready').trigger('statechange')}).toggleClass('collapsed');break;case"toggle":$(this.treeReveal).toggle(d.speed,function(){$(this).prev('.menuTree').toggleClass('expanded').data('state','ready').trigger('statechange')}).toggleClass('collapsed');break;default:}}a.preventDefault()}$.fn.menuTree.controller=function(a){var b=$(a.target);if(b.data('state')!='ready'){b.data('responsive',false)}else{b.data('responsive',true);if(b.next(d.listElement).find('.expanded').length>0){b.next(d.listElement).find('.expanded').each(function(){$(this).removeClass('expanded').next(d.listElement).hide().addClass('collapsed')})}}};return this.treeTargets.each(function(){var a=$(this);a.data({state:'ready',responsive:true});a.addClass('menuTree');switch(d.listElement){case"dd":this.treeReveal=a.parent().next(d.listElement);break;case"ol":this.treeReveal=a.next(d.listElement);break;default:this.treeReveal=a.next(d.listElement)}$(this.treeReveal).toggleClass('collapsed');a.click(clickHandler);$('.menuTree').bind('statechange',$.fn.menuTree.controller)})}})(jQuery);

