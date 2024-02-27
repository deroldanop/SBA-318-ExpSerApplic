const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const fs = require('fs');

const players = require("./data/players");
const posts = require("./data/posts");
const router = require('./routes/players')
const app = express();
const PORT = 5500;


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.use('/players', router);

// Set the views directory
app.set('views', path.join(__dirname, 'views'));
// Set the view engine to use HTML files
app.set('view engine', 'html','ejs');
// Dummy data
//let players = [];


// Routes
// Serve HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
//Route to render the team page
app.get('/team', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'team.html'));
});

//Route to render the gameReady page
app.get('/gameReady', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'gameReady.html'));
});

///////
// //const jsonPlayers = JSON.stringify(players, null, 2);
// const uu = "Hello We are 4"
// app.get('/gameReady', function(req, res) {
//   // Read the JSON file
//   // fs.readFile('jsonPlayers', 'utf8', function(err, jsonPlayers) {
//   //   if (err) {
//   //     console.error('Error reading JSON file:', err);
//   //     return res.status(500).send('Error reading JSON file');
//   //   }

//   res.render('gameReady', {uu: uu});

//     // Parse the JSON data
//     //const jsonData = JSON.parse(jsonPlayers);

//     // Render the template and pass the JSON data to it
//     //res.render('/gameReady', { jsonData: jsonData });
//   });
// //});

//// POST route to create a player
//   app.post('/players', (req, res) => {
// const newPlayer = {
//   id: players[players.length - 1].id + 1,

//   name: req.body.name,
//   nickName: req.body.nickName,
//   gender: req.body.gender,
// };
// players.push(newPlayer);
// res.redirect('/team');
//   });

// app.post('/players', (req, res) => {
  
//   const  newPlayer  = req.body;
  
//   console.log(players);
//   players.push(newPlayer);
//   res.redirect('/team');
// });

//GET route to fetch all players
// app.get('/players', (req, res) => {
//   if(players.length >= 4){
//     app.get('./gameReady', (req, res) => {
//         res.sendFile(`/views/gameReady.html`, { root: __dirname });

    
//     })} else{

//   players.push(player);

//   res.json(players);
    
//   }});
// app.get('/players', (req, res) => {
//   res.send(`<h2>This is the team for the nex game </h2>`);

// });

// document.getElementById("button").addEventListener("click", function() {
//   addPlayer("Are you a new player");
// }, true);

app.listen(PORT, 'localhost', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
