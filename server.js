// Dependencies
const exphbs = require('express-handlebars');

const hbs = exphbs.create({helpers});
const express = require('express');
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;
// Default template engine for handlebars.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
// Sets up the routes
app.use(require('./controllers/homeRoutes'));



// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
