const express = require('express');
const router = express.Router();

const loginMiddleware = (pool) => {

    router.post('/signup', (req,res) => {
        const {username, password, name} = req.body;

        pool.query(
            'insert into app_user (username, password, name) values(?,?,?)',
            [username, password, name],
            (err, results) =>{
                if(err){
                    console.log('Error during signup', err);
                    res.status(500).json({success: false, message:'Internal Server Error'});
                }
                console.log("User registered successfully", results);
                res.json({success:true, message:"User registered successfully"});
            }
        )
    });

    router.post('/login', (req,res) => {
        const {username, password} = req.body;

        pool.query('Select * from app_user where username = ? and password = ?', [username, password], 
            (err,result) => {
                if(err){
                    res.status(500).json({success:false, message:'Error'});
                }

                if(result.length > 0){
                    const user = result[0];

                    res.json({
                        success:true,
                        user:{
                            id:user.id,
                            username: user.username,
                            name:user.name
                        }
                    });                   

                }
            }
        )
    });



    return router;

}

module.exports = loginMiddleware;