const { isAuth } = require('./middleware/auth');

require('dotenv').config()
const express = require('express'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      mongoDBSession = require('connect-mongodb-session')(session),
      dbConnect = require('./models'),
      appRoutes = require('./routes/expense'),
      accountRoute = require('./routes/account'),
      depositRoute = require('./routes/deposit'),
      rawmaterialRoute = require('./routes/rawmaterials'),
      customerRoute = require('./routes/customers'),
      userRoute = require('./routes/user'),
      cors      = require('cors'),
      app       = express(),
      path          = require('path')


const store = new mongoDBSession({
    uri: process.env.URI,
    collection: 'mySession'
}) 

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store: store
}))




app.use(express.static(path.join(__dirname, "client", "build")));
app.use(cors())
// to help us log all request type to the console
app.use((req,res,next) =>{
    console.log(req.path, req.method)
    next()
})


app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

// defining my routes
app.use('/api/expense', isAuth, appRoutes)
// app.use('/api/account', isAuth, accountRoute)
app.use('/api/deposit', isAuth, depositRoute)
app.use('/api/rawmaterial', isAuth, rawmaterialRoute)
app.use('/api/customer', isAuth,  customerRoute)
app.use('/api/user', userRoute)

app.get(/^\/(?!api).*/, function(_, res) {
    res.sendFile(
        path.join(__dirname, "client", "build", "index.html"),
        function (err) {
            if(err) {
                res.status(500).send(err)
            }
        }
    )
})

// setting up server
app.listen(process.env.PORT, () => {
    console.log("my expense app loading on port: " + process.env.PORT)
})