const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const players = require("./data/players");
const posts = require("./data/posts");

const app = express();
const PORT = 5500;


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

// Set the views directory
app.set('views', path.join(__dirname, 'views'));
// Set the view engine to use HTML files
app.set('view engine', 'html');
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

// POST route to create a user
app.post('/players', (req, res) => {
  const  newPlayer  = req.body;
  console.log(players);
  players.push(newPlayer);
  res.redirect('/');
});

// GET route to fetch all users
app.get('/players', (req, res) => {
  //res.json();
  res.json(players);
});
// document.getElementById("button").addEventListener("click", function() {
//   addPlayer("Are you a new player");
// }, true);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});