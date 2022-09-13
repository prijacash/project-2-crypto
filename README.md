# Project 2 Crypto

Crypto Currency Connection

List of major Crypto Currencies and their protocols


Tech Needed
- HTML, CSS, 

# USER STORIES
- As a user, I want to add make market analysis on current conditions.
- As a user, I want to update or delete previous analysis.
- As a user, I want explore other people's market analyses.
- As a user, I want to favorite other predictions.
- As a user, I want view all the coins and their prices.

# WIREFRAMES 
![wireframe](/media/ccc_wireframe.png)

# ERD
![wireframe](/media/ERD_layout.png)

# RESTful Routes
| HTTP METHOD | URL | CRUD | Description
| ------ | ----------- | ------ | ------ |
| GET | /users/:userId | READ | user details |
| GET | /users/new | READ | form to create new user |
| GET | /users/:userId/analysis | READ | all an analysis from user |
| GET | /users/:userId/analysis/new | READ | form to create new analysis |
| POST | /users/ | CREATE | create new user
| POST | /users/:userID/analysis | CREATE | create new analysis
| PUT | /users/:userId/ |
| PUT | /users/:userId/analysis |



# API
- coingecko API
- No API key required
- Example of Axios Request

> app.get('/', async (req, res) => {
    try {
      let coingeckoUrl = 'https://www.coingecko.com/api/documentations/v3/swagger.json'
      axios.get(coingeckoUrl).then(apiResponse => {
        let coins = apiResponse.data;
        // console.log(coins)
        // res.render('home.ejs')
        res.json(coins)
      })
    } catch(err) {
      console.log(err)
    }
  })

MVP
- 2 models
- 1 API
- Restful Routes
- ORM Database table
- Readme
- Clean HTML, CSS, Back-End Code
- Deploy Online

Stretch Goals
- Include Exchange Info
- Add charts
- Add a nice color layout
- Add twitter widgets of info


Roadblocks 
-
