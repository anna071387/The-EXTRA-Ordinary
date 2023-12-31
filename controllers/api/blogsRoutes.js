const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newBlog = await Blog.create({
          ...req.body, 
          user_id: req.session.user_id, 
        });

        res.status(200).json(newBlog);
    } catch(err) {
      console.log(err);
        res.status(400).json(err);
    }
})


router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogsData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    console.log(blogsData);
    if (!blogsData) {
      res.status(404).json({ message: 'No blog post found with this id!' });
      return;
    }

    res.status(200).json(blogsData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
