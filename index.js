const express = require('express');
const Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'jiIijCxDbOnaehbs7b7tqJPyX',
  consumer_secret: 'DwE2m28SgJgS7lzvY10lKTe35n788d1gJSzx5GoTffgUJ2Bbjl',
  access_token_key: '792408044491583488-6vQl7QBWCkQoq6gvq0PuKgNQqdoUueb',
  access_token_secret: 'Zs8gqf6rW341i58Y5fD8gRbzFFGvGR71KkOx1sXW0hFxE'
});

var hillaryHandle = "@HillaryClinton";
var donaldHandle = "@realDonaldTrump";

var hillaryTweets = [
	"manage your emails!", 
	"Hillary for Prison!",
	"Such a nasty woman"
];

var donaldTweets = [
	"You are a HUGE disgrace!",
	"Build a wall my ass",
	"Tu eres un bad hombre",
	"Nice hands buddy... :)"

]



let app = express();

app.use(express.static("public"));

app.post('/sendTrumpTweet', function(req, res) {
	res.send("success");
	console.log("got it!");
	client.post('statuses/update', 
				{status: donaldHandle+donaldTweets[Math.floor(Math.random() * (donaldTweets.length)]}, 
				function(error, tweet, res) {
		
		if (error){
			console.log(error);
		}
		console.log("tweet: ", tweet);
		console.log(res);
	})
})

app.listen(3000, function() {
	console.log("listening on port 3000...")
})