const express = require('express');
const app = express()
const port = 4000

const config = require('./config/key')

// bodyParser 사용하기 위해서
const bodyParser = require('body-parser');
const { User } = require("./models/User");

//
app.use(bodyParser.urlencoded({extended: true}));
//
app.use(bodyParser.json());

const mongoose = require('mongoose') 
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!!'))


app.post('/register', (req, res) => {

  const user = new User(req.body)

  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    // https://www.youtube.com/watch?v=IHjolKwrjPE 4:58
    // https://www.youtube.com/watch?v=wMJ7hQ2FKfQ