const Sequelize = require("sequelize");
const db = require("../db");

const Article = db.define("article", {
	title: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false
	},
	source: {
		type: Sequelize.STRING
	},
	link: {
		type: Sequelize.TEXT
	}
});

module.exports = Article;
