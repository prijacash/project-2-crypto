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
![wireframe](/media/coins.png)

# ERD
![ERD Layout](/media/ERDlayout.png)

# RESTful Routes

### USER
| HTTP METHOD | URL | CRUD | Description |
| ------ | ----------- | ------ | ------ |
| GET | /users/:userId | READ | user details |
| GET | /users/new | READ | form to create new user |
| POST | /users/ | CREATE | create new user |
| PUT | /users/:userId/ | UPDATE | update user data |
| DELETE | /users/:userId/ | DESTROY | delete user |

### INSIGHTS
| HTTP METHOD | URL | CRUD | Description |
| ------ | ----------- | ------ | ------ |
| GET | / | READ | read all insights |
| GET | /users/:userId/insights | READ | all an insights from user |
| GET | /users/:userId/insights/new | READ | form to create new insight |
| POST | /users/:userId/insights | CREATE | create new insights |
| PUT | /users/:userId/insights | UPDATE | update insights |
| DELETE | /users/:userId/insights/:insightId | DESTROY | delete insights |
| GET | /insights/:insightId | READ | read specific insights |

### COINS
| HTTP METHOD | URL | CRUD | Description |
| ------ | ----------- | ------ | ------ |
| GET | /coins | READ | read all coins and prices |
| GET | /coins/:coinsId | READ | read specific coin details |


# API
- [Coinmarket Cap](tbd) 
- No API key required
- 300 credits / day
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
[ ] - stub out ERD
[ ] - 2 models
[ ] - 1 API - get connected
[ ] - Restful Routes
[ ] - stub out EJs
[ ] - stub out CRUD - psuedo code
[ ] - ORM Database table
[ ] - Readme
[ ] - Clean HTML, CSS, Back-End Code
[ ] - Deploy Online



Stretch Goals
- Include Exchange Info
- Add charts
- Add a nice color layout
- Add twitter widgets of info
- Add comments
- Add modules to make it nicer

Roadblocks 
- API setup
- API Key

