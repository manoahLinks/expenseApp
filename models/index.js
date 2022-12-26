const mongoose = require('mongoose')

mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log("DB connected")
        })
        .catch((err) => {
            console.log(err.message)
        })