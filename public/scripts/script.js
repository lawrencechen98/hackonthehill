var main = function() {

	function getTweet(dom_query) {
		var tweetData = $(dom_query).serializeArray()[0];
		//var tweetText = tweetData["value"];
		return tweetData;
	}

  	$('#ClintonBtn').click(function() {

  		var tweet = getTweet('#tweetform');
  		console.log(tweet);
  		
    	$.ajax({
    		url: '/sendClintonTweet',
    		type: 'POST',
    		data: tweet,
    		success: function(data) {
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