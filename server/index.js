let express = require("express");
let cors = require("cors");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let passport = require('passport');
let SteamStrategy = require("passport-steam");
let path = require("path");

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


// app.get('/auth/steam',
//     passport.authenticate('steam'),
//     function (req, res) {
//         res.redirect('/');
//     });

// app.get('/auth/steam/return',
//     passport.authenticate('steam', { failureRedirect: '/login' }),
//     function(req, res) {
//         // Successful authentication, redirect home.
//         res.redirect('/');
//     });
// app.get('/auth/steam/return',
//     // Issue #37 - Workaround for Express router module stripping the full url, causing assertion to fail
//     function (req, res, next) {
//         next();
//     },
//     passport.authenticate('steam', {failureRedirect: '/'}),
//     function (req, res) {
//     let query = "?";
//     for(let key in req.user) {
//         if(typeof req.user[key] !== "string") {
//             for(let secKey in req.user[key]) {
//                 if(secKey === "avatar") {
//                     query += "avatar=" + req.user[key][secKey] + "&";
//                 }
//             }
//         } else {
//             query += key + "=" + req.user[key] + "&";
//         }
//
//     }
//         res.redirect('/' + query);
//     });

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});



app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT}`)
});


// let infoArr = window.location.href.split("&");
// let finalArr = [];
// for(let i = 0; i < infoArr.length; i++){
//     finalArr.push(infoArr[i].split("="));
//
// }
// let finalObj = {};
// finalArr.forEach((item =>{
//     finalObj[item[0]] = [item[1]];
// }));
// console.log(finalObj);

