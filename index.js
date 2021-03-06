const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 3000;


//Middleware for CORS
app.use(cors());

//Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/*express.static is a built in middleware function to serve static files.
 We are telling express server public folder is the place to look for the static files
 */


app.listen(port, () => {
	console.log(`Starting the server at port ${port}`);
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
	res.render('public/index');
});


