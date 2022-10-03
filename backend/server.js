const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const colors = require('colors')
const connectDB = require('./config/db')

connectDB()


const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))


// added a route ext pg
// app.get('/api/goals', (req, res)=>{
//    console.log('----------------------')
//  //  res.send('Get goals')
//    res.status(200).json({message: 'Get goals'})  
// })

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server is running on port: ${port} !!` ))


