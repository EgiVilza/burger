const express = require('express');

const indexRouter = require('./routes/html-routes');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Requiring our models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// Invoke routes
indexRouter(app);

db.sequelize.sync({force: true})
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
//Syncing our sequelize models and then starting our Express app
// db.sequelize.sync({ force: true }).then(() => {
//   app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
// });