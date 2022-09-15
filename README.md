# Project 2 Crypto

Crypto Insights

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
![ERD Layout](/media/ERD_layout.png)

# RESTful Routes

### USER
| HTTP METHOD | URL | CRUD | Description |
| ------ | ----------- | ------ | ------ |
| GET | ~/users/:userId~ | READ | user details |
| GET | ~/users/new~ | READ | form to create new user |
| POST | /users/ | CREATE | create new user |
| PUT | /users/:userId/ | UPDATE | update user data |
| DELETE | /users/:userId/ | DESTROY | delete user |

### INSIGHTS
| HTTP METHOD | URL | CRUD | Description |
| ------ | ----------- | ------ | ------ |
| GET | / | READ | read coin data and descriptions |
| GET | /users/:userId/insights | READ | all an insights from user |
| GET | /users/:userId/insights/new | READ | form to create new insight |
| POST | /users/:userId/insights | CREATE | create new insights |
| PUT | /users/:userId/insights | UPDATE | update insights |
| DELETE | /users/:userId/insights/:insightId | DESTROY | delete insights |

| GET | /insights/:insightId | READ | read specific insights |

### COINS
| HTTP METHOD | URL | CRUD | Description |
| ------ | ----------- | ------ | ------ |
| GET | ~/~ | READ | read prices |
| GET | ~/coins/:coinsId~ | READ | read specific coin detail |
| POST | ~/coins/new~ | CREATE | create new coin details |
| DELETE | /coins/:coinsId/ | DESTROY | delete coins |

# API
- [Coingecko API Documentation](https://www.coingecko.com/en/api) 
- No API key required
- 50 / min
- Example of Axios Request

```
use docs for specific coin to grab coin info
```

### MVP
- [X] - 2 models - done
- [X] - 1 API - get connected
- [X] - Coin Index Page
- [X] - Restful Routes
- [X] - Readme

**ORM**
- [ ] - ORM Database table - relationship with tables
- [ ] - users 1:M insights
- [ ] - users M:M coins (join tables)

**CONTROLLERS**
- [ ] - App use controllers on Index
- [ ] - Insights, Users, Coins - JS

**CRUD**
- [ ] - 1 complete set CRUD (insights)
- [ ] - Create - Insights
- [ ] - Read - Insights
- [ ] - Update - Insights
- [ ] - Destroy - Insights
- [X] - stub out Insights
- [X] - stub out Coins
- [X] - Read - Coins - read all
- [X] - Update UserJs w/ user var

**FINAL**
- [ ] - Clean HTML, CSS, Back-End Code
- [ ] - Deploy Online

**Stretch Goals**
- [ ] - Include Exchange Info
- [ ] - Add charts
- [ ] - Add a nice color layout
- [ ] - Add twitter widgets of info
- [ ] - Add comments
- [ ] - Add modules to make it nicer

**Roadblocks**
- [X] - API setup
- [X] - API Key

