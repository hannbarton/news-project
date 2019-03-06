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

// router.post('/login', passport.authenticate('local-login', {
//     successRedirect : '/home',
//     failureRedirect : '/login',
//     failureFlash : true
// }));
router.post('/login', async (req, res, next) => {
    try {
      const user = await User.findOne({where: {email: req.body.email}})
      if (!user) {
        console.log('No such user found:', req.body.email)
        res.status(401).send('Wrong username and/or password')
      } else if (!user.correctPassword(req.body.password)) {
        console.log('Incorrect password for user:', req.body.email)
        res.status(401).send('Wrong username and/or password')
      } else {
        req.login(user, err => (err ? next(err) : res.json(user)))
      }
    } catch (err) {
      next(err)
    }
  })

// router.get('/login', (req, res) => {
//     res.render('this is working')
//   })

// router.post('/signup', passport.authenticate('local-signup',  async (req, res, next) => {
// 	try {
//         console.log('success')
// 		await User.create(req.body);
// 		const redir = { redirect: '/home' };
// 		res.json(redir);
// 	} catch (err) {
// 		console.error(err);
// 	}
// }));

router.post('/signup', async (req, res, next) => {
    try {
      const user = await User.create(req.body)
      req.login(user, err => (err ? next(err) : res.json(user)))
    } catch (err) {
      if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(401).send('User already exists')
      } else {
        next(err)
      }
    }
  })

// router.post('/signup', passport.authenticate('local-signup', {
//     successRedirect : '/home',
//     failureRedirect : '/signup',
//     failureFlash : true
// }));

router.get('/:id', async (req, res, next) => {
	try {
		const user = await User.findOne(req.body);
		res.json(user);
	} catch (err) {
		next(err);
	}
});

router.post('/logout', (req, res) => {
    req.logout()
    req.session.destroy()
    res.redirect('/')
  })

  router.get('/me', (req, res) => {
    res.json(req.user)
  })
