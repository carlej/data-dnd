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

app.get('/:camp/locations',function(req,res){
  var camp = campaign[req.params.campaign];
  var campcont = camp.contents;
  var camploca = campcont.locations;
  res.render('locations-page',{
    pageTitle:'Locations',
    locations:location,
    camp,
    camploca,
  });
});

app.get('/:camp/npcs',function(req,res){
  var camp = campaign[req.params.campaign];
  var campcont = camp.contents;
  var campnp = campncont.nps;
  res.render('npcs-page',{
    pageTitle:'NPCs',
    npc:npc,
    camp,
    campnp,
  });
});

app.get('/:camp/towns',function(req,res){
  var camp = campaign[req.params.campaign];
  var campcont = camp.contents;
  var camptow = campcont.towns;
  res.render('locations-page',{
    pageTitle:'Towns',
    town:town,
    camptow,
  });
});

app.get('/:camp/:loca/towns',function(req,res){
  var camp = campaign[req.params.campaign];
  var loca = locations[req.params.location];
  var campcont = camp.contents;
  var camplocas = campcont.locations;
  var camploca = camplocas.loca;
  var camptow = camploca.towns;
  res.render('towns-page',{
    pageTitle:'Towns',
    town:town,
    camp,
    camptow,
  });
});

app.get('/:camp/:loca',function(req,res){
  var camp = campaign[req.params.campaign];
  var loca = location[req.params.location];
  var campcont = camp.contents;
  var camploca = campcont.locations;
  if(loca){
    res.render('location-page',{
      pageTitle:loca.name,
      camploca,
      loca,
    });
  }
  else{
    next();
  }
});

app.get('/:camp/:tow',function(req,res){
  var camp = campaign[req.params.campaign];
  var tow = town[req.params.town];
  var campcont = camp.contents;
  var camptow = campcont.towns;
  if(loca){
    res.render('town-page',{
      pageTitle:tow.name,
      camptow,
      tow,
    });
  }
  else{
    next();
  }
});

app.get('/:camp/:np',function(req,res){
  var camp = campaign[req.params.campaign];
  var np = npc[req.params.npc];
  var campcont = camp.contents;
  var campnp = campcont.npcs;
  if(loca){
    res.render('npc-page',{
      pageTitle:np.name,
      campnp,
      np,
    });
  }
  else{
    next();
  }
});

app.get('/:camp',function(req,res){
  var camp = campaign[req.params.campaign];
  if(camp){
    res.render('campaign-page',{
      pageTitle:'Campaign',
      campaign: campaign
    });
  }
  else{
    next();
  }
});

app.get('/:sess',function(req,res,next){
  var sess = session[req.params.session];
  
  if(sess){
    res.render('campaigns-page',{
      pageTitle: 'Campaigns',
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
