    const express = require("express")
    const mongoose = require("mongoose")
    const cookieParser = require('cookie-parser')
    const axios = require('axios')
    const path = require('path')
    const moment = require('moment')
    require("dotenv").config({ path: "./config/.env" })

    const userRoute = require("./routes/api/user")
    const vacancyRoute = require("./routes/api/vacancy")
    const adminRoute = require("./routes/admin")
    const workRoute = require("./routes/work")
    const Route = require("./routes/route")

    const app = express()

    app.set("view engine", "html")
    app.engine('html', require('ejs').renderFile)
    // app.set("views", __dirname + "/views")

    // app.use(express.static(__dirname + "/public"))
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    app.use(cookieParser())

    app.use('/api', userRoute)
    app.use('/api',vacancyRoute)
    app.use('/admin',adminRoute)
    app.use(workRoute)
    app.use(Route)

    const start = async () => {
        try {
            await mongoose
                .connect(process.env.MONGODB_URI, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                })
                .then(() => {
                    console.log("Database is connected")
                })
                .catch((error) => console.log(error.message))
            app.listen(process.env.PORT, () => {
                console.log(`Server is running on PORT = ${process.env.PORT}`)
            })
            process.on("beforeExit", () => {
                server.close(() => {
                    console.log("Server is shutting down")
                    res.clearCookie("auth")
                })
            })
        } catch (error) {
            console.log(error)
        }
    }

    start()
