const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

const listsRoute = require('./routes/lists');
app.use('/lists', listsRoute);

const tasksRoute = require('./routes/tasks');
app.use('/tasks', tasksRoute);

app.get('/', (req, res) => {
    res.send('home');
})

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true })
    .then(res => console.log("Connected to DB"))
    .catch(err => console.log(err))

app.listen(5000);
