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
var picture = require(path.join(infoJSON,'picture'));

app.engine('handlebars',exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res){
  res.render('sessions-page',{
    pageTitle:'Welcome'
  });
});

app.post('/session/:sess/:camp/locations',function(req,res){
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  var camploca = campcont.locations;
  var loca = 1;
  res.render('locations-page',{
    pageTitle:'Locations',
    locations:location,
    camp,
    camploca,
    loca,
  });
});

app.post('/session/:sess/:camp/pictures',function(req,res){
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  var camppics = campcont.pictures;
  res.render('pictures-page',{
    pageTitle:'Pictures',
    picture:picture,
    camppics,
  });
});

app.post('/session/:sess/:camp/npcs',function(req,res){
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  var campnp = campncont.nps;
  var np = 1;
  res.render('npcs-page',{
    pageTitle:'NPCs',
    npc:npc,
    camp,
    campnp,
    np,
  });
});

app.post('/session/:sess/:camp/towns',function(req,res){
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  var camptow = campcont.towns;
  var tow = 1;
  res.render('locations-page',{
    pageTitle:'Towns',
    town:town,
    camptow,
    tow,
  });
});

app.post('/session/:sess/:camp/towns/:tow/npcs',function(req,res){
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  var camptows = campcont.towns;
  var camptow = camptows[req.params.tow];
  var campnps = camptow.npcs;
  var np = 1;
  res.render('npcs-page',{
    pageTitle:'NPCs',
    npc:npc,
    campnps,
    np,
  });
});

app.post('/session/:sess/:camp/towns/:tow/pictures',function(req,res){
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  var camptows = campcont.towns;
  var camptow = camptows[req.params.tow];
  var camppics = camptow.pictures;
  res.render('pictures-page',{
    pageTitle:'Pictures',
    picture:picture,
    camppics,
  });
});

app.post('/session/:sess/:camp/towns/:tow/locations',function(req,res){
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  var camptows = campcont.towns;
  var camptow = camptows[req.params.tow];
  var camplocas = camptow.locations;
  var loca = 1;
  res.render('locations-page',{
    pageTitle:'Locations',
    location:location,
    camplocas,
    loca,
  });
});

app.post('/session/:sess/:camp/towns/:tow/locations/:loca/npcs',function(req,res){
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  var camptows = campcont.towns;
  var camptow = camptows[req.params.tow];
  var camplocas = camptow.locations;
  var camploca = camplocas.[req.params.loca];
  var campnps = camploca.npcs;
  var np = 1;
  res.render('npcs-page',{
    pageTitle:'NPCs',
    npc:npc,
    campnps,
    np,
  });
});

app.post('/session/:sess/:camp/towns/:tow/locations/:loca/npcs/:np/pictures',function(req,res){
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  var camptows = campcont.towns;
  var camptow = camptows[req.params.tow];
  var camplocas = camptow.locations;
  var camploca = camplocas[req.params.loca];
  var campnps = camploca.npcs;
  var carmnp = campnps[req.params.np];
  var camppics = campnp.
  res.render('pictures-page',{
    pageTitle:'Pictures',
    picture:picture,
    camppics,
  });
});

app.post('/session/:sess/:camp/towns/:tow/locations/:loca/pictures',function(req,res){
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  var camptows = campcont.towns;
  var camptow = camptows[req.params.tow];
  var camplocas = camptow.locations;
  var camploca = camplocas.[req.params.loca];
  var camppics = camploca.pictures;
  res.render('pictures-page',{
    pageTitle:'Pictures',
    picture:picture,
    camppics,
  });
});

app.post('/session/:sess/:camp/locations/:loca',function(req,res){
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  var camplocas = campcont.locations;
  var camploca = camplocas[req.params.loca];
  if(camploca){
    res.render('location-page',{
      pageTitle:camploca.name,
      camploca,
      location:location,
    });
  }
  else{
    next();
  }
});

app.post('/session/:sess/:camp/locations/:loca/npcs/:np',function(req,res){
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  var camplocas = campcont.locations;
  var camploca = camplocas[req.params.loca];
  var campnps = camploca.npcs;
  var campnp = campnps[req.params.np];
  if(campnp){
    res.render('npc-page',{
      pageTitle:campnp.name,
      campnp,
      npc:npc,
    });
  }
  else{
    next();
  }
});

app.post('/session/:sess/:camp/towns/:tow',function(req,res){
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  var camptows = campcont.towns;
  var camptow = camptows[req.params.tow];
  if(camptow){
    res.render('town-page',{
      pageTitle:camptow.name,
      town:town,
      camptow,
    });
  }
  else{
    next();
  }
});

