const express = require('express');
const router = express.Router();
const Games = require('../Models/Games');


//New game
router.post('/', function(req, res, next) {
  const { name, type, company, year} = req.body;
  const game = new Games({
      name:name,
      type:type,
      company:company,
      year:year
  });
  game.save((err,data) => {
    if (err)
      res.json(err);
    else
      res.json({status:1});
  })
});
//List All Games
router.get('/', (req, res, next) => {
    const promise = Games.find({ });
    promise.then((data) => {
      res.json(data);
    }).catch((err) => {
      res.json(err);
    });
});
//Find a game
router.get('/:game_id', (req, res, next) => {
    const promise = Games.findById(req.params.game_id);
    promise.then((data) => {
        if (!data)
            next({message: "Cant find the game", code:99});
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});

//Update a game info
router.put('/:game_id', (req, res, next) => {
    const promise = Games.findByIdAndUpdate(req.params.game_id, req.body, { new:true });
    promise.then((data) => {
        if (!data)
            res.json({message:'wrong', status:15});
        else
            res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});
//Delete
router.delete('/:game_id', (req, res, next) => {
    const promise = Games.findByIdAndRemove(req.params.game_id);
    promise.then((data) => {
        if (!data)
            res.json({message:'wrong', status:15});
        else
            res.json({message:'Deleted', status:5});
    }).catch((err) => {
        res.json(err);
    });
});
//Between 2 years
router.get('/:start_year/:end_year', (req, res) => {
    const { start_year, end_year } = req.params;
    const promise = Games.find({ year:{ "$gte": parseInt(start_year), "$lte": parseInt(end_year) } }).limit(10).sort({ year: -1 });

    promise.then((data) => {
        if (!data)
            next({ message: 'The game was not found.' });
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});




module.exports = router;
