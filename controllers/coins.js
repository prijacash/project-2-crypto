const express = require('express')
const router = express.Router()
const db = require('../models')
const axios = require('axios')


// GET /coins
router.get('/', (req, res) => {
    // try {
    //     let coins;
    //     axios.get(cmcURL)
    //     .then(response => {
    //     coins = response.data;
    //     }) 
    axios.get(`https://pro-api.coinmarketcap.com`)
    .then(response => {
      res.render('coins.ejs', { movies: response.data })
    })
    .catch(console.log)

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


  // --- this code works
  // axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000&convert=USD`)
  // .then(response => {
  //   res.render('coins.ejs', { movies: response.data })
  // })
  // .catch(console.log)