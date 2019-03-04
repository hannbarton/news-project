const router = require("express").Router();
const { Article } = require("../db/models");
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("a1819176962141cdbb40972e986690ae");

router.get("/", async (req, res, next) => {
	try {
		newsapi.v2
			.topHeadlines({
                sources: "buzzfeed"
			})
			.then(response => {
                console.log("response", response);
                res.send(response)
			});
	} catch (err) {
		next(err);
	}
});

module.exports = router;
