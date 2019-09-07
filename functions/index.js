const functions = require('firebase-functions');
const express = require('express');
const members = require('./Members');
const middleware_log = require('./middleware/middleware_log');
const router_members = require('./routers/api/Router_members');
const app = express();



  //middleware using |
  app.use(middleware_log);

app.get('/',(req,res)=>{
    res.json(members);
});

//routing pages |.
app.use('/api/members',router_members);

exports.app = functions.https.onRequest(app);