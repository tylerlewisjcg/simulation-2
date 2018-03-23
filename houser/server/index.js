const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
require('dotenv').config();
const massive = require('massive'); 
const port = 3333;



const app = express();

app.use(bodyParser.json());

massive(process.env.SESSION_SECRET)
.then( db => {app.set('db', db) 
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );
});



app.get("/api/get_houses", (req, res) => {
    app
      .get("db")
      .get_all()
      .then(response => res.send(response));
  });

  /////// POST ENDPOINT/ need to also make an insert into SQL file
app.post('/api/add', (req, res)=>{
    app.get('db')
    .add(req.body)
    .then(response => res.sendStatus(200))
    .catch(err => res.sendStatus(500))
    console.log("post method finished running");
})



  /////// DELETE ENDPOINT//  need to also make a delete SQL file
  app.delete( '/api/delete_house/:id', ( req, res ) => {
    app.get('db').delete_house(req.params.id)
        .then( response => res.send() )
} )