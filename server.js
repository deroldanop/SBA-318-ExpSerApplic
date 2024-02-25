const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

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



// POST route to create a player
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
app.get('/players', (req, res) => {
  if(players.length >= 4){
    app.get('/gameReady', (req, res) => {
        res.sendFile(`./views/gameReady.html`, { root: __dirname });

    
    })} else{

  players.push(player);

  res.json(players);
    
  }});
// app.get('/players', (req, res) => {
//   res.send(`<h2>This is the team for the nex game </h2>`);

// });

// document.getElementById("button").addEventListener("click", function() {
//   addPlayer("Are you a new player");
// }, true);

app.listen(PORT, 'localhost', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// This function is specifically designed to serve static files, such as images, CSS files, JavaScript files, etc., from a directory.
// express.static()

// //require(”http”).createServer((req, res) => res.end(”Hello World”)).listen(3000);

//Need delete router and putch router and use param