const express = require('express')
const router = express.Router()
const db = require('../models')



// GET / - get all insights
router.get('/', async (req, res) => {
  try {
    const insightData = await db.insight.findAll()
    const insight = insightData

    res.render('insights/index.ejs', { 
      insight: insight
    })
  } catch(err) {
    console.log(err)
  }
})

// POST /insights - CREATE a new post
router.post('/', function(req, res) {
    db.insight.create({
      title: req.body.title,
      content: req.body.content,
      userId: req.body.userId
    })
    .then(function(post) {
      res.redirect('/')
    })
    .catch(function(error) {
      res.status(400).render('main/404')
    })
  })


// GET /insights/new - display form for creating new articles READ
router.get('/new', function(req, res) {
    db.user.findAll()
    .then(function(users) {
      res.render('insights/new', { users: users })
    })
    .catch(function(error) {
      res.status(400).render('main/404')
    })
  })


// // GET /insights/:id - display a specific post and its user READ
// router.get('/:insightId', function(req, res) {
//     db.insight.findOne({
//       where: { id: req.params.id },
//       include: [db.user]
//     })
//     .then(function(article) {
//       if (!article) throw Error()
//       console.log(article.author)
//       res.render('insights/show', { insight: insight })
//     })
//     .catch(function(error) {
//       console.log(error)
//       res.status(400).render('main/404')
//     })
//   })

  // PUT //insights/:insightId - UPDATE insight from user

  // DESTORY /insights/:insightId - DESTROY insight from

module.exports = router