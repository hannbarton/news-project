const router = require('express').Router();
const passport = require("passport");
const { User } = require('../db/models');
module.exports = router;

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

router.post('/login', passport.authenticate('local',  {
    successRedirect : '/home',
    failureRedirect : '/login',
    failureFlash : true
}));

router.post('/signup', async (req, res, next) => {
	try {
		await User.create(req.body);
		const redir = { redirect: '/home' };
		res.json(redir);
	} catch (err) {
		next(err);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const user = await User.findOne(req.body);
		res.json(user);
	} catch (err) {
		next(err);
	}
});

