const express = require("express");
const router = express.Router();

const players = require("../data/players");
const error = require("../utilities/error");
const rot = express();

router
  .route("/")
  .get((req, res) => {
    const links = [
      {
        href: "players/:id",
        rel: ":id",
        type: "GET",
      },
    ];

    //res.json({ players, links });
    res.json({ players});
  })
  .post((req, res, next) => {
    //if (req.body.playerId && req.body.content ) {
      if ( true ) {
      if (players.find((u) => u.nickName == req.body.nickName)) {
        next(error(409, "Nickame Already Taken"));
      }

      const player = {
        id: players[players.length - 1].id + 1,

        name: req.body.name,
        nickName: req.body.nickName,
        gender: req.body.gender,
      };
      if(players.length >= 4 ){
        //rot.get('/gameReady', (req, res) => {
          res.redirect('/gameReady');
            //res.redirect('/gameReady')
        
        //})} 
       } else{

      players.push(player);
     
        res.redirect('/team');}
   
  }});

router
  .route("/:id")
  .get((req, res, next) => {
    const player = players.find((u) => u.id == req.params.id);

    const links = [
      {
        href: `/${req.params.id}`,
        rel: "",
        type: "PATCH",
      },
      {
        href: `/${req.params.id}`,
        rel: "",
        type: "DELETE",
      },
    ];

    if (player) res.json({ player, links });
    else next();
  })
  .patch((req, res, next) => {
    const player = players.find((u, i) => {
      if (u.id == req.params.id) {
        for (const key in req.body) {
          players[i][key] = req.body[key];
        }
        return true;
      }
    });

    if (player) res.json(user);
    else next();
  })
  .delete((req, res, next) => {
    const player = players.find((u, i) => {
      if (u.id == req.params.id) {
        players.splice(i, 1);
        return true;
      }
    });

    if (player) res.json(player);
    else next();
  });

module.exports = router;


