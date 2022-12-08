const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true})
        .then(() => {
            console.log("DB connected")
        })
        .catch((err) => {
            console.log(err)
        })