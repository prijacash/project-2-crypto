# Crypto Insights

A server-rendered Express and PostgreSQL app for browsing live CoinGecko prices and posting short crypto market notes.

General Assembly Software Engineering Immersive project by Prija Cash, 2022.

## What it does

Crypto Insights has three areas: accounts, coins, and insights.

Someone can sign up with a name, email, and password, then log in. Passwords are stored as bcrypt hashes. A successful sign-up or login sets a `userId` cookie whose value is the user id encrypted with AES (`crypto-js`) and the `ENC_SECRET` environment variable. Middleware on every request decrypts that cookie, loads the user, and the navbar switches between Sign Up / Login and Profile / Logout. Logging out clears the cookie.

The coins page requests the public CoinGecko simple-price API once per coin and renders the USD price, market cap, and 24-hour volume for ten assets: Bitcoin, Ethereum, Tether, BNB, XRP, Cardano, Solana, Dogecoin, Polkadot, and Chainlink. Those numbers are filled in on each request. The same page embeds a CoinGecko heatmap and lists coins saved in Postgres.

A saved coin is a name and a description. From the site you can add one, open it, edit its name and description, delete it, and mark it as a favorite. A favorite inserts a row in the `faves` join table for the logged-in user and that coin.

An insight is a title and a body of text. The insights page lists every post, embeds a CoinGecko Bitcoin price chart, and embeds a Cointelegraph headline widget. The new-insight form assigns the post to an account chosen from a dropdown of existing users. A post can be opened and deleted.

The home page is a Bootstrap carousel of three external images plus the Cointelegraph widget.

### Data model

The Sequelize migrations in `migrations/` create four Postgres tables. Each row also has `id`, `createdAt`, and `updatedAt`.

| Table | Role | Columns |
| --- | --- | --- |
| `users` | Accounts | `name`, `email`, `password` |
| `insights` | Market notes | `userId`, `title`, `content` |
| `coins` | Saved coin write-ups | `name`, `description` |
| `faves` | Join table | `userId`, `coinId` |

A user has many insights. Users and coins are associated many-to-many through `faves`.

### Routes

PUT and DELETE are submitted as POST forms. `method-override` reads the `_method` field.

| Method | Path | What it does |
| --- | --- | --- |
| GET | `/` | Home page |
| GET | `/users/new` | Sign-up form |
| POST | `/users` | Create an account and set the login cookie |
| GET | `/users/login` | Login form |
| POST | `/users/login` | Check email and password, then set the login cookie |
| GET | `/users/logout` | Clear the login cookie |
| GET | `/users/profile` | Profile for the logged-in user |
| GET | `/coins` | Live prices, heatmap, and saved coins |
| GET | `/coins/new` | Form for a saved coin |
| POST | `/coins/createNew` | Insert a saved coin |
| GET | `/coins/edit/:id` | Edit form for a saved coin |
| PUT | `/coins/edit/:id` | Update that coin's name and description |
| GET | `/coins/:id` | Saved coin detail |
| DELETE | `/coins/:coinId` | Delete a saved coin |
| POST | `/coins/:id/faves` | Save a favorite for the logged-in user |
| GET | `/insights` | All insights, Bitcoin chart, and headlines |
| GET | `/insights/new` | New insight form |
| POST | `/insights` | Create an insight |
| GET | `/insights/:insightId` | Insight detail |
| DELETE | `/insights/:insightId` | Delete an insight |

## Features

- Sign up, log in, and log out. Duplicate emails are sent to the login form. A missing user or a wrong password returns "Incorrect username or password".
- Profile page for a signed-in user, with a greeting by name.
- Live USD price, market cap, and 24-hour volume for the ten coins above, plus a CoinGecko heatmap.
- Create, view, edit, and delete saved coin write-ups.
- Save a logged-in user's favorite coin in the `faves` table.
- Create, list, open, and delete market insights. The new-insight form includes a dropdown of every account.
- Bitcoin price chart and Cointelegraph headlines on the insights page.
- Shared Bootstrap 5 navbar and EJS layout.

## Tech stack

- **Node.js and Express 4** for the server and the routers in `controllers/`
- **EJS and express-ejs-layouts** for server-rendered pages
- **PostgreSQL, Sequelize 6, and `pg`** for the database, models, and migrations
- **bcrypt** for password hashes
- **crypto-js** for AES encryption of the login cookie
- **cookie-parser** to read that cookie
- **method-override** so HTML forms can send PUT and DELETE
- **Axios** for the CoinGecko HTTP calls
- **dotenv** for `ENC_SECRET` and `PORT`
- **Bootstrap 5.2** from the CDN, plus `public/css/styles.css`
- **CoinGecko** public price API and widgets, and a **Cointelegraph** news widget

