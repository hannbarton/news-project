const Sequelize = require('sequelize');
const db = require('../db');

const Article = db.define('article', {
	title: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false
	},
	source: {
		type: Sequelize.STRING
	},
	url: {
		type: Sequelize.TEXT
	},
	urlToImage: {
		type: Sequelize.TEXT
	}
});

module.exports = Article;
