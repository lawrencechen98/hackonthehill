var main = function() {
	$.ajax({
    		url: '/searchtweets',
    		type: 'GET',
    		success: function(data) {
    			console.log(data);
    			for (var i = 0; i < data.length; i++) {
   					var source   = $("#tweet-template").html();
      				var template = Handlebars.compile(source);
      				var context = data[i];
      				var html    = template(context);
      				$("#tweet-table").append(html);
   				}

    		}
    	});

	$.ajax({
    		url: '/searchtweets2',
    		type: 'GET',
    		success: function(data) {
    			console.log(data);
    			for (var i = 0; i < data.length; i++) {
   					var source   = $("#tweet2-template").html();
      				var template = Handlebars.compile(source);
      				var context = data[i];
      				var html    = template(context);
      				$("#tweet2-table").append(html);
   				}

    		}
    	});
   		   		
   		
	function getTweet(dom_query) {
		var tweetData = $(dom_query).serializeArray()[0];
		//var tweetText = tweetData["value"];
		return tweetData;
	}

  	$('#ClintonBtn').click(function() {

  		var tweet = getTweet('#tweetform');
  		console.log(tweet);

  		$('.status-box').val('');
  		
    	$.ajax({
    		url: '/sendClintonTweet',
    		type: 'POST',
    		data: tweet,
    		success: function(data) {
    			
    		}
    	});
  	});
 	$('#TrumpBtn').click(function() {

  		var tweet = getTweet('#tweetform');
  		console.log(tweet);

  		$('.status-box').val('');
  		
    	$.ajax({
    		url: '/sendTrumpTweet',
    		type: 'POST',
    		data: tweet,
    		success: function(data) {
    			
    		}
    	});
  	});

}

$(document).ready(main);