app.post('/session/:sess/:camp/towns/:tow/locations/:loca',function(req,res){
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  var camptows = campcont.towns;
  var camptow = camptows[req.params.tow];
  var camplocas = camptows.locations;
  var camploca = camptows[req.params.loca];
  if(camploca){
    res.render('location-page',{
      pageTitle:camploca.name,
      camploca,
      location:location,
    });
  }
  else{
    next();
  }
});

app.post('/session/:sess/:camp/towns/:tow/locations/:loca/npcs/:np',function(req,res){
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  var camptows = campcont.towns;
  var camptow = camptows[req.params.tow];
  var camplocas = camptows.locations;
  var camploca = camptows[req.params.loca];
  var campnps = camploca.npcs;
  var campnp = campnps[req.params.np];
  if(campnp){
    res.render('npc-page',{
      pageTitle:campnp.name,
      campnp,
      npc:npc,
    });
  }
  else{
    next();
  }
});

app.post('/session/:sess/:camp/npcs/:np',function(req,res){
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  var campnps = campcont.npcs;
  var campnp = campnps[req.params.np];
  if(campnp){
    res.render('npc-page',{
      pageTitle:campnp.name,
      campnp,
      npc:npc,
    });
  }
  else{
    next();
  }
});

app.post('/session/:sess/:camp',function(req,res){
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  if(camp){
    res.render('campaign-page',{
      pageTitle:camp.name,
      camp,
      sess,
    });
  }
  else{
    next();
  }
});

app.post('/session/:sess',function(req,res,next){
  var sess = session[req.params.sess];
  
  if(sess){
    res.render('campaigns-page',{
      pageTitle: 'Campaigns',
      sess,
    });
  }
  else{
    next();
  }
});

app.post('/session/:sess/:camp/towns/:tow/locations/:loca/npcs/:np/pictures/add-picture',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  var camptows = campcont.towns;
  var camptow = camptows[req.params.tow];
  var camplocas = camptow.locations;
  var camploca = camplocas[req.params.loca];
  var campnps = camploca.npcs;
  var campnp = campnps[req.params.np];
  if(campnp){
    if(req.body && req.body.pic){
      campnp.pictures = campnp.pictures || [];
      campnp.pictures.push({
         pic: req.body.idi
      });
      picture.(req.body.idi).push({
        id:req.body.id,
        idi:req.body.idi,
        caption:req.body.caption,
        url:req.body.url
      });
    fs.writeFile(path.join(infoJSON,'campaign.json'),JSON.stringify(campaign));
    fs.writeFile(path.join(infoJSON,'picture.json'),JSON.stringify(picture));
      res.status(200).send();
    }
    else{
      res.status(400).send("There must be a town to add.");
    }
  }
  else{
    next();
  }
});

app.post('/session/:sess/:camp/locations/:loca/npcs/:np/pictures/add-picture',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  var camplocas = campcont.locations;
  var camploca = camplocas[req.params.loca];
  var campnps = camploca.npcs;
  var campnp = campnps[req.params.np];
  if(campnp){
    if(req.body && req.body.pic){
      campnp.pictures = campnp.pictures || [];
      campnp.pictures.push({
         pic: req.body.idi
      });
      picture.(req.body.idi).push({
        id:req.body.id,
        idi:req.body.idi,
        caption:req.body.caption,
        url:req.body.url
      });
    fs.writeFile(path.join(infoJSON,'campaign.json'),JSON.stringify(campaign));
    fs.writeFile(path.join(infoJSON,'picture.json'),JSON.stringify(picture));
      res.status(200).send();
    }
    else{
      res.status(400).send("There must be a town to add.");
    }
  }
  else{
    next();
  }
});

app.post('/session/:sess/:camp/npcs/:np/pictures/add-picture',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  var campnps = campcont.npcs;
  var campnp = campnps[req.params.np];
  if(campnp){
    if(req.body && req.body.pic){
      campnp.pictures = campnp.pictures || [];
      campnp.pictures.push({
         pic: req.body.idi
      });
      picture.(req.body.idi).push({
        id:req.body.id,
        idi:req.body.idi,
        caption:req.body.caption,
        url:req.body.url
      });
    fs.writeFile(path.join(infoJSON,'campaign.json'),JSON.stringify(campaign));
    fs.writeFile(path.join(infoJSON,'picture.json'),JSON.stringify(picture));
      res.status(200).send();
    }
    else{
      res.status(400).send("There must be a town to add.");
    }
  }
  else{
    next();
  }
});

