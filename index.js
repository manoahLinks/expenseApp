const { isAuth } = require('./middleware/auth')
const {checkRole} = require('./middleware/checkRole');

require('dotenv').config()
const express = require('express'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      mongoDBSession = require('connect-mongodb-session')(session),
      dbConnect = require('./models'),
      appRoutes = require('./routes/expense'),
      dbarRoute = require('./routes/dbar'),
      accountRoute = require('./routes/account'),
      transactionRoute = require('./routes/transactions'),
      rawmaterialRoute = require('./routes/rawmaterials'),
      productRoute = require('./routes/product'),
      customerRoute = require('./routes/customers'),
      supplierRoute = require('./routes/suppliers'),
      rawmaterialTransactionRoute = require('./routes/rawmaterialTransactions'),
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
app.use('/api/dbar', isAuth, dbarRoute)
app.use('/api/account', isAuth, accountRoute)
app.use('/api/transaction', isAuth, transactionRoute)
app.use('/api/rawmaterial', isAuth, checkRole('storekeeper'), rawmaterialRoute)
app.use('/api/product', isAuth, productRoute)
app.use('/api/customer', isAuth,  customerRoute)
app.use('/api/supplier', isAuth, supplierRoute)
app.use('/api/rawmaterial-transaction', isAuth, rawmaterialTransactionRoute)
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