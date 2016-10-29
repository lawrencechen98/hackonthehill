var main = function() {
  $('#ClintonBtn').click(function() {
    $.ajax({
    	'url': '/sendClintonTweet',
    	'type': 'POST',
    	'success': function(data) {
    		if (data=="success") {
    			alert("request sent");
    		}
    	}
    });
  });
  $('#TrumpBtn').click(function() {
    $.ajax({
    	'url': '/sendTrumpTweet',
    	'type': 'POST',
    	'success': function(data) {
    		if (data=="success") {
    			alert("request sent");
    		}
    	}
    });
  });
}

$(document).ready(main);