The CoinGecko calls use the public simple-price endpoint and send no API key. In production (`NODE_ENV=production`) Sequelize reads the database from `DATABASE_URI`. The `Procfile` starts the process with `node .`.

## Run it locally

You need Node.js, npm, and PostgreSQL listening on `127.0.0.1`.

```bash
git clone https://github.com/prijacash/project-2-crypto.git
cd project-2-crypto
npm install
```

Create a `.env` file in the project root. `.env` is listed in `.gitignore`.

```bash
ENC_SECRET=replace-with-a-long-random-string
```

Create the development database and run the migrations. The database name is `express_auth_boilerplate` in both `config/config.json` (what the app loads) and `config/config.js` (what the Sequelize CLI loads via `.sequelizerc`). The development config sets host `127.0.0.1` and dialect `postgres`, and leaves username and password unset, so the client uses your local PostgreSQL defaults.

```bash
createdb express_auth_boilerplate
npx sequelize-cli db:migrate
node index.js
```

`sequelize-cli` is not one of the dependencies in `package.json`, so the migrate step uses `npx`. There is no `npm start` script. Open [http://localhost:3000](http://localhost:3000). The process listens on `PORT` when that variable is set, and on port 3000 otherwise.

For a hosted database, set `NODE_ENV=production` and set `DATABASE_URI` to a Postgres connection string.

## Screenshots

Screenshots of the running app are not in the repository yet. Save them under `media/screenshots/` with the file names below, then drop the matching image into this section.

| Page | What to capture | File to add |
| --- | --- | --- |
| Home | Navbar, image carousel, and Cointelegraph headlines | `media/screenshots/home.png` |
| Coins | Heatmap, the ten-coin price table, and saved coins | `media/screenshots/coins.png` |
| Coin | A saved coin, with the delete and favorite actions | `media/screenshots/coin.png` |
| Edit coin | The name and description edit form | `media/screenshots/coin-edit.png` |
| Insights | Bitcoin chart, the insight list, and headlines | `media/screenshots/insights.png` |
| New insight | Title, content, and the account dropdown | `media/screenshots/insight-new.png` |
| Account | Login form and the profile greeting | `media/screenshots/account.png` |

```markdown
![Home](media/screenshots/home.png)
![Coins](media/screenshots/coins.png)
![Coin detail](media/screenshots/coin.png)
![Edit coin](media/screenshots/coin-edit.png)
![Insights](media/screenshots/insights.png)
![New insight](media/screenshots/insight-new.png)
![Account](media/screenshots/account.png)
```

## What I learned

This was my General Assembly Software Engineering Immersive project, and the code is where I practiced the pieces below.

- Splitting an Express app into routers for users, coins, and insights, and rendering every page through one EJS layout.
- Modeling a one-to-many relationship (a user has many insights) and a many-to-many relationship (users and coins through `faves`) with Sequelize migrations.
- Storing passwords as bcrypt hashes, and keeping someone logged in with an AES-encrypted user id that middleware turns back into a user on each request.
- Calling a public REST API with Axios and rendering the response in a server-side table next to third-party market widgets.

## What I'd improve

- Load a coin or an insight with `findByPk`, so the id in the URL is the database id. The show routes currently use that id as an index into the array from `findAll()`.
- On the profile, query insights by `userId` and render that user's `faves`. The insight query matches `insight.id` to the user id, and the page still contains the placeholder text "Show faves here".
- Require a logged-in user before creating or deleting an insight or a coin, and set the insight's `userId` from that session. The form posts whichever account is selected in the dropdown, and delete does not check who owns the row.
- Finish `GET /users/:id`. The handler loads the user and their insights, and the template reads an `insight` local the handler never passes. Its "create" link points at the sign-up form.
- Request all ten prices in one CoinGecko call, and render an error view when a call fails. The coins handler logs the error and sends no response.
- Link the Edit button on a coin to `GET /coins/edit/:id`. The edit form and the PUT route already exist.
- Add tests. `npm test` is still the stub that prints an error and exits.
- Remove the startup `console.log` of `ENC_SECRET` in `index.js`.
- Serve the stylesheet from `/public/css/styles.css`. The layout uses a relative path, so the custom CSS resolves on `/` and misses on nested routes.
- Rename the development database to something that matches this project, and keep `config/config.json` and `config/config.js` on that same name. Add foreign keys for `userId` and `coinId`.
