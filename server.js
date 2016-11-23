var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
var infoJSON = path.join(__dirname,'json');
var session = require(path.join(infoJSON,'session'));
var campaign = require(path.join(infoJSON,'campaign'));
var location = require(path.join(infoJSON,'location'));
var npc = require(path.join(infoJSON,'npc'));
var town = require(path.join(infoJSON,'town'));

app.engine('handlebars',exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res){
  res.render('index-page',{
    pageTitle:'Welcome'
  });
});

app.get('/session',function(req,res){
  res.render('session-page',{
    pageTitle:'Session',
    session:session
  });
});

app.get('/session/:sess',function(req,res,next){
  var sess = session[req.params.session];
  
  if(sess){
    res.render('session-page',{
      pageTitle: sess,
      sess:sess
    });
  }
  else{
    next();
  }
});
app.post('/session/:sess/add-campaign',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
  var sess= session[req.params.session];
  if(sess){
    if(req.body && req.body.ca){
      sess.contents=sess.contents || [];
      sess.contents.push({
        ca: req.body.ca
      });
      res.status(200).send();
    }
    else{
      res.status(400).send("There must be a campaign to add.");
    }
  }
  else{
    next();
  }
});

app.get('*',function(req,res){
  res.status(404).render('404-page',{
    pageTitle:'404'
  });
});

app.listen(port,function(){
  console.log("== Listening on port", port);
});