app.post('/session/:sess/:camp/towns/:tow/locations/:loca/npcs/add-npc',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  var camptows = campcont.towns;
  var camptow = camptows[req.params.tow];
  var camplocas = camptow.locations;
  var camploca = camplocas[req.params.loca];
  if(camploca){
    if(req.body && req.body.np){
      camploca.npcs = camploca.npcs || [];
      camploca.npcs.np.push({
         id: req.body.idi
      });
      npc.(req.body.idi).push({
        id:req.body.id,
        idi:req.body.idi,
        name:req.body.name,
        class:req.body.class,
        str:req.body.str,
        dex:req.body.dex,
        con:req.body.con,
        int:req.body.int,
        wis:req.body.wis,
        cha:req.body.cha,
        description:req.body.description,
        race:req.body.race,
        alignment:req.body.alignment,
        ac:req.body.ac,
        attacks:req.body.attacks,
        skills:req.body.skills,
        feats:req.body.feats,
        hp:req.body.hp,
        hd:req.body.hd,
        clothing:req.body.clothing,
        gear:req.body.gear,
        platinum:req.body.platinum,
        gold:req.body.gold,
        silver:req.body.silver,
        iron:req.body.iron,
        positive:req.body.positive,
        negative:req.body.negative,
        goal:req.body.goal,
        language:req.body.language,
        traits:req.body.traits,
        notes:req.body.notes
        
      });
    fs.writeFile(path.join(infoJSON,'campaign.json'),JSON.stringify(campaign));
    fs.writeFile(path.join(infoJSON,'npc.json'),JSON.stringify(npc));
      res.status(200).send();
    }
    else{
      res.status(400).send("There must be a npc to add.");
    }
  }
  else{
    next();
  }
});

app.post('/session/:sess/:camp/locations/:loca/npcs/add-npc',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  var camplocas = campcont.locations;
  var camploca = camplocas[req.params.loca];
  if(camploca){
    if(req.body && req.body.np){
      camploca.npcs = camploca.npcs || [];
      camploca.npcs.np.push({
         id: req.body.idi
      });
      npc.(req.body.idi).push({
        id:req.body.id,
        idi:req.body.idi,
        name:req.body.name,
        class:req.body.class,
        str:req.body.str,
        dex:req.body.dex,
        con:req.body.con,
        int:req.body.int,
        wis:req.body.wis,
        cha:req.body.cha,
        description:req.body.description,
        race:req.body.race,
        alignment:req.body.alignment,
        ac:req.body.ac,
        attacks:req.body.attacks,
        skills:req.body.skills,
        feats:req.body.feats,
        hp:req.body.hp,
        hd:req.body.hd,
        clothing:req.body.clothing,
        gear:req.body.gear,
        platinum:req.body.platinum,
        gold:req.body.gold,
        silver:req.body.silver,
        iron:req.body.iron,
        positive:req.body.positive,
        negative:req.body.negative,
        goal:req.body.goal,
        language:req.body.language,
        traits:req.body.traits,
        notes:req.body.notes
        
      });
    fs.writeFile(path.join(infoJSON,'campaign.json'),JSON.stringify(campaign));
    fs.writeFile(path.join(infoJSON,'npc.json'),JSON.stringify(npc));
      res.status(200).send();
    }
    else{
      res.status(400).send("There must be a npc to add.");
    }
  }
  else{
    next();
  }
});

app.post('/session/:sess/:camp/towns/:tow/locations/:loca/pictures/add-picture',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  var camptows = campcont.towns;
  var camptow = camptows[req.params.tow];
  var camplocas = camptow.locations;
  var camploca = camplocas[req.params.loca];
  if(camploca){
    if(req.body && req.body.pic){
      camploca.pictures = camploca.pictures || [];
      camploca.pictures.push({
         pic: req.body.idi
      });
      picture.(req.body.idi).push({
        id:req.body.id,
        idi:req.body.idi,
        caption:req.body.caption,
        url:req.body.url
      });
    fs.writeFile(path.join(infoJSON,'campaign.json'),JSON.stringify(campaign));
    fs.writeFile(path.join(infoJSON,'picture.json'),JSON.stringify(picture));
      res.status(200).send();
    }
    else{
      res.status(400).send("There must be a town to add.");
    }
  }
  else{
    next();
  }
});

