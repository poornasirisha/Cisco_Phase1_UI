const express = require('express');//commonjs module (import)
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

//Enable CORS for all routes
app.use(cors());

app.use(bodyParser.json()) // Parse JSON request bodies

const products = [
{id:1, name:'Product1',description:'Description1',category:'Mobile'},
  {id:2, name:'Product2',description:'Description2',category:'Mobile'},
  {id:3, name:'Product3',description:'Description3',category:'Mobile'},
  {id:4, name:'Product4',description:'Description4',category:'Mobile'},
  {id:5, name:'Product5',description:'Description5',category:'Mobile'},
  {id:6, name:'Product6',description:'Description6',category:'Mobile'},
  {id:7, name:'Product7',description:'Description7',category:'Mobile'},
];

class User{
    firstName;
    lastName;
    email;
    password;

    constructor(firstName,lastName,email,password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}

const users = [new User('Sudha','Agarwal', 'sudha@gmail.com','123456')];

app.get('/products',(req, res) =>{
    res.status(200).json(products);
});

app.post('/login', (req,res) => {
    const { email, password} = req.body;

    const user = users.find((user) => user.email===email && user.password===password);

    if(user){
        res.status(200).json({message: 'Login Successful'});
    }
    else{
        res.status(401).json({message: 'Login Unsuccessful'});
    }

})
app.listen(3000, ()=>{
    console.log("server is listening on port 3000");
});





