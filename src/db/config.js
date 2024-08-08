const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL).then(() => {console.log('Database connected')}).catch((error) => {console.log('Error connecting to the Database', error)})