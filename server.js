const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const stripoService = require('./stripo');
const utilities = require('./utilities');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("stripo-service");
});

app.get('/emails', (req, res) => {
    stripoService.getEmails().then(function(emails){
        res.json(emails);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/validate', (req, res) => {
    stripoService.getValidate().then(function(validation){
        res.json(validation);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/templates', (req, res) => {
    stripoService.getTemplates().then(function(templates){
        res.json(templates);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/srtnames', (req, res) => {
    stripoService.getSRTNames().then(function(srtnames){
        res.json(srtnames);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/emails/:id', (req, res) => {
    stripoService.getEmail(req.params.id).then(function(email){
        res.json(email);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/export/html/emails/:id', (req, res) => {
    stripoService.getEmailHTML(req.params.id).then(function(email){
        res.json(email);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/export/html/templates/:id', (req, res) => {
    stripoService.getTemplateHTML(req.params.id).then(function(html){
        res.json(html);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.listen(PORT, HOST);