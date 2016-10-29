var main = function() {
  $('.btn').click(function() {
    $.ajax({
    	'url': '/sendtweet',
    	'type': 'POST',
    },
    'success': function(data) {
    	if (data=="success") {
    		alert("request sent");
    	}
    }
    );
  });
}

$(document).ready(main);