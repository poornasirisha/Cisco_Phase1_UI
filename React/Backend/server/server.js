const express = require('express');//commonjs module (import)
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 5000;

//Enable CORS for all routes
app.use(cors());

app.use(bodyParser.json()) // Parse JSON request bodies

const connection = mysql.createPool({
    host:'localhost',
    user: 'root',
    password:'root',
    database:'cisco'    
});

const loginMiddleware = require('./api/login');
const productMiddleware = require('./api/products');

app.use('/api', loginMiddleware(connection));
//app.use('/api/products', productMiddleware(connection));

app.listen(port, ()=>{
    console.log("serve is running at port " + port);
})





