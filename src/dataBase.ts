import mongoose, { ConnectOptions } from 'mongoose'

(async () => {
    try {

        const db = await mongoose.connect('mongodb://localhost/mern-database')
        console.log("conectado a: ", db.connection.name)
    } catch (error) {
        console.log(error)
    }

})()