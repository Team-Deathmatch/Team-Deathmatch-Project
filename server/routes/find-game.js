let express = require('express');
let gameRouter = express.Router();
let GameModel = require("../models/game-model.js");

gameRouter.get('/:name', (req, res) =>{
    GameModel.find({name: {"$regex": req.params.name, "$options": "i"}}, (err, data) =>{
        if(err){
            res.status(500).send({"Message": "Error in Server", err})
        } else if(data === null){
            res.status(404).send({"Message": "No game was found with this name"})
        } else {
            res.status(200).send({"Message": "Here is your data", data})
        }
    })
});

module.exports = gameRouter;