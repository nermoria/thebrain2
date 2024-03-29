const express = require('express');
const bodyParser = require ('body-parser');
const bcrypt = require ('bcrypt-nodejs');
const cors = require ('cors');
const knex = require ('knex');



const register = require ('./Controllers/register')
const signin = require ('./Controllers/signin')
const profileid = require ('./Controllers/profileid')
const image = require ('./Controllers/image')





const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'ivanpanasyuk',
    password : '',
    database : 'thebrain'
  }
});




const app = express();


app.use(bodyParser.json());
app.use(cors());





app.get ('/', (req,res)=> {

	res.send (database.users);
})


app.post('/signin', (req,res) => {signin.theBranchSignin(req,res,db, bcrypt)})




app.post('/register', (req,res) => {register.theBranchRegister(req,res,db, bcrypt)})




app.get ('/profile/:id',(req,res)=> {profileid.theBranchProfileid(req,res,db)})




app.put('/image', (req,res) => {image.theBranchImage(req,res,db)})


app.post('/imageurl', (req,res) => {image.apiCall(req,res)})

 
app.listen(3001, () => {
	console.log('app is running on port 3001');
})





