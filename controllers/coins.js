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
  
// GET /coins/new - display FORM for creating new coins - done
router.get('/new', function(req, res) {
  db.coin.findAll()
  .then(function(users) {
    res.render('coins/new', { user: users })
  })
  .catch(function(error) {
    res.status(400).render('main/404')
  })
})

// POST /coins - create a new coins - done
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
router.get('/:coinId', async (req, res) => {
    try {
      const coinData = await db.coin.findAll()
      const coin = coinData[req.params.coinId]
      
      res.render('coins/show.ejs', { myCoin: coin })
    } catch(err) {
      console.log(err)
    }
})


// DELETE - /coinsId - delete coins
router.delete('/:coinId', (req, res) => {
  db.coin.destroy({
    where: { id: req.params.coinId }
  })
  .then( () => {
    res.redirect('/coins')
  })
})





module.exports = router

// GET our update form
// router.put('/edit/:id', (req,res) => {
//   coin.update(
//     {title: req.body.title},
//     {where: req.params.bookId}
//   )
//   .then(function(rowsUpdated) {
//     res.json(rowsUpdated)
//   })
//   .catch(next)
// })