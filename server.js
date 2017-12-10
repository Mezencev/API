const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID
const app = express();
var db = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var ligaSpanish = [
    {
    id: 1,
    name: 'Barselona'
},{
    id: 2,
    name: 'Real madrid'
},{
    id: 3,
    name: 'Valencia'
}];


app.get('/', function(req, res){
    res.send('work API');
})
app.get('/soccer', function(req, res){
    db.get().collection('ligaSpanish').find().toArray(function(err, docs){
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    });
})
app.get('/soccer/:id', function(req, res){
    db.get().collection('ligaSpanish').findOne({_id: ObjectID(req.params.id)}, function(err, doc){
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
    })
    });
    

app.post('/soccer', function(req, res){
    var club = {
        name: req.body.name
    };
    db.get().collection('ligaSpanish').insert(club, function(err, result){
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(club);
    })
   res.send(club);
})
app.put('/soccer/:id', function(req, res){
   db.get().collection('ligaSpanish').UpdateOne(
       {_id: ObjectID.Number(req.params.id)},
       {name: req.body.name},
       function(err, results){
           if(err){
               console.log(err);
               res.sendStatus(500);
           }
           res.sendStatus(200);
       }
   )
})
app.delete('soccer/:id', function(req, res){
    db.get().collection('ligaSpanish').deleteOne(
        {_id: ObjectID.Number(req.params.id)},
        function(err, results){
            if(err){
                console.log(err);
                res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    )
})
db.connect('mongodb://localhost:27017/myapi', function(err,){
    if(err){
        return console.log(err);
    };
    app.listen(3012, function(){
        console.log('API started');
    })

})









