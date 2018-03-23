const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
require('dotenv').config();
const massive = require('massive'); //////???????? why is this not working
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