app.post('/session/:sess/:camp/locations/:loca/pictures/add-picture',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  var camplocas = campcont.locations;
  var camploca = camplocas[req.params.loca];
  if(camploca){
    if(req.body && req.body.pic){
      camploca.pictures = camploca.pictures || [];
      camploca.pictures.push({
         pic: req.body.idi
      });
      picture.(req.body.idi).push({
        id:req.body.id,
        idi:req.body.idi,
        caption:req.body.caption,
        url:req.body.url
      });
    fs.writeFile(path.join(infoJSON,'campaign.json'),JSON.stringify(campaign));
    fs.writeFile(path.join(infoJSON,'picture.json'),JSON.stringify(picture));
      res.status(200).send();
    }
    else{
      res.status(400).send("There must be a town to add.");
    }
  }
  else{
    next();
  }
});

app.post('/session/:sess/:camp/towns/:tow/pictures/add-picture',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  var camptows = campcont.towns;
  var camptow = camptows[req.params.tow];
  if(camptow){
    if(req.body && req.body.pic){
      camptow.pictures = camptow.pictures || [];
      camptow.pictures.push({
         pic: req.body.idi
      });
      picture.(req.body.idi).push({
        id:req.body.id,
        idi:req.body.idi,
        caption:req.body.caption,
        url:req.body.url
      });
    fs.writeFile(path.join(infoJSON,'campaign.json'),JSON.stringify(campaign));
    fs.writeFile(path.join(infoJSON,'picture.json'),JSON.stringify(picture));
      res.status(200).send();
    }
    else{
      res.status(400).send("There must be a town to add.");
    }
  }
  else{
    next();
  }
});

app.post('/session/:sess/:camp/towns/:tow/npcs/add-npc',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  var camptows = campcont.towns;
  var camptow = camptows[req.params.tow];
  if(camptow){
    if(req.body && req.body.np){
      camptow.npcs = camptow.npcs || [];
      camptow.npcs.np.push({
         id: req.body.idi
      });
      npc.(req.body.idi).push({
        id:req.body.id,
        idi:req.body.idi,
        name:req.body.name,
        class:req.body.class,
        str:req.body.str,
        dex:req.body.dex,
        con:req.body.con,
        int:req.body.int,
        wis:req.body.wis,
        cha:req.body.cha,
        description:req.body.description,
        race:req.body.race,
        alignment:req.body.alignment,
        ac:req.body.ac,
        attacks:req.body.attacks,
        skills:req.body.skills,
        feats:req.body.feats,
        hp:req.body.hp,
        hd:req.body.hd,
        clothing:req.body.clothing,
        gear:req.body.gear,
        platinum:req.body.platinum,
        gold:req.body.gold,
        silver:req.body.silver,
        iron:req.body.iron,
        positive:req.body.positive,
        negative:req.body.negative,
        goal:req.body.goal,
        language:req.body.language,
        traits:req.body.traits,
        notes:req.body.notes
        
      });
    fs.writeFile(path.join(infoJSON,'campaign.json'),JSON.stringify(campaign));
    fs.writeFile(path.join(infoJSON,'npc.json'),JSON.stringify(npc));
      res.status(200).send();
    }
    else{
      res.status(400).send("There must be a npc to add.");
    }
  }
  else{
    next();
  }
});

app.post('/session/:sess/:camp/towns/:tow/locations/add-location',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  var camptows = campcont.towns;
  var camptow = camptows[req.params.tow];
  if(camptow){
    if(req.body && req.body.loca){
      camptow.locations = camptow.locations || [];
      camptow.locations.loca.push({
        id:req.body.id
      });
      location.(req.body.idi).push({
        id:req.body.id,
        idi:req.body.idi,
        name:req.body.name,
        terrainType:req.body.terrainType,
        alignment:req.body.alignment,
        inventory:req.body.inventory,
        notes:req.body.notes
      });
    fs.writeFile(path.join(infoJSON,'campaign.json'),JSON.stringify(campaign));
    fs.writeFile(path.join(infoJSON,'location.json'),JSON.stringify(location));
      res.status(200).send();
    }
    else{
      res.status(400).send("There must be a town to add.");
    }
  }
  else{
    next();
  }
});

