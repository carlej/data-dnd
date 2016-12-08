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
    pageTitle:'Managing the Madness',
    session:session
  });
});

/*
************************************************************
SPECIFIC SESSION
************************************************************
*/
app.get('/session/:sess',function(req,res,next){
    var sess = session;
    var sessid = sess[req.params.sess];
    var sesscont= sess.contents;
    if(sess){
        res.render('campaigns-page',{
            pageTitle: 'Campaigns',
            sessid,
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
    var camp = sesscont[req.params.camp];
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
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var camppics = campcont.pictures;
    res.render('pictures-page',{
        pageTitle:'Pictures',
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
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var campnps = campcont.npcs;
    res.render('npcs-page',{
        pageTitle:'NPCs',
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
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
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
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var camplocas = campcont.locations;
    res.render('locations-page',{
        pageTitle:'Locations',
        camplocas,
    });
});
/*
************************************************************
SPECIFIC LOCATION IN SPECIFIC CAMPAIGN
************************************************************
*/
app.get('/session/:sess/:camp/locations/:loca',function(req,res,next){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
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
app.get('/session/:sess/:camp/locations/:loca/npcs/:np',function(req,res,next){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var camplocas = campcont.locations;
    var camploca = camplocas[req.params.loca];
    var campnps = camploca.contents[0];
    var locanp = campnps.npcs;
    var campnp = locanp[req.params.np];
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
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var camptows = campcont.towns;
    res.render('towns-page',{
        pageTitle:'Towns',
        camptows,
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
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
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
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents;
    var camptows = campcont[0].towns;
    var camptow = camptows[req.params.tow];
    var towcont = camptow.contents[0];
    var camppics = towcont.pictures;
    res.render('pictures-page',{
        pageTitle:'Pictures',
        camppics,
    });
});
/*
************************************************************
ALL PICTURES OF LOCATION IN CAMPAIGN
************************************************************
*/
app.get('/session/:sess/:camp/locations/:loca/pictures',function(req,res){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents;
    var camplocas = campcont[0].locations;
    var camploca = camplocas[req.params.loca];
    var locacont = camploca.contents[0];
    var camppics = locacont.pictures;
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
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var towcont = camptow.contents[0];
    var campnps = towcont.npcs;
    res.render('npcs-page',{
        pageTitle:'NPCs',
        campnps,
    });
});
/*
************************************************************
ALL NPCS LOCAION IN CAMPAIGN
************************************************************
*/
app.get('/session/:sess/:camp/locations/:loca/npcs',function(req,res){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var camplocas = campcont.locations;
    var camploca = camplocas[req.params.loca];
    var locacont = camploca.contents[0];
    var campnps = locacont.npcs;
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
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents;
    var camptows = campcont[0].towns;
    var camptow = camptows[req.params.tow];
    var towcont = camptow.contents[0];
    var camplocas = towcont.locations;
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
app.get('/session/:sess/:camp/towns/:tow/locations/:loca',function(req,res,next){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var camplocas = camptow.contents[0];
    var towloca = camplocas.locations;
    var camploca = towloca[req.params.loca];
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
SPECIFIC NPC IN SPECIFIC TOWN IN SPECIFIC CAMPAIGN
************************************************************
*/
app.get('/session/:sess/:camp/towns/:tow/npcs/:np',function(req,res,next){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var campnps = camptow.contents[0];
    var townp = campnps.npcs;
    var campnp = townp[req.params.np];
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
PICTURES OF LOCATION IN TOWN IN CAMPAIGN
************************************************************
*/
app.get('/session/:sess/:camp/towns/:tow/locations/:loca/pictures',function(req,res){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var towcont = camptow.contents[0];
    var camplocas = towcont.locations;
    var camploca = camplocas[req.params.loca];
    var locacont = camploca.contents[0];
    var camppics = locacont.pictures;
    res.render('pictures-page',{
        pageTitle:'Pictures',
        camppics,
    });
});
/*
************************************************************
PICTURES OF NPCS IN LOCATION IN CAMPAIGN
************************************************************
*/
app.get('/session/:sess/:camp/locations/:loca/npcs/:np/pictures',function(req,res){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var camplocas = campcont.locations;
    var camploca = camplocas[req.params.loca];
    var locacont = camploca.contents[0];
    var campnps = locacont.npcs;
    var campnp = campnps[req.params.np];
    var npcont = campnp.contents[0];
    var camppics = npcont.pictures;
    res.render('pictures-page',{
        pageTitle:'Pictures',
        camppics,
    });
});
/*
************************************************************
PICTURES OF NPCS IN CAMPAIGN
************************************************************
*/
app.get('/session/:sess/:camp/npcs/:np/pictures',function(req,res){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var campnps = campcont.npcs;
    var campnp = campnps[req.params.np];
    var npcont = campnp.contents[0];
    var camppics = npcont.pictures;
    res.render('pictures-page',{
        pageTitle:'Pictures',
        camppics,
    });
});
/*
************************************************************
PICTURES OF NPCS IN TOWN IN CAMPAIGN
************************************************************
*/
app.get('/session/:sess/:camp/towns/:tow/npcs/:np/pictures',function(req,res){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var towcont = camptow.contents[0];
    var campnps = towcont.npcs;
    var campnp = campnps[req.params.np];
    var npcont = campnp.contents[0];
    var camppics = npcont.pictures;
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
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents;
    var camptows = campcont[0].towns;
    var camptow = camptows[req.params.tow];
    var towcont = camptow.contents[0];
    var camplocas = towcont.locations;
    var camploca = camplocas[req.params.loca];
    var locacont = camploca.contents[0];
    var campnps = locacont.npcs;
    res.render('npcs-page',{
        pageTitle:'NPCs',
        campnps,
    });
});

/*
************************************************************
ADD A PICTURE OF SPECIFIC NPC IN SPECIFIC TOWN IN SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/towns/:tow/npcs/:np/pictures/add-picture',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var towcont = camptow.contents[0];
    var campnps = towcont.npcs;
    var campnp = campnps[req.params.np];
    var npcont = campnp.contents[0];
    if(campnp){
        npcont.pictures = npcont.pictures || [];
        npcont.pictures.push({
            url:req.body.url,
            caption:req.body.caption
            });
    
            fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
            res.status(200).send();
    }
    else{
        next();
    }
});
/*
************************************************************
SPECIFIC NPC IN SPECIFIC LOCATION IN SPECIFIC TOWN IN SPECIFIC CAMPAIGN
************************************************************
*/
app.get('/session/:sess/:camp/towns/:tow/locations/:loca/npcs/:np',function(req,res,next){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var towcont = camptow.contents[0];
    var camplocas = towcont.locations;
    var camploca = camplocas[req.params.loca];
    var locacont = camploca.contents[0];
    var locanps = locacont.npcs;
    var campnp = locanps[req.params.np];
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
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var towcont = camptow.contents[0];
    var camplocas = towcont.locations;
    var camploca = camplocas[req.params.loca];
    var locacont = camploca.contents[0];
    var locanps = locacont.npcs;
    var campnp = locanps[req.params.np];
    var npcont = campnp.contents[0];
    var camppics = npcont.pictures;
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

app.post('/session/add-session',function(req,res){//this updates the info on the server side still needs to update on client and backend
        //session[req.body.idi] = session[req.body.idi] || [];
        var sess =fs.readFileSync(path.join(infoJSON,'session.json'));
        var hold=(sess.length/100);
        var idnumber= "sessid:"+hold;
        session[idnumber]={
            id: hold,
            idi: "sessid:"+hold,
            name: req.body.name
    };
    session[idnumber].contents = session[idnumber].contents || [];
    session[idnumber].contents.push({})
    fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
    res.status(200).send();
});

/*
************************************************************
ADD CAMPAIGN TO SPECIFIC SESSION
************************************************************
*/
app.post('/session/:sess/add-campaign',function(req,res,next){//this updates the info on the server side still needs to update on client and backend
    var allSessions = session;
    var sess = allSessions[req.params.sess];
    var camp = ({
            name: req.body.name,
            notes: req.body.notes,
            contents:[{
                towns:[{}],
                locations:[{}],
                npcs:[{}],
                pictures:[{}]
            }],
        })

    sess.contents = sess.contents || [];
    sess.contents.push(camp
    );
        fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(allSessions));
        res.status(200).send();
  
});
/*
************************************************************
REMOVE SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/remove',function(req,res,next){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    if(camp){
        sesscont = sesscont || [];
        sesscont[req.params.camp]=({
        });
      	fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
            res.status(200).send();
    }
    else{
        next();
    }
});
/*
************************************************************
REMOVE SPECIFIC TOWN IN SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/towns/:tow/remove',function(req,res,next){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    if(camptow){
        camptows = camptows || [];
        camptows[req.params.tow]=({
        });
        fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
            res.status(200).send();
    }
    else{
        next();
    }
});
/*
************************************************************
REMOVE SPECIFIC LOCATION IN SPECIFIC TOWN IN SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/towns/:tow/locations/:loca/remove',function(req,res,next){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var towcont = camptow.contents[0];
    var towlocas = towcont.locations;
    var camploca = towlocas[req.params.loca];
    if(camploca){
        towlocas = towlocas || [];
        towlocas[req.params.loca]=({
        });
        fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
            res.status(200).send();
    }
    else{
        next();
    }
});
/*
************************************************************
REMOVE SPECIFIC LOCATION IN SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/locations/:loca/remove',function(req,res,next){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var camplocas = campcont.locations;
    var camploca = camplocas[req.params.loca];
    if(camploca){
        camplocas = camplocas || [];
        camplocas[req.params.loca]=({
        });
        fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
            res.status(200).send();
    }
    else{
        next();
    }
});
/*
************************************************************
REMOVE SPECIFIC NPC IN SPECIFIC LOCATION IN SPECIFIC TOWN IN SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/towns/:tow/locations/:loca/npcs/:np/remove',function(req,res,next){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var towcont = camptow.contents[0];
    var towlocas = towcont.locations;
    var camploca = towlocas[req.params.loca];
    var locacont = camploca.contents[0];
    var locanps = locacont.npcs;
    var campnp = locanps[req.params.np];
    if(campnp){
        locanps = locanps || [];
        locanps[req.params.np]=({
        });
        fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
            res.status(200).send();
    }
    else{
        next();
    }
});
/*
************************************************************
REMOVE SPECIFIC NPC IN SPECIFIC TOWN IN SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/towns/:tow/npcs/:np/remove',function(req,res,next){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var towcont = camptow.contents[0];
    var townps = towcont.npcs;
    var campnp = townps[req.params.np];
    if(campnp){
        townps = townps || [];
        townps[req.params.np]=({
        });
        fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
            res.status(200).send();
    }
    else{
        next();
    }
});
/*
************************************************************
REMOVE SPECIFIC NPC IN SPECIFIC LOCATIONS IN SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/locations/:loca/npcs/:np/remove',function(req,res,next){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var camplocas = campcont.locations;
    var camploca = camplocas[req.params.loca];
    var locacont = camploca.contents[0];
    var locanps = locacont.npcs;
    var campnp = locanps[req.params.np];
    if(campnp){
        locanps = locanps || [];
        locanps[req.params.np]=({
        });
        fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
            res.status(200).send();
    }
    else{
        next();
    }
});
/*
************************************************************
REMOVE SPECIFIC NPC IN SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/npcs/:np/remove',function(req,res,next){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var campnps = campcont.npcs;
    var campnp = campnps[req.params.np];
    if(campnp){
        campnps = campnps || [];
        campnps[req.params.np]=({
        });
        fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
            res.status(200).send();
    }
    else{
        next();
    }
});

/*
************************************************************
REMOVE SPECIFIC PICTURE IN SPECIFIC NPC IN SPECIFIC LOCATION IN SPECIFIC TOWN IN SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/towns/:tow/locations/:loca/npcs/:np/pictures/:pic/remove',function(req,res,next){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var towcont = camptow.contents[0];
    var camplocas = towcont.locations;
    var camploca = camplocas[req.params.loca];
    var locacont = camploca.contents[0];
    var locanps = locacont.npcs;
    var locanp = locanps[req.params.np];
    var npcont = locanp.contents[0];
    var nppics = npcont.pictures;
    var camppic = nppics[req.params.pic];
    if(camppic){
        nppics = nppics || [];
        nppics[req.params.pic]=({
            });
    
            fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
            res.status(200).send();
    }
    else{
        next();
    }
});
/*
************************************************************
REMOVE SPECIFIC PICTURE IN SPECIFIC LOCATION IN SPECIFIC TOWN IN SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/towns/:tow/locations/:loca/pictures/:pic/remove',function(req,res,next){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var towcont = camptow.contents[0];
    var camplocas = towcont.locations;
    var camploca = camplocas[req.params.loca];
    var locacont = camploca.contents[0];
    var locapics = locacont.pictures;
    var camppic = locapics[req.params.pic];
    if(camppic){
        locapics = locapics || [];
        locapics[req.params.pic]=({
            });
    
            fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
            res.status(200).send();
    }
    else{
        next();
    }
});
/*
************************************************************
REMOVE SPECIFIC PICTURE IN SPECIFIC NPC IN SPECIFIC TOWN IN SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/towns/:tow/npcs/:np/pictures/:pic/remove',function(req,res,next){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var towcont = camptow.contents[0];
    var campnps = towcont.npcs;
    var campnp = campnps[req.params.np];
    var npcont = campnp.contents[0];
    var nppics = npcont.pictures;
    var camppic = nppics[req.params.pic];
    if(camppic){
        nppics = nppics || [];
        nppics[req.params.pic]=({
            });
    
            fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
            res.status(200).send();
    }
    else{
        next();
    }
});
/*
************************************************************
REMOVE SPECIFIC PICTURE IN SPECIFIC NPC IN SPECIFIC LOCATION IN SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/locations/:loca/npcs/:np/pictures/:pic/remove',function(req,res,next){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var camplocas = campcont.locations;
    var camploca = camplocas[req.params.loca];
    var locacont = camploca.contents[0];
    var campnps = locacont.npcs;
    var campnp = campnps[req.params.np];
    var npcont = campnp.contents[0];
    var nppics = npcont.pictures;
    var camppic = nppics[req.params.pic];
    if(camppic){
        nppics = nppics || [];
        nppics[req.params.pic]=({
            });
    
            fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
            res.status(200).send();
    }
    else{
        next();
    }
});
/*
************************************************************
REMOVE SPECIFIC PICTURE IN SPECIFIC TOWN IN SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/towns/:tow/pictures/:pic/remove',function(req,res,next){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var towcont = camptow.contents[0];
    var towpics = towcont.pictures;
    var camppic = towpics[req.params.pic];
    if(camppic){
        towpics = towpics || [];
        towpics[req.params.pic]=({
            });
    
            fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
            res.status(200).send();
    }
    else{
        next();
    }
});
/*
************************************************************
REMOVE SPECIFIC PICTURE IN SPECIFIC LOCATION IN SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/locations/:loca/pictures/:pic/remove',function(req,res,next){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var camplocas = campcont.locations;
    var camploca = camplocas[req.params.loca];
    var locacont = camploca.contents[0];
    var locapics = locacont.pictures;
    var camppic = locapics[req.params.pic];
    if(camppic){
        locapics = locapics || [];
        locapics[req.params.pic]=({
            });
    
            fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
            res.status(200).send();
    }
    else{
        next();
    }
});
/*
************************************************************
REMOVE SPECIFIC PICTURE IN SPECIFIC NPC IN SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/npcs/:np/pictures/:pic/remove',function(req,res,next){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var campnps = campcont.npcs;
    var campnp = campnps[req.params.np];
    var npcont = campnp.contents[0];
    var nppics = npcont.pictures;
    var camppic = nppics[req.params.pic];
    if(camppic){
        nppics = nppics || [];
        nppics[req.params.pic]=({
            });
    
            fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
            res.status(200).send();
    }
    else{
        next();
    }
});
/*
************************************************************
REMOVE SPECIFIC PICTURE IN SPECIFIC CAMPAIGN
************************************************************
*/
app.post('/session/:sess/:camp/pictures/:pic/remove',function(req,res,next){
    var sess = session[req.params.sess];
    var sesscont = sess.contents;
    var camp = sesscont[req.params.camp];
    var campcont = camp.contents[0];
    var camppics = campcont.pictures;
    var camppic = camppics[req.params.pic];
    if(camppic){
        camppics = camppics || [];
        camppics[req.params.pic]=({
            });
    
            fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
            res.status(200).send();
    }
    else{
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
    var campcont = camp.contents[0];
    var camppics = campcont.pictures;
    if(camp){
            campcont.pictures = campcont.pictures || [];
            campcont.pictures.push({
                url:req.body.url,
                caption:req.body.caption,
            });
            fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
            res.status(200).send();
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
    var campcont = camp.contents[0];
    var campnps = campcont.npcs;
    if(camp){
        campcont.npcs = campcont.npcs || [];
        campcont.npcs.push({
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
            notes:req.body.notes,
            contents:[{
                pictures:[{}]
            }]
        });
        fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
        res.status(200).send();
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
    var campcont = camp.contents[0];
    var campnps = campcont.npcs;
    var campnp = campnps[req.params.np];
    var npcont = campnp.contents[0];
    if(campnp){
        npcont.pictures = npcont.pictures || [];
        npcont.pictures.push({
            url:req.body.url,
            caption:req.body.caption,
        });
        fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
        res.status(200).send();
    }else{
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
    var campcont = camp.contents[0];
    var camplocas = campcont.locations;
    if(camp){
        campcont.locations = campcont.locations || [];
        campcont.locations.push({
            name:req.body.name,
            terrain:req.body.terrain,
            alignment:req.body.alignment,
            inventory:req.body.inventory,
            notes:req.body.notes,
            contents:[{
                npcs:[{}],
                pictures:[{}]
        }]
        });
        fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
        res.status(200).send();
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
    var campcont = camp.contents[0];
    var camplocas = campcont.locations;
    var camploca = camplocas[req.params.loca];
    var locacont = camploca.contents[0];
    if(camploca){
        locacont.pictures = locacont.pictures || [];
        locacont.pictures.push({
            url:req.body.url,
            caption:req.body.caption,
            
        });
        fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
        res.status(200).send();
    }else{
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
    var campcont = camp.contents[0];
    var camplocas = campcont.locations;
    var camploca = camplocas[req.params.loca];
    var locacont = camploca.contents[0];
    var locanps = locacont.npcs;
    if(camploca){
        locacont.npcs = locacont.npcs || [];
        locacont.npcs.push({
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
            notes:req.body.notes,
            contents:[{
                pictures:[{}]
            }]
        });
        fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
        res.status(200).send();
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
    var campcont = camp.contents[0];
    var camplocas = campcont.locations;
    var camploca = camplocas[req.params.loca];
    var locacont = camploca.contents[0];
    var locanps = locacont.npcs;
    var locanp = locanps[req.params.np];
    var npcont = locanp.contents[0];
    if(locanp){
        npcont.pictures = npcont.pictures || [];
        npcont.pictures.push({
            url:req.body.url,
            caption:req.body.caption
        });
        fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
        res.status(200).send();
    }else{
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
    var campcont = camp.contents[0];
    var camptows = campcont.towns;
    if(camp){
            campcont.towns = campcont.towns || [];
            campcont.towns.push({
                name:req.body.name,
                alignment:req.body.alignment,
                government:req.body.government,
                danger:req.body.danger,
                population:req.body.population,
                economy:req.body.economy,
                law:req.body.law,
                crime:req.body.crime,
                qualities:req.body.qualities,
                notes:req.body.notes,
                contents:[{
                    locations:[{}],
                    npcs:[{}],
                    pictures:[{}]
                }]
            });
            fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
            res.status(200).send();
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
    var campcont = camp.contents[0];
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var towcont = camptow.contents[0];;
    if(camptow){
        towcont.pictures = towcont.pictures || [];
        towcont.pictures.push({
            url:req.body.url,
            caption:req.body.caption
        });
        fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
        res.status(200).send();
    }else{
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
    var campcont = camp.contents[0];
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var towcont = camptow.contents[0];
    var townps = towcont.npcs;
    if(camptow){
        towcont.npcs = towcont.npcs || [];
        towcont.npcs.push({
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
            notes:req.body.notes,
            contents:[{
                pictures:[{}]
            }]
            });
        fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
        res.status(200).send();
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
    var campcont = camp.contents[0];
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var towcont = camptow.contents[0];
    var towlocas = towcont.locations;
    if(camptow){
        towcont.locations = towcont.locations || [];
        towcont.locations.push({
            name:req.body.name,
            terrain:req.body.terrain,
            alignment:req.body.alignment,
            inventory:req.body.inventory,
            notes:req.body.notes,
            contents:[{
                npcs:[{}],
                pictures:[{}]
        }]
        });
        fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
        res.status(200).send();
    }else{
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
    var campcont = camp.contents[0];
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var towcont = camptow.contents[0];
    var camplocas = towcont.locations;
    var camploca = camplocas[req.params.loca];
    var locacont = camploca.contents[0];
    if(camploca){
        locacont.pictures = locacont.pictures || [];
        locacont.pictures.push({
            url:req.body.url,
            caption:req.body.caption
            });
    
            fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
            res.status(200).send();
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
    var campcont = camp.contents[0];
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var towcont = camptow.contents[0];
    var camplocas = towcont.locations;
    var camploca = camplocas[req.params.loca];
    var locacont = camploca.contents[0];
    var locanps = locacont.npcs;
    if(camploca){
        locacont.npcs = locacont.npcs || [];
        locacont.npcs.push({
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
            notes:req.body.notes,
            contents:[{
                pictures:[{}]
            }]
            });
    
            fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
            res.status(200).send();
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
    var campcont = camp.contents[0];
    var camptows = campcont.towns;
    var camptow = camptows[req.params.tow];
    var towcont = camptow.contents[0];
    var camplocas = towcont.locations;
    var camploca = camplocas[req.params.loca];
    var locacont = camploca.contents[0];
    var locanps = locacont.npcs;
    var locanp = locanps[req.params.np];
    var npcont = locanp.contents[0];
    if(locanp){
        npcont.pictures = npcont.pictures || [];
        npcont.pictures.push({
            url:req.body.url,
            caption:req.body.caption
            });
    
            fs.writeFile(path.join(infoJSON,'session.json'),''+JSON.stringify(session));
            res.status(200).send();
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
