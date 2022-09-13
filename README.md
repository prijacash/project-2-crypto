# Project 2 Crypto

Crypto Currency Connection

List of major Crypto Currencies and their protocols


Tech Needed
- HTML, CSS, 

# USER STORIES
- As a user, I want to add make market insights on current crypto market.
- As a user, I want to update or delete previous insights.
- As a user, I want explore other people's market insights.
- As a user, I want to favorite other insights.
- As a user, I want view all the coins and their prices.

# WIREFRAMES 
![wireframe](/media/ccc_wireframe.png)

# ERD
![ERD Layout](/media/ERDlayout.png)

# RESTful Routes
| HTTP METHOD | URL | CRUD | Description
| ------ | ----------- | ------ | ------ |
| GET | /users/:userId | READ | user details |
| GET | /users/new | READ | form to create new user |
| GET | /users/:userId/insights | READ | all an insights from user |
| GET | /users/:userId/insights/new | READ | form to create new insight |
| POST | /users/ | CREATE | create new user |
| POST | /users/:userID/insights | CREATE | create new insights |
| PUT | /users/:userId/ | UPDATE | update user data |
| PUT | /users/:userId/insights | UPDATE | update insights |
| DELETE | /users/:userId/ | DESTROY | delete user |
| DELETE | /users/:userId/insights/:insightId | DESTROY | delete insights |
| GET | / | READ | read all insights |
| GET | /insights/:insightId | READ | read specific insights |
| GET | /coins | READ | read all coins and prices |
| GET | /coins/:coinsId | READ | read specific coin details |


# API
[Coingecko API](https://www.coingecko.com/api/documentations/v3/swagger.json) 
- No API key required
- Example of Axios Request

```
 app.get('/', async (req, res) => {
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
```

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