app.post('/session/:sess/:camp/pictures/add-picture',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  if(camp){
    if(req.body && req.body.pic){
      campcont.pictures = campcont.pictures || [];
      campcont.pictures.push({
         pic: req.body.idi
      });
      picture.(req.body.idi).push({
        id:req.body.id,
        idi:req.body.idi,
        caption:req.body.caption,
        url:req.body.url
      });
    fs.writeFile(path.join(infoJSON,'campaign.json'),JSON.stringify(campaign));
    fs.writeFile(path.join(infoJSON,'picture.json'),JSON.stringify(picture));
      res.status(200).send();
    }
    else{
      res.status(400).send("There must be a town to add.");
    }
  }
  else{
    next();
  }
});

app.post('/session/:sess/:camp/npcs/add-npc',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  if(camp){
    if(req.body && req.body.np){
      campcont.npcs = campcont.npcs || [];
      campcont.npcs.np.push({
         id: req.body.idi
      });
      npc.(req.body.idi).push({
        id:req.body.id,
        idi:req.body.idi,
        name:req.body.name,
        class:req.body.class,
        str:req.body.str,
        dex:req.body.dex,
        con:req.body.con,
        int:req.body.int,
        wis:req.body.wis,
        cha:req.body.cha,
        description:req.body.description,
        race:req.body.race,
        alignment:req.body.alignment,
        ac:req.body.ac,
        attacks:req.body.attacks,
        skills:req.body.skills,
        feats:req.body.feats,
        hp:req.body.hp,
        hd:req.body.hd,
        clothing:req.body.clothing,
        gear:req.body.gear,
        platinum:req.body.platinum,
        gold:req.body.gold,
        silver:req.body.silver,
        iron:req.body.iron,
        positive:req.body.positive,
        negative:req.body.negative,
        goal:req.body.goal,
        language:req.body.language,
        traits:req.body.traits,
        notes:req.body.notes
        
      });
    fs.writeFile(path.join(infoJSON,'campaign.json'),JSON.stringify(campaign));
    fs.writeFile(path.join(infoJSON,'npc.json'),JSON.stringify(npc));
      res.status(200).send();
    }
    else{
      res.status(400).send("There must be a npc to add.");
    }
  }
  else{
    next();
  }
});

app.post('/session/:sess/:camp/locations/add-location',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  if(camp){
    if(req.body && req.body.loca){
      campcont.locations = campcont.locations || [];
      campcont.locations.loca.push({
         id: req.body.idi
      });
      location.(req.body.idi).push({
        id:req.body.id,
        idi:req.body.idi,
        name:req.body.name,
        terrainType:req.body.terrainType,
        alignment:req.body.alignment,
        inventory:req.body.inventory,
        notes:req.body.notes 
      });
    fs.writeFile(path.join(infoJSON,'campaign.json'),JSON.stringify(campaign));
    fs.writeFile(path.join(infoJSON,'location.json'),JSON.stringify(location));
      res.status(200).send();
    }
    else{
      res.status(400).send("There must be a location to add.");
    }
  }
  else{
    next();
  }
});

app.post('/session/:sess/:camp/towns/add-town',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
  var sess = session[req.params.sess];
  var camp = campaign[req.params.camp];
  var campcont = camp.contents;
  if(camp){
    if(req.body && req.body.tow){
      campcont.towns = campcont.towns || [];
      campcont.towns.tow.push({
         id: req.body.idi
      });
      town.(req.body.idi).push({
        id:req.body.id,
        idi:req.body.idi,
        name:req.body.name,
        notes:req.body.notes
      });
    fs.writeFile(path.join(infoJSON,'campaign.json'),JSON.stringify(campaign));
    fs.writeFile(path.join(infoJSON,'town.json'),JSON.stringify(town));
      res.status(200).send();
    }
    else{
      res.status(400).send("There must be a town to add.");
    }
  }
  else{
    next();
  }
});

app.post('/session/:sess/add-campaign',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
  var sess = session[req.params.sess];
  if(sess){
    if(req.body && req.body.ca){
      sess.campaign = sess.campaign || [];
      sess.campaign.push({
        id: req.body.idi
      });
      campaign.(req.body.idi).push({
        id:req.body.id,
        idi:req.body.idi,
        name:req.body.name,
        notes:req.body.notes,
        contents.push({});
      });
    fs.writeFile(path.join(infoJSON,'campaign.json'),JSON.stringify(campaign));
    fs.writeFile(path.join(infoJSON,'session.json'),JSON.stringify(session));
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

app.post('/session/add-session',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
    if(req.body && req.body.sess){
      session.(req.body.idi) = session.(req.body.idi) || [];
      session.(req.body.idi).push({
        id: req.body.id,
        idi: req.body.idi
      });
);
    fs.writeFile(path.join(infoJSON,'session.json'),JSON.stringify(session));
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
