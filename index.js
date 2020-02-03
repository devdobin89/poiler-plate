const express = require('express');
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://DevDobin:dobin2000@devdobin-90xe1.mongodb.net/test?retryWrites=true&w=majority', {
    // https://www.youtube.com/watch?v=IHjolKwrjPE 4:58
    // https://www.youtube.com/watch?v=wMJ7hQ2FKfQ
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))