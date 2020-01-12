const express = require('express');
const app = express();

const PORT = process.env.PORT || 7000;
const connection = require('./config/dbconfig');

app.get('/', (req, res) =>{
    res.send("Connected to index");
})

app.get('/connection', (req, res) =>{
    connection.connect(function(err){
        if(!err) {
            console.log("Database is connected ... \n\n");  
          //  res.send('connected');
        } else {
            console.log("Error connecting database ... \n\n");  
            //res.send('error in connection');
        }
        });

        connection.query('SELECT * from portfolio', (err, rows, fields) =>{
           let obj =  JSON.stringify(rows);
           res.send(fields)
        } );
})

app.listen(PORT);
