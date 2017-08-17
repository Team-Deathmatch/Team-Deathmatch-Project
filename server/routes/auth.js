let express = require('express');
let authRouter = express.Router();
let passport = require('passport');
let path = require("path");
// authRouter.use(express.static(path.resolve(__dirname, "..", "build")));





authRouter.get('/steam',
    passport.authenticate('steam'),
    (req, res) => {
        res.redirect('/');
    });

authRouter.get('/steam/return',
    // Issue #37 - Workaround for Express router module stripping the full url, causing assertion to fail
    function (req, res, next) {
        // req.url = req.originalUrl;
        next();
    },
    passport.authenticate('steam', {failureRedirect: '/'}),
    function (req, res) {
        let query = "?";
        for(let key in req.user) {
            if(typeof req.user[key] !== "string") {
                for(let secKey in req.user[key]) {
                    if(secKey === "avatar") {
                        query += "avatar=" + req.user[key][secKey] + "&";
                    }
                }
            } else {
                query += key + "=" + req.user[key] + "&";
            }

        }
        res.redirect('/' + query);
    });


// authRouter.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
// });

module.exports = authRouter;

