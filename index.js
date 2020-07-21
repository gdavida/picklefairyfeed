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
			    "uid": "ANCIENT_SITES_JSON_TTS_1",
			    "updateDate": "2020-07-17T00:00:00.0Z",
			    "titleText": "The Ridgeway - Southwestern England and Wales",
			    "mainText": "For more than 5,000 years travellers have used the Ridgeway, Britain's oldest road. Stretching 85 miles, it functioned for thousands of years as a reliable trading route. The high dry ground made travel easy and provided a measure of protection by giving traders a commanding view, warning against potential attacks. During the Iron Age, inhabitants took advantage of the high ground by building hillforts along the Ridgeway to help defend the trading route. In medieval times and later, the Ridgeway was used to move livestock from the West Country and Wales to markets in London. Before the Enclosure Acts of 1750, the Ridgeway existed as an informal series of tracks across the chalk downs, chosen by travellers based on path conditions. Once enclosures started, the current path developed through the building of earth banks and the planting of hedges.",
			    "redirectionUrl": ""
			   }
	    ]
	)
});

server.listen(PORT, () => {
     console.log("The server is listening.")
});