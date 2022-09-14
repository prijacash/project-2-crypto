const express = require('express')
const router = express.Router()
const db = require('../models')
const axios = require('axios')
const bitcoinURL = 'https://api.coingecko.com/api/v3/coins/bitcoin?localization=english'

// GET /coins
router.get('/', async (req, res) => {
    try {
        let coins;
        axios.get(bitcoinURL).then(apiResponse => {
        coins = apiResponse.data;
        }) 

        const coin = await db.coin.create({
          name: coins.name,
          price: coins.market_data.current_price.usd,
          marketCap: coins.market_data.market_cap.usd,
          exchange: coins.tickers[0].market.name,
        })

        res.redirect('/')
    } catch(err) {
      console.log(err)
    }
  })

  module.exports = router

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