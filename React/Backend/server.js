const express = require('express');//commonjs module (import)
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

//Enable CORS for all routes
app.use(cors());

app.use(bodyParser.json()) // Parse JSON request bodies
const users = [
    {id:1, username:'user', password:'password',name:'ABC'}
]

app.post('/api/login', (req,res) =>{
    const {username, password} = req.body;

    const user = users.find(u=> u.username === username && u.password === password);

    if(user){
        res.json({
            success:true,
            user:{
                id:user.id,
                username: user.username,
                name:user.name
            }
        })
    }
    else{
        res.status(401).json({success:false});
    }
});

const products = [
    {id:1, name:'Product1', price:20},
    {id:2, name:'Product2', price:30}
];

app.get('/api/products', (req,res) => {
    res.json(products);
})

app.listen(5000,()=>{
    console.log('server is listening at port 5000');
})