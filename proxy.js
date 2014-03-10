var fs = require('fs');
var express = require('express');
var request = require('request');
var _ = require('underscore');

var app = express();
var config = JSON.parse(fs.readFileSync('config.json'));


app.all('/api/*', function(req, res) {
  proxy(req, res, 'https://api.github.com/');
});

app.all('/login/*', function (req, res) {
  proxy(req, res, 'https://github.com/login/');
});

/**
 * Create a proxy for all urls of the GitHub Api injecting our client id and client secret
 *
 * @param req
 * @param res
 * @param {String} url
 */
var proxy = function (req, res, url) {
  var options = {
    url: url + req.url,
    headers: {
      'User-Agent': 'request'
    },
    method: req.method,
    qs: _.extend(config.github_app, req.query)
  };

  request(options, function (err, response, body) {
    if (err) {
      res.send(500, err);
    }
    res.send(response.statusCode, body);
  });
};

app.listen(3000);