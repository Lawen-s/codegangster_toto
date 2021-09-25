require('dotenv').config();
const express = require('express');

const cors = require('cors');
const controllers = require('./controllers');
const fs = require('fs');
const https = require('https');
const cookieParser = require('cookie-parser');

const app = express();

app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'DELETE']
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/accesstokenrequest', controllers.accessTokenRequest);
app.get('/refreshtokenrequest', controllers.refreshTokenRequest);

app.get('/todos', controllers.todo.get);
app.post('/todos', controllers.todo.post);
app.delete('/todos', controllers.todo.delete);

app.post('/login', controllers.login);

const HTTPS_PORT = process.env.HTTPS_PORT || 4000;

let server;
if (fs.existsSync('./key.pem') && fs.existsSync('./cert.pem')) {
  const privateKey = fs.readFileSync(__dirname + '/key.pem', 'utf8');
  const certificate = fs.readFileSync(__dirname + '/cert.pem', 'utf8');
  const credentials = { key: privateKey, cert: certificate };

  server = https.createServer(credentials, app);
  server.listen(HTTPS_PORT, () => console.log('server runnning'));
} else {
  server = app.listen(HTTPS_PORT);
}
module.exports = server;
