const path = require("path");
const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const db = require("./db");
const User = require('./db')
const sessionStore = new SequelizeStore({ db });
const PORT = 3000;
const app = express();
const flash = require('connect-flash');

module.exports = app;

require('../secrets')

passport.use('local', new LocalStrategy({passReqToCallback : true},
  function(email, password, done) {
    User.findOne({ email: email }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

// serialize User
passport.serializeUser((user, done) => {
	console.log('serialize', user)
	done(null, user.id)
});

// deserialize User
passport.deserializeUser(async (id, done) => {
	try {
		const user = await db.models.user.findById(id);
		done(null, user);
	} catch (err) {
		done(err);
	}
});

app.use(flash());

const createApp = () => {
	// logging middleware
	app.use(morgan("dev"));

	// body parsing middleware
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));

	// session middleware with passport
	app.use(
		session({
			secret: "this is my news project",
			store: sessionStore,
			resave: false,
			saveUninitialized: false
		})
	);

	app.use(passport.initialize());
	app.use(passport.session());

	app.use('/api', require('./api'))

	// static file-serving middleware
	app.use(express.static(path.join(__dirname, "..", "public")));

	// any remaining requests with an extension (.js, .css, etc.) send 404
	app.use((req, res, next) => {
		if (path.extname(req.path).length) {
			const err = new Error("Not found");
			err.status = 404;
			next(err);
		} else {
			next();
		}
    });

	// sends index.html
	app.use("*", (req, res) => {
		res.sendFile(path.join(__dirname, "..", "public/index.html"));
	});

	// error handling endware
	app.use((err, req, res, next) => {
		console.error(err);
		console.error(err.stack);
		res.status(err.status || 500).send(err.message || "Internal server error.");
	});
};

const syncDb = () => db.sync();

const startListening = () => {
	// start listening (and create a 'server' object representing our server)
	app.listen(PORT, () =>
		console.log(`Mixing it up on port ${PORT}`)
	);
};

async function startApp() {
	await sessionStore.sync();
	await syncDb();
	await createApp();
	await startListening();
}

startApp()

