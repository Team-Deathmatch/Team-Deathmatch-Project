let express = require("express");
let cors = require("cors");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let passport = require('passport');
let SteamStrategy = require("passport-steam");
let path = require("path");
let request = require('request');

let authRouter = require('./routes/auth.js');

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});


passport.use(new SteamStrategy({
        returnURL: 'http://localhost:8080/auth/steam/return',
        realm: 'http://localhost:8080/',
        apiKey: '9F65B950F0EC9ECABF9DE3D7F46E9A5B'
    },
    (identifier, profile, done) => {
        process.nextTick(function () {
            profile.identifier = identifier;
            return done(null, profile);
        });
    }
));

let PORT = process.env.PORT || 8080;

mongoose.connect(`mongodb://localhost:27017/example`);


let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use(passport.initialize());



app.use('/auth', authRouter);


app.use(express.static(path.resolve(__dirname, "..", "build")));


app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.get('/steam/:id', (req, res) =>{
    request(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=9F65B950F0EC9ECABF9DE3D7F46E9A5B&steamid=${req.params.id}&include_appinfo=1&format=json`, (err, response, body) =>{
        if(err){
            res.status(500).send({"Message": "Error on Server", err});
        } else {
            res.status(200).send({"Message": "Here is your data", data: JSON.parse((body))})
        }
    })
});



app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT}`)
});
