const User = require('./user')
const Article = require('./article')

User.hasMany(Article)
Article.belongsTo(User)

module.exports = {
  User, Article
}
