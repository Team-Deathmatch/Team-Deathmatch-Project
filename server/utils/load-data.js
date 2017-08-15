let request = require('request');
let mongoose = require("mongoose");
let GameModel = require("../models/game-model.js");

mongoose.connect(`mongodb://localhost:27017/steamapp`);

request(`https://api.steampowered.com/ISteamApps/GetAppList/v002`, (err, response, body) =>{
    if(err){
        console.log(err);
    } else {
       let data =  JSON.parse(body);
       let apps = data.applist.apps;
       for(let i = 0; i < apps.length; i++){
           let newGame = new GameModel(apps[i]);
           newGame.save((err, data) =>{
               if(err){
                   console.log(err)
               }
           })
       }
       console.log("Data Has Been Saved")

    }
});