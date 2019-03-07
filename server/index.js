const path = require("path");
const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const db = require("./db");
const sessionStore = new SequelizeStore({ db });
const PORT = 3000;
const app = express();
const flash = require("connect-flash");

module.exports = app;

require("../secrets");

// serialize User
passport.serializeUser((user, done) => {
	console.log("serializedd", user);
	done(null, user.id);
});

// deserialize User
passport.deserializeUser(async (id, done) => {
	try {
		console.log("deseralizeddd", id);
		const user = await db.models.user.findByPk(id);
		done(null, user);
	} catch (err) {
		done(err);
	}
});

passport.use(
	"local-login",
	new LocalStrategy(
		{
			usernameField: "email",
			passwordField: "password",
			passReqToCallback: true
		},
		async function(email, password, done) {
			await db.models.user.findOne(
				{
					where: {
						email: email
					}
				},
				function(err, user) {
					if (err) {
						return done(err);
					}
					if (!user) {
						return done(null, false, { message: "Incorrect username." });
					}
					if (!user.validPassword(password)) {
						return done(null, false, { message: "Incorrect password." });
					}
					return done(null, user);
				}
			);
		}
	)
);

passport.use(
	"local-signup",
	new LocalStrategy(
		{
			usernameField: "email",
			passwordField: "password",
			passReqToCallback: true
		},
		async function(req, email, password, done) {
			// find a user whose email is the same as the forms email
			// we are checking to see if the user trying to login already exists
			await db.models.user.findOne(
				{
					where: {
						email: email
					}
				},
				function(err, user) {
					// if there are any errors, return the error
					if (err) return done(err);

					// check to see if theres already a user with that email
					if (user) {
						return done(
							null,
							false,
							req.flash("signupMessage", "That email is already taken.")
						);
					}
				}
			);
		}
	)
);

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

	app.use("/api", require("./api"));

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

const syncDb = () => db.sync({force: true});

const startListening = () => {
	app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
};

async function startApp() {
	await sessionStore.sync();
	await syncDb();
	await createApp();
	await startListening();
}

startApp();
