const express = require('express');
const app = express();
const route = express.Router();
const connection = require('../config/dbconfig');


connection.connect();
// Creating a new project - C
app.post('/project', (req, res) =>{
    let _logo = req.params.logo;
    let _title = req.params.title;
    let _body = req.params.body;
    let _category = req.params.category;
    let _isActive = req.params.isActive;

    let sql = 'INSERT into portfolio';
    let squery = `values (${_logo },${_title},${_body},${_category},${_isActive}) into id, logo, title, body, category, isActive`;

    


});

// Getting list of all projects - R All 
app.get('/project', (req, res) =>{
        
});
    
// Get a specific project - R 
app.get('/project/:id',(req, res) =>{
        
});
    

// Updating a new project - U
app.put('/project/:id', (req, res) =>{

});

// Delete a specific project - D
app.delete('/project/:id', (req, res)=>{

});








