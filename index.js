const express = require('express');
const server = express();

server.use(express.json());

const PORT = process.env.PORT || 3000;


server.get('/', (req, res) => {
	res
	.set('Content-Type', 'application/json')
	.json(
	    [
			  {
			    "uid": "PICKLE_FAIRY_JSON_TTS_1",
			    "updateDate": "2020-07-19T00:00:00.0Z",
			    "titleText": "A joke from the Pickle Fairy",
			    "streamURL": "https://picklefairy.s3.us-east-2.amazonaws.com/Pickle-fairy-test-1.mp3",
			   },

			  {
			    "uid": "PICKLE_FAIRY_JSON_TTS_2",
			    "updateDate": "2020-07-19T02:00:00.0Z",
			    "titleText": "A joke from the Pickle Fairy",
			    "mainText":"What do young pickles like on their birthday cake... Canned dills!",
			   }
	    ]
	)
});

server.listen(PORT, () => {
     console.log("The server is listening.")
});