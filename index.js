const express = require('express')
const app = express()
const authRouter = require('./router/auth-router')
const contactRouter = require('./router/contact-route')
const adminRouter = require('./router/admin-router')
const PORT = 3000
const cors = require('cors')
const connectDB = require('./util/db')
const errorMiddleware = require('./middlewares/error-middleware')
const dotenv = require('dotenv').config()


app.use(express.json())

const corsOptions = {
    origin: `http://localhost:5173`,
    methods:"POST, PUT, DELETE, GET, PATCH, HEAD",
    credentials:true,
    
}
app.use(cors(corsOptions))

//middleware allow to use json data

app.use('/api/auth', authRouter)
app.use('/api/committee', contactRouter)
app.use('/api/admin', adminRouter)


app.use(errorMiddleware)

connectDB().then(() => {
    app.listen(process.env.PORT, () => console.log("Server is running on the PORT " + process.env.PORT))
})
