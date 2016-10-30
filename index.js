const express = require('express');
const Twitter = require('twitter');
const BP = require('body-parser');

var client = new Twitter({
  consumer_key: 'jiIijCxDbOnaehbs7b7tqJPyX',
  consumer_secret: 'DwE2m28SgJgS7lzvY10lKTe35n788d1gJSzx5GoTffgUJ2Bbjl',
  access_token_key: '792408044491583488-6vQl7QBWCkQoq6gvq0PuKgNQqdoUueb',
  access_token_secret: 'Zs8gqf6rW341i58Y5fD8gRbzFFGvGR71KkOx1sXW0hFxE'
});

var hillaryHandle = "@HillaryClinton ";
var donaldHandle = "@realDonaldTrump ";

var hillaryTweets = [
	"manage your emails", 
	"Hillary for Prison",
	"Such a nasty woman!"
];

var donaldTweets = [
	"You are a HUGE disgrace!",
	"Build a wall my ass",
	"Tu eres un bad hombre",
	"Nice hands buddy... :)"
]



let app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static("public"));
app.use(BP.urlencoded({extended: false}));

app.get('/', (req,res) => {

	res.redirect('/main.html');
});

app.get('/searchtweets', (req,res) => {
	
	client.get('search/tweets', {q: 'Clinton', count: 50}, function(error, tweets, response) {
   		var statuses = tweets['statuses'];
   		res.json(statuses);
	});
});

app.get('/searchtweets2', (req,res) => {
	
	client.get('search/tweets', {q: 'Trump', count: 50}, function(error, tweets, response) {
   		var statuses = tweets['statuses'];
   		console.log(statuses);
   		res.json(statuses);
	});
});


app.post('/sendClintonTweet', function(req, res) {
	res.send("success");
	console.log("got it!");
	console.log(req.body.value);
	var tweet = req.body.value;


	if(tweet === ""){client.post('statuses/update', 
				{status: hillaryHandle + hillaryTweets[Math.floor(Math.random() * (hillaryTweets.length))]}, 
				function(error, tweet, res) {
		
		if (error){
			console.log(error);
		} 

	})
	}

	else{client.post('statuses/update', 
				{status: hillaryHandle + tweet}, 
				function(error, tweet, res) {
		
		if (error){
			console.log(error);
		}
	})
	}
})


app.post('/sendTrumpTweet', function(req, res) {
	res.send("success");
	console.log("got it!");
	console.log(req.body.value);
	var tweet = req.body.value;

	if(tweet === ""){client.post('statuses/update', 
				{status: donaldHandle + donaldTweets[Math.floor(Math.random() * (donaldTweets.length))]}, 
				function(error, tweet, res) {
		
		if (error){
			console.log(error);
		} 

	})
	}

	else{client.post('statuses/update', 
				{status: donaldHandle + tweet}, 
				function(error, tweet, res) {
		
		if (error){
			console.log(error);
		}

	})
	}
})

app.listen(process.env.PORT || 3000, function() {
	console.log("app starting...")
})