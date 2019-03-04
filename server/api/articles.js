const router = require("express").Router();
const { Article } = require("../db/models");
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("a1819176962141cdbb40972e986690ae");

router.get("/buzzfeed", async (req, res, next) => {
	try {
		newsapi.v2
			.topHeadlines({
                sources: "buzzfeed"
			})
			.then(response => {
                res.send(response)
			});
	} catch (err) {
		next(err);
	}
});

router.get("/reddit", async (req, res, next) => {
	try {
		newsapi.v2
			.topHeadlines({
                sources: "reddit-r-all"
			})
			.then(response => {
                res.send(response)
			});
	} catch (err) {
		next(err);
	}
});

router.get("/google", async (req, res, next) => {
	try {
		newsapi.v2
			.topHeadlines({
                sources: "google-news"
			})
			.then(response => {
                res.send(response)
			});
	} catch (err) {
		next(err);
	}
});

router.get("/natgeo", async (req, res, next) => {
	try {
		newsapi.v2
			.topHeadlines({
                sources: "national-geographic"
			})
			.then(response => {
                res.send(response)
			});
	} catch (err) {
		next(err);
	}
});

router.get("/newsci", async (req, res, next) => {
	try {
		newsapi.v2
			.topHeadlines({
                sources: "new-scientist"
			})
			.then(response => {
                res.send(response)
			});
	} catch (err) {
		next(err);
	}
});

module.exports = router;
