const jwt = require('jwt-simple');
const config = require('../config')

const User = require('../models/user');


function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return  jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.login = function(req, res, next) {
    //User has already had thero email and password auth'd
    //We just need to give them a token
    res.send({ token: tokenForUser(req.user)})
}


exports.register = function(req, res, next) {
    console.log(req.body)
    const email = req.body.email;
    const password = req.body.password;
    // res.send({ success: 'true'});

    //write validation for email and password

    if(!email || !password) {
        return res.status(422).send({ error: 'You must provide email and password'})
    }

    //See if user with the given email exist
    User.findOne({ email: email}, function(err, existingUser) {
        if(err) { return next(err);}

        //If a user with email does exist, return an error
        if(existingUser) {
            return res.status(422).send({ error: 'Email is in use'})
        }

        //if a user with email does not exist, create and save user record
        const user = new User({ 
            email: email,
            password: password
        })

        user.save(function(err) {
            if(err) { return next(err); }
        
        //Respond to request indication the user was created
        res.json({ token: tokenForUser(user) });
        })
    })

    

    


}