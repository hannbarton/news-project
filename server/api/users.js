const router = require('express').Router();
const passport = require("passport");
const { User } = require('../db/models');
module.exports = router;

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
       return next();
        }
    res.redirect('/');
}

router.get('/', async (req, res, next) => {
	try {
		const users = await User.findAll({
			attributes: ["id", "email"]
		});
		res.json(users);
	} catch (err) {
		next(err);
	}
});

router.post('/login', passport.authenticate('local-login', {
    successRedirect : '/home',
    failureRedirect : '/login',
    failureFlash : true
}));

// router.post('/signup',passport.authenticate('local-signup',  async (req, res, next) => {
// 	try {
// 		await User.create(req.body);
// 		const redir = { redirect: '/home' };
// 		res.json(redir);
// 	} catch (err) {
// 		console.error(err);
// 	}
// }));

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/home',
    failureRedirect : '/signup',
    failureFlash : true
}));

router.get('/:id', async (req, res, next) => {
	try {
		const user = await User.findOne(req.body);
		res.json(user);
	} catch (err) {
		next(err);
	}
});

router.get('/logout', function(req, res){
    req.logout();
    req.flash('message', 'You have been logged out');
    res.redirect('/');
})
