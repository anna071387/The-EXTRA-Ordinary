const sequelize = require('../config/connection');
const { Blog, Comment, User} = require('../models');

const BlogData = require('./blogData.json');
const CommentData = require('./commentData.json');
const UserData = require('./usertData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const user = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blog of blogData) {
    await Blog.create({
      ...blog,
      user_id: users[Math.floor(Math.random() * user.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();