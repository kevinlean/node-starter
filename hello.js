const os = require('os');
const express = require('express');
const app = express();

const requestTime = function (req, res, next) {
    req.requestTime = new Date();
    next();
}

app.use(requestTime);

app.get('/', function (req, res) {
    let responseText = `Hello from ${ os.hostname() }!<br>`;
    responseText += '<small>Requested at: ' + req.requestTime + '</small>';
    res.send(responseText);
});

app.listen(8080, _ => console.log('App started'));
