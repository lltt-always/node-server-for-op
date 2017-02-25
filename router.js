var express = require('express');

var router = express.Router();

var http = require("http");
var url = require("url");

router.get('/', function(req, res, next) {
	res.cookie('path', req.path);
	var strUrl = "http://10.47.31.109:10800/index.html";
	getHtml(strUrl, res);
})

router.get('/shoplist/', function(req, res, next) {
	res.cookie('path', req.path);
	var strUrl = "http://10.47.31.109:10800/shoplist.html";
	getHtml(strUrl, res);
})

router.get('/active/', function(req, res, next) {
	res.cookie('path', req.path);
	var strUrl = "http://10.47.31.109:10800/active.html";
	getHtml(strUrl, res);
})

module.exports = router;

function getHtml(url, res) {
	http.get(url, function(response){
	    response.setEncoding("utf-8");
	    var resData = [];
	    response.on("data", function(chunk){
	        resData.push(chunk);
	    })
	    .on("end", function(){
	    	res.set({'Content-Type': 'text/html'});
	        res.send(resData[0]);
	    });
	});
}

function setCookie(req, res) {
	
}