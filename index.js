require('dotenv').config()
const express = require('express'),
      bodyParser = require('body-parser'),
      dbConnect = require('./models'),
      appRoutes = require('./routes/expense'),
      accountRoute = require('./routes/account'),
      depositRoute = require('./routes/deposit'),
      cors      = require('cors'),
      app       = express(),
      path          = require('path')


app.use(express.static(path.join(__dirname, "client", "build")));
app.use(cors())
// to help us log all request type to the console
app.use((req,res,next) =>{
    console.log(req.path, req.method)
    next()
})


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


app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

// defining my routes
app.use('/api/expense', appRoutes)
app.use('/api/account', accountRoute)
app.use('/api/deposit', depositRoute)


// setting up server
app.listen(process.env.PORT, () => {
    console.log("expense app loading on port: " + process.env.PORT)
})