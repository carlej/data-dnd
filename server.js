var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
var infoJSON = path.join(__dirname,'json');
var view = path.join(__dirname,'views');
var partials = path.join(view,'partials');
var session = require(path.join(infoJSON,'session'));
var url = require('url');

app.engine('handlebars',exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')),function(req,res,next){
    var pathname=url.parse(req.url).pathname;//turns the url into a string to be read later
    console.log("Received request for "+pathname);
    next();
}
);

app.get('/',function(req,res){
  res.render('sessions-page',{
    pageTitle:'Welcome',
    session:session
  });
});

/*
************************************************************
SPECIFIC SESSION
************************************************************
*/
app.get('/session/:sess',function(req,res,next){
	console.log("here");
    var sess = session;
    var sessidi = sess[req.params.sess];
    var sesscont= sess.contents;
    if(sess){
        res.render('campaigns-page',{
            pageTitle: 'Campaigns',
            sesscont,
        });
    }
    else{
        next();
    }
});
/*
************************************************************
SPECIFIC CAMPAIGN IN THE SPECIFIC SESSION
************************************************************
*/
app.get('/session/:sess/:camp',function(req,res,next){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sess[req.params.camp];
    if(camp){
        res.render(path.join(partials,'campaign-page'),{
            pageTitle:camp.name,
            camp,
        });
    }
    else{
        next();
    }
});
/*
************************************************************
ALL PICTURES OF CAMPAIGN
************************************************************
*/
app.get('/session/:sess/:camp/pictures',function(req,res){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sess[req.params.camp];
    var campcont = camp.contents;
    var camppics = campcont.pictures;
    res.render('pictures-page',{
        pageTitle:'Pictures',
        picture:picture,
        camppics,
    });
});
/*
************************************************************
ALL NPCS IN CAMPAIGN
************************************************************
*/
app.get('/session/:sess/:camp/npcs',function(req,res){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sess[req.params.camp];
    var campcont = camp.contents;
    var campnps = campcont.npcs;
    res.render('npcs-page',{
        pageTitle:'NPCs',
        camp,
        campnps,
    });
});
/*
************************************************************
SPECIFIC NPC IN SPECIFIC CAMPAIGN
************************************************************
*/
app.get('/session/:sess/:camp/npcs/:np',function(req,res){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sess[req.params.camp];
    var campcont = camp.contents;
    var campnps = campcont.npcs;
    var campnp = campnps[req.params.np];
    if(campnp){
        res.render(path.join(partials,'npc-page'),{
            pageTitle:campnp.name,
            campnp,
        });
    }
    else{
        next();
    }
});
/*
************************************************************
ALL LOCATIONS IN CAMPAIGN
************************************************************
*/
app.get('/session/:sess/:camp/locations',function(req,res){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sess[req.params.camp];
    var campcont = camp.contents;
    var camplocas = campcont.locations;
    res.render('locations-page',{
        pageTitle:'Locations',
        camp,
        camploca,
    });
});
/*
************************************************************
SPECIFIC LOCATION IN SPECIFIC CAMPAIGN
************************************************************
*/
app.get('/session/:sess/:camp/locations/:loca',function(req,res){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sess[req.params.camp];
    var campcont = camp.contents;
    var camplocas = campcont.locations;
    var camploca = camplocas[req.params.loca];
    if(camploca){
        res.render(path.join(partials,'location-page'),{
            pageTitle:camploca.name,
            camploca,
        });
    }
    else{
        next();
    }
});
/*
************************************************************
SPECIFIC NPC IN SPECIFIC LOCATION IN SPECIFIC CAMPAIGN
************************************************************
*/
app.get('/session/:sess/:camp/locations/:loca/npcs/:np',function(req,res){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sess[req.params.camp];
    var campcont = camp.contents;
    var camplocas = campcont.locations;
    var camploca = camplocas[req.params.loca];
    var campnps = camploca.npcs;
    var campnp = campnps[req.params.np];
    if(campnp){
        res.render(path.join(partials,'npc-page'),{
            pageTitle:campnp.name,
            campnp,
        });
    }
    else{
        next();
    }
});
/*
************************************************************
ALL TOWNS IN CAMPAIGN
************************************************************
*/
app.get('/session/:sess/:camp/towns',function(req,res){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sess[req.params.camp];
    var campcont = camp.contents;
    var camptows = campcont.towns;
    res.render('towns-page',{
        pageTitle:'Towns',
        camptow,
    });
});
/*
************************************************************
SPECIFIC TOWN IN SPECIFIC CAMPAIGN
************************************************************
*/
app.get('/session/:sess/:camp/towns/:tow',function(req,res,next){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sess[req.params.camp];
    var campcont = camp.contents;
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    if(camptow){
        res.render(path.join(partials,'town-page'),{
            pageTitle:camptow.name,
            camptow,
        });
    }
    else{
        next();
    }
});
/*
************************************************************
ALL PICTURES OF TOWN IN CAMPAIGN
************************************************************
*/
app.get('/session/:sess/:camp/towns/:tow/pictures',function(req,res){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sess[req.params.camp];
    var campcont = camp.contents;
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var camppics = camptow.pictures;
    res.render('pictures-page',{
        pageTitle:'Pictures',
        camppics,
    });
});
/*
************************************************************
ALL NPCS IN TOWN IN CAMPAIGN
************************************************************
*/
app.get('/session/:sess/:camp/towns/:tow/npcs',function(req,res){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sess[req.params.camp];
    var campcont = camp.contents;
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var campnps = camptow.npcs;
    res.render('npcs-page',{
        pageTitle:'NPCs',
        campnps,
    });
});
/*
************************************************************
ALL LOCATIONS IN TOWN IN CAMPAIGN
************************************************************
*/
app.get('/session/:sess/:camp/towns/:tow/locations',function(req,res){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sess[req.params.camp];
    var campcont = camp.contents;
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var camplocas = camptow.locations;
    res.render('locations-page',{
        pageTitle:'Locations',
        camplocas,
    });
});
/*
************************************************************
SPECIFIC LOCATION IN SPECIFIC TOWN IN SPECIFIC CAMPAIGN
************************************************************
*/
app.get('/session/:sess/:camp/towns/:tow/locations/:loca',function(req,res){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sess[req.params.camp];
    var campcont = camp.contents;
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var camplocas = camptows.locations;
    var camploca = camptows[req.params.loca];
    if(camploca){
        res.render(path.join(partials,'location-page'),{
            pageTitle:camploca.name,
            camploca,
        });
    }
    else{
        next();
    }
});
/*
************************************************************
PICTURES OF LOCATION IN TOWN IN CAMPAIGN
************************************************************
*/
app.get('/session/:sess/:camp/towns/:tow/locations/:loca/pictures',function(req,res){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sess[req.params.camp];
    var campcont = camp.contents;
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var camplocas = camptow.locations;
    var camploca = camplocas[req.params.loca];
    var camppics = camploca.pictures;
    res.render('pictures-page',{
        pageTitle:'Pictures',
        camppics,
    });
});
/*
************************************************************
ALL NPCS IN LOCATION IN TOWN IN CAMPAIGN
************************************************************
*/
app.get('/session/:sess/:camp/towns/:tow/locations/:loca/npcs',function(req,res){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sess[req.params.camp];
    var campcont = camp.contents;
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var camplocas = camptow.locations;
    var camploca = camplocas[req.params.loca];
    var campnps = camploca.npcs;
    res.render('npcs-page',{
        pageTitle:'NPCs',
        campnps,
    });
});
/*
************************************************************
SPECIFIC NPC IN SPECIFIC LOCATION IN SPECIFIC TOWN IN SPECIFIC CAMPAIGN
************************************************************
*/
app.get('/session/:sess/:camp/towns/:tow/locations/:loca/npcs/:np',function(req,res){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sess[req.params.camp];
    var campcont = camp.contents;
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var camplocas = camptows.locations;
    var camploca = camptows[req.params.loca];
    var campnps = camploca.npcs;
    var campnp = campnps[req.params.np];
    if(campnp){
        res.render(path.join(partials,'npc-page'),{
            pageTitle:campnp.name,
            campnp,
        });
    }
    else{
        next();
    }
});
/*
************************************************************
PICTURES OF NPC IN LOCATION IN TOWN IN CAMPAIGN
************************************************************
*/
app.get('/session/:sess/:camp/towns/:tow/locations/:loca/npcs/:np/pictures',function(req,res){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sess[req.params.camp];
    var campcont = camp.contents;
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var camplocas = camptow.locations;
    var camploca = camplocas[req.params.loca];
    var campnps = camploca.npcs;
    var carmnp = campnps[req.params.np];
    var camppics = campnp.pictures;
    res.render('pictures-page',{
        pageTitle:'Pictures',
        camppics,
    });
});
/*
************************************************************
ADD SESSION
************************************************************
*/
app.post('/session/add-session',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
    if(req.body && req.body.sess){
        session[req.body.idi] = session[req.body.idi] || [];
        session[req.body.idi].push({
            id: req.body.id,
            idi: req.body.idi,
	    contents:contents.push({})
    });
    fs.writeFile(path.join(infoJSON,'session.json'),JSON.stringify(session));
    res.status(200).send();
}else{
      res.status(400).send("There must be a session to add.");
}});
/*
************************************************************
ADD CAMPAIGN TO SPECIFIC SESSION
************************************************************
*/
app.post('/session/:sess/add-campaign',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    if(sess){
        if(req.body && req.body.ca){
            sess.contents = sess.contents || [];
            sesscont[req.body.idi].push({
                id:req.body.id,
                idi:req.body.idi,
                name:req.body.name,
                notes:req.body.notes,
            });
        fs.writeFile(path.join(infoJSON,'session.json'),JSON.stringify(session));
        res.status(200).send();
    }
    else{
        res.status(400).send("There must be a campaign to add.");
    }
    }else{
        next();
    }
});
/*
************************************************************
ADD PICTURE TO SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/pictures/add-picture',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents;
    if(camp){
        if(req.body && req.body.pic){
            campcont.pictures = campcont.pictures || [];
            campcont.pictures.pic[req.body.idi].push({
                id:req.body.id,
                idi:req.body.idi,
                caption:req.body.caption,
                url:req.body.url
            });
            fs.writeFile(path.join(infoJSON,'session.json'),JSON.stringify(session));
            res.status(200).send();
        }
        else{
            res.status(400).send("There must be a picture to add.");
        }
    }
    else{
        next();
    }
});
/*
************************************************************
ADD NPC TO SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/npcs/add-npc',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents;
    if(camp){
        if(req.body && req.body.np){
            campcont.npcs = campcont.npcs || [];
            campcont.npcs.np[req.body.idi].push({
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
            fs.writeFile(path.join(infoJSON,'session.json'),JSON.stringify(session));
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
/*
************************************************************
ADD PICTURE TO SPECIFIC NPC IN SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/npcs/:np/pictures/add-picture',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents;
    var campnps = campcont.npcs;
    var campnp = campnps[req.params.np];
    if(campnp){
        if(req.body && req.body.pic){
            campnp.pictures = campnp.pictures || [];
            campnp.pictures.pic[req.body.idi].push({
                id:req.body.id,
                idi:req.body.idi,
                caption:req.body.caption,
                url:req.body.url
            });
            fs.writeFile(path.join(infoJSON,'session.json'),JSON.stringify(session));
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
/*
************************************************************
ADD LOCATION TO SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/locations/add-location',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents;
    if(camp){
        if(req.body && req.body.loca){
            campcont.locations = campcont.locations || [];
            campcont.locations.loca[req.body.idi].push({
                id:req.body.id,
                idi:req.body.idi,
                name:req.body.name,
                terrainType:req.body.terrainType,
                alignment:req.body.alignment,
                inventory:req.body.inventory,
                notes:req.body.notes
            });
            fs.writeFile(path.join(infoJSON,'session.json'),JSON.stringify(session));
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
/*
************************************************************
ADD PICTURE TO SPECIFIC LOCATION IN SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/locations/:loca/pictures/add-picture',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents;
    var camplocas = campcont.locations;
    var camploca = camplocas[req.params.loca];
    if(camploca){
        if(req.body && req.body.pic){
            camploca.pictures = camploca.pictures || [];
            camploca.pictures.pic[req.body.idi].push({
                id:req.body.id,
                idi:req.body.idi,
                caption:req.body.caption,
                url:req.body.url
            });
            fs.writeFile(path.join(infoJSON,'session.json'),JSON.stringify(session));
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
/*
************************************************************
ADD NPC TO SPECIFIC LOCATION IN SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/locations/:loca/npcs/add-npc',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents;
    var camplocas = campcont.locations;
    var camploca = camplocas[req.params.loca];
    if(camploca){
        if(req.body && req.body.np){
            camploca.npcs = camploca.npcs || [];
            camploca.npcs.np[req.body.idi].push({
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
            fs.writeFile(path.join(infoJSON,'session.json'),JSON.stringify(session));
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
/*
************************************************************
ADD PICTURE TO SPECIFIC NPC IN SPECIFIC LOCATION IN SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/locations/:loca/npcs/:np/pictures/add-picture',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents;
    var camplocas = campcont.locations;
    var camploca = camplocas[req.params.loca];
    var campnps = camploca.npcs;
    var campnp = campnps[req.params.np];
    if(campnp){
        if(req.body && req.body.pic){
            campnp.pictures = campnp.pictures || [];
            campnp.pictures.pic[req.body.idi].push({
                id:req.body.id,
                idi:req.body.idi,
                caption:req.body.caption,
                url:req.body.url
            });
           
            fs.writeFile(path.join(infoJSON,'session.json'),JSON.stringify(session));
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
/*
************************************************************
ADD TOWN TO SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/towns/add-town',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents;
    if(camp){
        if(req.body && req.body.tow){
            campcont.towns = campcont.towns || [];
            campcont.towns.tow[req.body.idi].push({
                id:req.body.id,
                idi:req.body.idi,
                name:req.body.name,
                alignment:req.body.alignment,
                danger:req.body.danger,
                population:req.body.population,
                economy:req.body.economy,
                law:req.body.law,
                crime:req.body.crime,
                qualities:req.body.qualities,
                notes:req.body.notes
            });

            fs.writeFile(path.join(infoJSON,'session.json'),JSON.stringify(session));
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
/*
************************************************************
ADD PICTURE TO SPECIFIC TOWN IN SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/towns/:tow/pictures/add-picture',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents;
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    if(camptow){
        if(req.body && req.body.pic){
            camptow.pictures = camptow.pictures || [];
            camptow.pictures.pic[req.body.idi].push({
                id:req.body.id,
                idi:req.body.idi,
                caption:req.body.caption,
                url:req.body.url
            });
            
            fs.writeFile(path.join(infoJSON,'session.json'),JSON.stringify(session));
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
/*
************************************************************
ADD NPC TO SPECIFIC TOWN IN SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/towns/:tow/npcs/add-npc',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents;
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    if(camptow){
        if(req.body && req.body.np){
            camptow.npcs = camptow.npcs || [];
            camptow.npcs.np[req.body.idi].push({
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
            fs.writeFile(path.join(infoJSON,'session.json'),JSON.stringify(session));
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
/*
************************************************************
ADD LOCATION TO SPECIFIC TOWN IN SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/towns/:tow/locations/add-location',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents;
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    if(camptow){
        if(req.body && req.body.loca){
            camptow.locations = camptow.locations || [];
            camptow.locations.loca[req.body.idi].push({
                id:req.body.id,
                idi:req.body.idi,
                name:req.body.name,
                terrainType:req.body.terrainType,
                alignment:req.body.alignment,
                inventory:req.body.inventory,
                notes:req.body.notes
            });
            fs.writeFile(path.join(infoJSON,'session.json'),JSON.stringify(session));
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
/*
************************************************************
ADD PICTURE TO SPECIFIC LOCATION IN SPECIFIC TOWN IN SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/towns/:tow/locations/:loca/pictures/add-picture',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents;
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var camplocas = camptow.locations;
    var camploca = camplocas[req.params.loca];
    if(camploca){
        if(req.body && req.body.pic){
            camploca.pictures = camploca.pictures || [];
            camploca.pictures.pic[req.body.idi].push({
                id:req.body.id,
                idi:req.body.idi,
                caption:req.body.caption,
                url:req.body.url
            });
           
            fs.writeFile(path.join(infoJSON,'session.json'),JSON.stringify(session));

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
/*
************************************************************
ADD NPC TO SPECIFIC LOCATION IN SPECIFIC TOWN IN SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/towns/:tow/locations/:loca/npcs/add-npc',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents;
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var camplocas = camptow.locations;
    var camploca = camplocas[req.params.loca];
    if(camploca){
        if(req.body && req.body.np){
            camploca.npcs = camploca.npcs || [];
            camploca.npcs.np[req.body.idi].push({
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
    
            fs.writeFile(path.join(infoJSON,'session.json'),JSON.stringify(session));
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
/*
************************************************************
ADD A PICTURE OF SPECIFIC NPC IN SPECIFIC LOCATION IN SPECIFIC TOWN IN SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/towns/:tow/locations/:loca/npcs/:np/pictures/add-picture',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
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
            campnp.pictures.pic[req.body.idi].push({
                id:req.body.id,
                idi:req.body.idi,
                caption:req.body.caption,
                url:req.body.url
            });
        
            fs.writeFile(path.join(infoJSON,'session'),JSON.stringify(session));
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
/*
*********************************************
LISTENING PORT
*********************************************
*/
app.get('*',function(req,res){
  res.status(404).render('404-page',{
    pageTitle:'404'
  });
});

app.listen(port,function(){
  console.log("== Listening on port", port);
});
