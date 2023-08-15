const sequelize = require('../config/connection');
const { Blog, User} = require('../models');

const blogsData = require('./blogsData.json');
const userData = require('./userData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const user = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blog of blogsData) {
    await Blog.create({
      ...blog,
      user_id: user[Math.floor(Math.random() * user.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();