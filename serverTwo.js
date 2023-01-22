const { response } = require('express')
const express = require('express')
//const bodyParser = require('body-parser')
/*const mongoose = require('mongoose');
const mongodb = require('mongodb')*/
const app = express()
require('dotenv').config()
const port = process.env.SECOND_PORT

/* 
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Prozy:<password>@cluster0.hhh9qxx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/

const db = {
    "userNAmes": new Array(),
    "passwords": new Array(),
}

   userProfile = (n) => {
        return `Username is ${db.userNAmes[n]} and password is ${db.passwords[n]}`
   }

   const message = () => {
    console.log("Data registered succesfully...")
    console.log(`Usernames: ${db.userNAmes}`)
     console.log(`Passwords: ${db.passwords}`)
   }

   let person = {
    "name": "Prosper",
    "age": 18,
    "favouriteHobbies": new Array()
   }

   /*
app.use('/',
    bodyParser.urlencoded({
    extended: true
})
)*/

app.get('/', (request, response, next) => {
    request.html = "C:/Users/user/App/public"
    next()
},
(request, response) => {
    response.sendFile("C:/Users/user/App/public/index.html")
    console.log("Root Html Logged..........")   
})

app.route('/sign').get((request, response) => {
    response.sendFile('C:/Users/user/App/public/form.html')
})
app.get('/reg', (request, response, next) => {
    request.data = request.query;
    next()
}, 
    (request, response) => {
        db.userNAmes.push(request.data['name'])
        db.passwords.push(request.data.password)
        message()
        response.send("<a>http://localhost:5500<a>")
    })

app.get('/profile', (request, response, next) => {
    console.log('Fetching Data........')
    next()
}, (request, response) => {
    let i = 0
    let names = request.query.name
    let pass = request.query.password
    while ( i < db['userNAmes'].length) {
        if (names == db['userNAmes'][i] && pass == db['passwords'][i]) {
           console.log("Match Found.............")
            console.log(`USer: ${db.userNAmes[i]} password: ${db.passwords[i]}`)
        } 
        else {
            console.log("Match not Found......")
        }
        i++
    }
    response.json({
        name: db.userNAmes
    })
})

app.use("/",
    express.static("C:/Users/user/App/public")
)

app.listen(port, () => {
    console.log(`App is starting at https://localhost: ${port}`
    )
})
