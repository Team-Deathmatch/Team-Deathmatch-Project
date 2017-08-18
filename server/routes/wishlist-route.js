let express = require('express');
let wishlistRouter = express.Router();

let Wish = require("../models/wishlist-model.js");



wishlistRouter.get("/:id", (req, res) =>{
    Wish.find({steamId: req.params.id}, (err, data) =>{
        if(err){
            res.status(500).send({"Message": "Error in Server", err})
        } else {
            res.status(200).send({"Message": "Success, here is your data", data})
        }
    })
});

wishlistRouter.post("/", (req, res) =>{
    let newWish = Wish(req.body);
    newWish.save((err, data) =>{
        if(err){
            res.status(500).send({"Message": "Error in Server", err});
        } else {
            res.status(201).send({"Message": "Success, data posted", data})
        }
    })
});

wishlistRouter.delete("/:id", (req, res) =>{
    Wish.findByIdAndRemove(req.params.id, (err, data) =>{
        if(err){
            res.status(500).send({"Message": "Error in Server", err});
        } else if(data === null){
            res.status(404).send({"Message": "Error not found"});
        } else {
            res.status(200).send({"Message": "Success, data removed", data})
        }
    })
});

module.exports = wishlistRouter;