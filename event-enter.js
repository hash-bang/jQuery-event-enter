$(function() {
/**
* @author Matt Carter <m@ttcarter.com>
* @version 1.0.0
* @url https://github.com/hash-bang/jQuery-event-enter
*
* Custom jQuery Bind event to capture the enter key being pressed within an input box
* e.g.
* 	$('#my_input_box').bind('enter', function() { alert('You pressed enter!'); });
*	$('#my_input_box2').enter(function() { alert('You pressed enter!'); });
*/
$.event.special.enter = {
	setup: function(data, namespaces) {
		$(this).bind('keydown', jQuery.event.special.enter.handler);
	},

	teardown: function(namespaces) {
		$(this).unbind('keydown', jQuery.event.special.enter.handler);
	},

	handler: function(event) {
		if (event.which == 13) {
			event.type = "enter";
			jQuery.event.handle.apply(this, arguments)
		}
	}
}
});
