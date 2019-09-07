const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
var expressHbs = require('express-handlebars');
const members = require('./Members');
const middleware_log = require('./middleware/middleware_log');
const router_members = require('./routers/api/Router_members');
const app = express();


  // view engine setup
  app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
  app.set('view engine', '.hbs');

  // Body Parser Middleware// json verilerini almak için
  app.use(express.json());
  app.use(express.urlencoded({extended:false}));
  
  app.use(express.static(path.join(__dirname, 'public')));



  //middleware using |
  app.use(middleware_log);



app.get('/',(req,res)=>{
    //res.json(members);
    res.render('index',{members});
});

//routing pages |.
app.use('/api/members',router_members);

exports.app = functions.https.onRequest(app);