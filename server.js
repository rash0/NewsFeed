require('dotenv').config()
const express = require('express');
const app = express();
var path = require('path');
const NewsAPI = require('newsapi');
var compression = require('compression')
const request = require('request');
const port = process.env.PORT || 5000;
const newsapi = new NewsAPI(process.env.API_KEY);

app.use(compression())
app.use(express.static(path.resolve(__dirname, 'client/build')));

app.get('/w', function(req, res, err){
  request(`https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.IPGEO_KEY}`,function (error, response, body){
    console.log('first request error:', error);
    var ip = JSON.parse(body)
    request(`https://api.openweathermap.org/data/2.5/weather?q=${ip.city},${ip.country_name}&APPID=${process.env.WETH_KEY}&units=metric`,function (error, response, body){
      console.log('Second request error:', error);
      var weather = JSON.parse(body)
      res.send(JSON.stringify({minTemp: weather.main.temp_min, tempNow: weather.main.temp, maxTemp: weather.main.temp_max, logo: `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`, country:ip.country_name, city: ip.city}))
    })
  })
})

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

app.listen(port)
