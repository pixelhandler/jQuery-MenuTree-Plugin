jQuery MenuTree Plugin
================================

A JavaScript plugin based on jQuery library that builds an expandable/collapsable menu tree from a list element
---------------------------------------
* Requires JavaScript library: [jQuery](http://jquery.com/)

* Developed using jQuery version 1.4 ... [Plugin page](http://plugins.jquery.com/project/menuTree)

* Demo of the plugin behavior showing both lists and definition list... [Demo](http://rant.cc/z9V) 

* Status : New plugin, give it a try!

* Tracer plugin added and featured with demo.

* Blog post for MenuTree plugin on my blog... [Blog](http://rant.cc/SC2 ) 

How to build a menu tree that is expandable with jQuery
-----------------------------

Your html will need to link to the jQuery plugin in the head element

`<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.0/jquery.min.js" type="text/javascript" charset="utf-8"></script>`

Your html markup needs to use a list like...

`<ul id="myTree">
	<li><a href="#">Tree Menu - toggle OR slideToggle animation</a>
		<ul>
			<li><a href="#">Top Parent - Tier 1</a>
				<ul>
					<li><a href="#">Child - Tier 2</a>
						<ul>
							<li><a href="http://pixelhandler.com">Pixelhandler</a> - Tier 3</li>
							<li><a href="http://jquery.com">jQuery</a> - Tier 3</li>
						</ul>
					</li>
				</ul>
			</li>
			<li><a href="#">Lower Parent - Tier 1</a>
				<ul>
					<li><a href="#">Child - Tier 2</a>
						<ul>
							<li>Grandchild - Tier 3 - One</li>
							<li>Grandchild - Tier 3 - Two</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
	</li>
</ul>`

`<dl id="definitions">
	<dt><a href="#">Definition list - Term 1</a></dt>
	<dd>Description not targeted,
		<em>uses CSS classes to collapse/expanded view</em>
	</dd>
	<dt><a href="#def">Term 2</a></dt>
	<dd>Description 2 with links listed<br />
		<ol>
			<li><a href="http://pixelhandler.com">Pixelhandler</a></li>
			<li><a href="http://jquery.com">jQuery</a></li>
		</ol>
	</dd>
	<dt><a href="#def">Term 3</a></dt>
	<dd>Description 4</dd>
	<dt><a href="#def">Term 4</a></dt>
	<dd>Description 4 with unordered list<br />
		<ul>
			<li>One</li>
			<li>Two</li>
		</ul>
	</dd>
</dl>`

menuTree plugin plugin uses a few CSS classes for visual design...

`#myTree .menuTree:before {
	content: "[+] ";
}`

`#myTree .expanded:before {
	content: "[-] ";
}`

`#myTree .collapsed {
	display: none;
}`

At the end of your html markup, before the closing body element use a script to setup the function...

`<script type="text/javascript" charset="utf-8">

$(document).ready(function() {
	
	$('#myTree').menuTree({
		animation: true
	});
	
});

</script>`

This plugin has default options which you may override. The `animation` option may use jQuery `toggle` or `slideToggle` methods, or just use the default `css` option to show/hide the child list(s).

When called with the `animation: true` option the plugin uses the `handler` option to select `slideToggle` or `toggle` method to add effects to the display of child menu(s). You may set the speed as you please, e.g. `speed: 'slow'`. Also, you may indicate what the child menu(s) are marked up with, e.g. `listElement: 'ol'` instead of the default `listElement: 'ul'`

Call the plugin like :

`$('#myTree').menuTree({
	animation: true,
	handler: 'slideToggle',
	hrefBegins: '#',
	trace: true
});`

To override the default options:

`$.fn.menuTree.defaults = { 
	// setup animation
	animation: false, 
	handler: 'css',
	speed: 'fast',
	// setup hooks in markup
	listElement: 'ul',
	hrefBegins: '#',
	// uses 'tracer' plugin
	trace: false
};`

If you have any questions, please feel free to ask them on the jQuery
meetup site, found here:  
[http://meetups.jquery.com/group/jquerylosangeles](http://meetups.jquery.com/group/jquerylosangeles)
