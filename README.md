# Project 2 Crypto Insights
List of major Crypto Currencies and have users comment on their market insights on different topics.

Live Link
[Crypto Insights](https://project2-crypto-insight-prijacash.koyeb.app/) 


Tech Used
- HTML, CSS - Styling and Framework
- JavaScript - Node and Express to create the website foundation
- PostgresQL - Database used to store data
- Sequelize - Allows js to interact with database
- Bootstrap - CSS framework for styling
- Coingecko's API - search real time coin price data

# USER STORIES
- As a user, I want to add make market insights on current crypto market.
- As a user, I want to delete previous insights.
- As a user, I want explore other people's market insights.
- As a user, I want explore coins.
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
| GET | ~/users/profile~ | READ | read user profile |
| POST | ~/users/new~ | CREATE | create new user |


### INSIGHTS
| HTTP METHOD | URL | CRUD | Description |
| ------ | ----------- | ------ | ------ |
| GET | ~/~ | READ | read insights data and descriptions |
| POST | ~/insights/new~ | CREATE | create new insights |
| DELETE | ~/insights/:insightId~ | DESTROY | delete insights |
| GET | ~/insights/:insightId~ | READ | read specific insights |

### COINS
| HTTP METHOD | URL | CRUD | Description |
| ------ | ----------- | ------ | ------ |
| GET | ~/~ | READ | read prices |
| GET | ~/coins/:coinsId~ | READ | read specific coin detail |
| PUT | ~/coin/:userId/edit~ | UPDATE | update insights |
| POST | ~/coins/new~ | CREATE | create new coin details |
| DELETE | ~/coins/:coinsId/~ | DESTROY | delete coins |

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
- [X] - MVP complete

**ORM**
- [X] - ORM Database table - relationship with tables
- [X] - users 1:M insights
- [X] - users M:M coins (join tables)

**CONTROLLERS**
- [X] - App use controllers on Index
- [X] - Insights, Users, Coins - JS


**CRUD**
- [X] - 1 complete set CRUD (insights)
- [X] - Create - Insights
- [X] - Read - Insights
- [X] - Update - Insights
- [X] - Destroy - Insights
- [X] - CRD - coins
- [X] - stub out Insights
- [X] - stub out Coins
- [X] - Read - Coins - read all
- [X] - Update UserJs w/ user var

**FINAL**
- [ ] - Clean HTML, CSS, Back-End Code
- [X] - Deploy Online

**Stretch Goals**
- [ ] - Include Exchange Info
- [X] - Add charts
- [ ] - Add a nice color layout
- [ ] - Add twitter widgets of info
- [ ] - Add comments
- [ ] - Add modules to make it nicer

**Roadblocks**
- [X] - API setup
- [X] - API Key