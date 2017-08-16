let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let gameSchema = new Schema({
    appid: Number,
    name: String
});


module.exports = mongoose.model("games", gameSchema);