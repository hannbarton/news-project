# News Website
This is a simple web application which fetches news articles from an external api vendor and displays them

### My Application Can:
1. [x] Sign up and login as a user using local-passport.
2. [x] Fetch news articles via news api.
3. [x] Display these news sources as buttons and clicking on them shows the top 10 articles for that news source.
4. [x] The user is able to save articles
5. [ ] There is a button which allows the user to look at the saved articles (Bonus-Points).

There are three views in my application:
1. Login screen.
2. Home screen with clickable buttons to 5 news sources
3. Home screen that shows ten news articles by source and your saved articles.

### Tech Stack Used:
1. Backend - Node.js
2. Frontend - React
3. Database - postgreSQL

## How to get my application running:
1. Register with news api to generate an api-key and get access to thier api. https://newsapi.org/
2. Save the api key within your secrets.js folder in the root of the application and save it as `process.env.NEWS_API_KEY`
3. Create a db called `news-project` in postgreSQL
4. `npm run start-dev`
