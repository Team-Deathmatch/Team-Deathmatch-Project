let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let wishlistSchema = new Schema({
    name: String,
    image: String,
    price: String,
    appId: Number,
    steamId: String
});


module.exports = mongoose.model("wishlist", wishlistSchema);