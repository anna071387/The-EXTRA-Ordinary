const router = require('express').Router();
const Blog = require('../models/Blog');
const Comment = require('../models/Comment');



router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('homepage');
});

router.get('/blog/:id', async (req, res) => {
  try {
  // Search the database for a dish with an id that matches params
  const blogData = await Dish.findByPk(req.params.id);
  // console.log(dishData)
  // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
  const blog = blogData.get({ plain: true });
  // Then, the 'dish' template is rendered and dish is passed into the template.
  res.render('blog', blog);
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;