const express = require('express');
var cors = require('cors')
const app = express();

var corsOptions = {
  origin: 'HTTP://YOURDOMAIN.COM', // insert your domain here
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get("/kvk-autocomplete", cors(corsOptions), (req,res)=>{
        var kvkNumber = req.query.kvk;
        var request = require('request');
        var url = 'https://api.kvk.nl:443/api/v2/profile/companies';
	var queryParams = '?' + encodeURIComponent('kvkNumber') + '=' + encodeURIComponent(kvkNumber);
        request({
        url: url + queryParams,
            headers: { 'apikey':'YOUR KVK SECRET API KEY'  }, // insert KVK secret API key here
            method: 'GET'
        },
        function (error, response, body) {
            res.send(body)
        });
});

app.listen(8040);

