const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//Models
const User = require('../Models/Users');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', function(req, res, next) {
    const {username, password} = req.body;
    bcrypt.hash(password, 10).then(function(hash) {
        const user = new User({
            username,
            password:hash
        });
        const promise = user.save();
        promise.then((data) => {
            res.json(data)
        }).catch((err) => {
            res.json(err)
        });
    });

});

router.post('/auth', (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username }, (err, user) => {
        if (err)
            throw err;
        if (!user){
            res.json({status:false, message:'Auth failed.User not found...'});
        }else{
            bcrypt.compare(password,user.password).then((result) => {
                if(!result){
                    res.json({status:false, message:'wrong password.'});
                }else{
                    const payload = { username };
                    const token = jwt.sign(payload,req.app.get('api_secret_key'),{expiresIn:720});
                    res.json({status:true, message:'Your token is: '+ token});
                }
            });

        };

    });
});


module.exports = router;
