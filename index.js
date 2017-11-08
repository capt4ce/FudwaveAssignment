import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'
import path from 'path'

import Fundwave from './Fundwave'

var app = express()
var server = require('http').createServer(app)
app.use(logger('dev'))                                       // log every request to the console
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))          // get information from html forms

app.use('/public', express.static(path.join(__dirname, './dist')))

// allowing CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// =======================================================
// Routes required to access backed services
// =======================================================
app.post('/getQuarterNames', function (req, res) {
    //getting required parameters
    let fromDate = req.body.fromDate
    let toDate = req.body.toDate

    let f = new Fundwave()
    res.json({
        status: 200,
        data: f.getQuarterNames(fromDate, toDate)
    })
})

app.get('/getTimePeriods', function (req, res) {
    let fromDate = req.query.fromDate
    let toDate = req.query.toDate
    let timePeriod = req.query.timePeriod

    res.json({
        status: 200,
        data: Fundwave.getTimePeriods(fromDate, toDate, parseInt(timePeriod))
    })
})

app.get('*', function (req, res) { res.sendFile('index.html') })


// starting the server
console.log('Listening to ' + (process.env.PORT ? process.env.PORT : '3000') + '...')
server.listen(process.env.PORT || 3000)