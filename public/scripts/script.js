var main = function() {

	getTweet: function() {
		var tweetData = $('.tweet').serializeArray()[0];
		var tweetText = tweetData[tweet];
		return tweetText;
	}

  	$('#ClintonBtn').click(function() {

  		console.log(getTweet());
  		
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