jQuery MenuTree Plugin
================================

A JavaScript plugin based on jQuery library that builds an expandable/collapsable menu tree from a list element
---------------------------------------
* Requires JavaScript library: [jQuery](http://jquery.com/)

* Developed using jQuery version 1.4 ... [Plugin page](http://plugins.jquery.com/project/menuTree)

* Status : New plugin, give it a try!

* Blog post for MenuTree plugin on my blog... [Blog](http://rant.cc/SC2 ) 

* Demo of the plugin behavior showing both lists and definition list... [Demo](http://rant.cc/z9V) 

* Tracer plugin added and featured with demo.

How to build a menu tree that is expandable with jQuery
-----------------------------

Your html will need to link to the jQuery plugin in the head element

`<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.0/jquery.min.js" type="text/javascript" charset="utf-8"></script>`

Your html markup needs to use a list like...

`<ul id="myTree">
	<li><a href="#">Tree Menu</a>
		<ol>
			<li><a href="#">Top Parent - Tier 1</a>
				<ul>
					<li><a href="#">Child - Tier 2 - One</a>
						<ul>
							<li><a href="http://pixelhandler.com">Grandchild</a> - Tier 3 - Pixelhandler</li>
							<li><a href="http://jquery.com">Grandchild</a> - Tier 3 - jQuery</li>
						</ul>
					</li>
					<li><a href="#">Child - Tier 2 - Two</a>
						<ul>
							<li><a href="http://github.com/jquery/jquery/">Grandchild</a> - Tier 3 - github-jQuery</li>
						</ul>
					</li>
				</ul>
			</li>
			<li><a href="#">Lower Parent - Tier 1</a>
				<ul>
					<li><a href="#">Child - Tier 2 - One</a>
						<ul>
							<li>Grandchild - Tier 3 - One</li>
							<li>Grandchild - Tier 3 - Two</li>
						</ul>
					</li>
					<li><a href="#">Child - Tier 2 - Two</a>
						<ul>
							<li>Grandchild - Tier 3 - One</li>
						</ul>
					</li>
				</ul>
			</li>
		</ol>
	</li>
</ul>`

This plugin uses a few CSS classes for visual design...

`/* styles for menuTree plugin */

#myTree .menuTree:before {
	content: "[+] ";
}
#myTree .expanded:before {
	content: "[-] ";
}
#myTree .collapsed {
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

This plugin has default options which you may override. The `animation` defaults to the jQuery `toggle` method to show/hide the child list(s); when called with the `animation: true` option the plugin uses `slideToggle` to add effects to the display of child menu(s). You may set the speed as you please, e.g. `speed: 'slow'`. Also, you may indicate what the child menu(s) are marked up with, e.g. `listElement: 'ol'` instead of the default `listElement: 'ul'`

`
$.fn.menuTree.defaults = { 
	animation: false, 
	speed: 'fast',
	listElement: 'ul'
}`

If you have any questions, please feel free to ask them on the jQuery
meetup site, found here:  
[http://meetups.jquery.com/group/jquerylosangeles](http://meetups.jquery.com/group/jquerylosangeles)
