require("dotenv").config();
const express = require('express');

const cors = require('cors');
const controllers = require('./controllers');


const app = express();
const port = 4000;



app.use(cors({origin: ["http://localhost:3000"], 
  credentials: true,
  methods: ["GET", "POST", "OPTIONS", "DELETE"]}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', controllers.get);

app.post('/', controllers.post);

app.delete('/', controllers.delete);


let server = app.listen(port, () => {
  console.log(`server running on ${port}`);
})


module.exports = server;
