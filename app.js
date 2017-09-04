const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
//pw
const session = require('express-session');
const passport = require('passport');

//add-ons
const starwars = require('starwars');
const starwarsquotes = require('star-wars-quotes');

//init express
const app = express();
  require('dotenv').config();

//middleware used
//logs events
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//determines direction
app.use(methodOverride('_method'));
app.use(cookieParser());
//app pw apps
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

//connecting to public files
app.use(express.static(path.join(__dirname, 'public')));
//ejs engine
app.set('view engine', 'ejs');
//connecting with views files
app.set('views', path.join(__dirname, 'views'));

//port connection & listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

//ejs index route
app.get('/', (req, res)=> {
  res.render('index', {title:'Welcome to Empire Database ver 45.681'});
});

const empireRoutes = require('./routes/empire-routes');
app.use('/empire', empireRoutes);

const planetRoutes = require('./routes/planet-routes');
app.use('/planet', planetRoutes);

const adsRoutes = require('./routes/ads-routes');
app.use('/dashboard', adsRoutes);

//API routes
const apiempireRoutes = require('./routes/apiempire-routes');
app.use('/apiempire', apiempireRoutes);

const apiplanetRoutes = require('./routes/apiplanet-routes');
app.use('/apiplanet', apiplanetRoutes);

//security connected
const authRoutes = require('./routes/auth-routes');
app.use('/auth', authRoutes);
const userRoutes = require('./routes/user-routes');
app.use('/user', userRoutes);
// const authHelpers = require('./services/auth/auth-helpers');
// app.use(authHelpers.loginRequired)

//error catch
app.use('*', (req, res) => {
  res.status(404).json({
    message: 'app file not found',
  });
});
