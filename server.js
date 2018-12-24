require('dotenv').config()
const express = require('express');
const app = express();
var path = require('path');
const NewsAPI = require('newsapi');
var compression = require('compression')
const port = process.env.PORT || 5000;
const newsapi = new NewsAPI(process.env.API_KEY);

app.use(compression())
app.use(express.static(path.resolve(__dirname, 'client/build')));


app.get('/lr', function(req, res){

  newsapi.v2.topHeadlines({
    country: 'us',
    pageSize: 36
  }).then(response => {res.send(response)})
    .catch(err => {
    console.log('topHeadlines req went wrong  ' + error)
    res.redirect('/lr')
  })

});

app.get('/ar/:key/:page/:from/:to/:sort', function(req, res){
  console.log(req.params.key, req.params.page, req.params.from, req.params.to, req.params.sort)
  newsapi.v2.everything({
    q: req.params.key,
    page: req.params.page,
    from: req.params.from,
    to: req.params.to,
    sortBy: req.params.sort,
    language: 'en',
    pageSize: 12,
  }).then(response => {res.send(response)})
    .catch(err => {
    console.log('everything req went wrong  ' + error)
    res.redirect('/ar')
  })


})

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/client/build/index.html')
});

app.listen(port))
