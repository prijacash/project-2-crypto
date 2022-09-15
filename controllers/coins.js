const express = require('express')
const router = express.Router()
const db = require('../models')
const axios = require('axios')


// VARIABLES FROM COINGECKO URL - need to be specific
const trendingUrl = `https://api.coingecko.com/api/v3/search/trending`
const bitcoinUrl = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true`
const ethereumUrl = `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true`
const tetherUrl = `https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true`
const bnbUrl = `https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true`
const xrpUrl = `https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true`
const adaUrl = `https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true`
const solUrl = `https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true`
const dogeUrl = `https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true`
const dotUrl = `https://api.coingecko.com/api/v3/simple/price?ids=polkadot&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true`
const linkUrl = `https://api.coingecko.com/api/v3/simple/price?ids=chainlink&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true`


// GET / - show all coins from API
router.get('/', async (req, res) => {
    try {
      const bitcoinResponse = await axios.get(bitcoinUrl)
      const ethereumReponse = await axios.get(ethereumUrl)
      const tetherReponse = await axios.get(tetherUrl)
      const bnbResponse = await axios.get(bnbUrl)
      const xrpResponse = await axios.get(xrpUrl)
      const adaResponse = await axios.get(adaUrl)
      const solResponse = await axios.get(solUrl)
      const dogeResponse = await axios.get(dogeUrl)
      const dotResponse = await axios.get(dotUrl)
      const linkResponse = await axios.get(linkUrl)

      const bitcoinData = bitcoinResponse.data
      const ethereumData = ethereumReponse.data
      const tetherData = tetherReponse.data
      const bnbData = bnbResponse.data
      const xrpData = xrpResponse.data
      const adaData = adaResponse.data
      const solData = solResponse.data
      const dogeData = dogeResponse.data
      const dotData = dotResponse.data
      const linkData = linkResponse.data

      const coin = await db.coin.findAll()

      res.render('coins/index.ejs', {
        bitcoins: bitcoinData,
        ethereums: ethereumData,
        tethers: tetherData,
        bnbs: bnbData,
        xrps: xrpData,
        adas: adaData,
        sols: solData,
        doges: dogeData,
        dots: dotData,
        links: linkData,
        coin: coin,
      })

    } catch(err) {
      console.log(err)
    }
  })
  
  // GET /coins/new - display form for creating new coins
  router.get('/new', function(req, res) {
    db.coin.findAll()
    .then(function(users) {
      res.render('coins/new', { user: users })
    })
    .catch(function(error) {
      res.status(400).render('main/404')
    })
  })

// POST /coins - create a new coins
router.post('/', function(req, res) {
  db.coin.create({
    name: req.body.name,
    description: req.body.description
  })
  .then(function(post) {
    res.redirect('/coins')
  })
  .catch(function(error) {
    res.status(400).render('main/404')
  })
})


// GET /coins/:coinsId - read specific coin
router.get('/:coinsId', (req, res) => {
    const coinData = db.coin.findAll()
    console.log(coinData)
    const coin = coinData[req.params.id]

    res.render('coins/show.ejs', { myCoin: coin })
})

// DELETE - /coinsId - delete coins


  module.exports = router
  
  
  
  
  
  

  // -- split method for numbers
  
  // ------- NOTES TO BE CLEARED
  // console.log(bitcoinData)
  // // GET /ethereum
  // router.get('/ethereum', async (req, res) => {
  //   try {
  //     let coins
  //     axios.get(ethereumUrl)
  //     .then(apiResponse => {
  //       coins = apiResponse.data;
  //       res.json(coins)
  //     }) 
  //   } catch(err) {
  //     console.log(err)
  //   }
  // })
  // console.log(bitcoinData.bitcoin)
  // console.log(bitcoinData.bitcoin.usd)
  // console.log(bitcoinData.bitcoin.usd_market_cap)
  // console.log(bitcoinData.bitcoin.usd_24h_vol)
  // const bitcoin = await db.coin.create({
  //   name: 'bitcoin',
  //   price: bitcoinData.bitcoin.usd,
  //   marketCap: bitcoinData.bitcoin.usd_market_cap,
  //   voumeDay: bitcoinData.bitcoin.usd_24h_vol,
  //   // let bitcoinData
  //   // axios.get(bitcoinUrl)
  //   // .then(apiResponse => {
  //   //   bitcoinData = apiResponse.data;
  //   // res.json(coins)
  // })
  // res.send(bitcoin) 
  
  // axios.get(`https://api.coingecko.com/api/v3/search?query=${req.params.id}`)

  // GET /coins
// router.get('/', async (req, res) => {
//     try {
//       response = await axios.get('https://www.coingecko.com/api/documentations/v3/swagger.json')

//       const json = response.data
//       console.log(json)
//       res.json(json)
//     } catch(err) {
//       console.log(err)
//     }
//   })

  // router.get('/', async (req, res) => {
  //   try {
  //     response = await axios.get('https://pro-api.coinmarketcap.com', {
  //       headers: { 'X-CMC_PRO_API_KEY': process.env.CMC_PRO_API_KEY }
  //     })

  //     const json = response.data
  //     console.log(json)
  //     res.json(json)
  //   } catch(err) {
  //     console.log(err)
  //   }
  // })

    // try {
    //     let coins;
    //     axios.get(cmcURL)
    //     .then(response => {
    //     coins = response.data;
    //     }) 

    // axios.get(`https://pro-api.coinmarketcap.com`)
    // .then(response => {
    //   res.render('coins.ejs', { movies: response.data })
    // })
    // .catch(console.log)

        // const coin = await db.coin.create({
        //   name: coins.name,
        //   price: coins.market_data.current_price.usd,
        //   marketCap: coins.market_data.market_cap.usd,
        //   exchange: coins.tickers[0].market.name,
        // })

    //     res.redirect('/')
    // } catch(err) {
    //   console.log(err)
    // }

  // res.send(coin)
  // console.log(coins)
  // res.render('home.ejs')
  // make the coin model
  // create object - coin class
  // insert it to the database
  // make a global variable -- then store coins outside 
  // request a route to store a function
  // res.render
  // db.model.create -- passing to data table constructors info make object
  // db find.. 
  // render with ejs file
  // api request info - insert into data
  // invoke beginnin of file
  // in async -- then get rid from route
  // start from file
  // res.json(coins)


  // --- this code works
  // axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000&convert=USD`)
  // .then(response => {
  //   res.render('coins.ejs', { movies: response.data })
  // })
  // .catch(console.log)