var http = require('http');

// var BaseScraper = {};
function BaseScraper() {
  console.log('base constructor');
}

Object.defineProperty(BaseScraper, "url", {
  get : function(){
    return this._url;
  }
});

BaseScraper.prototype = {
  constructor: BaseScraper,
  request: function(){
    var options = {
      hostname: this.url,
      port: 80,
      path: '/',
      method: 'GET'
    };
    this.response();
    // var req = http.request(options, this.response);

    // req.on('error', function(e) {
    //   console.log('problem with request: ' + e.message);
    // });
  },
  response: function(data){
    console.log('i am base class'); 
    // console.log(data);
    // console.log('STATUS: ' + res.statusCode);
    // console.log('HEADERS: ' + JSON.stringify(res.headers));
    // res.setEncoding('utf8');
    // res.on('data', function (chunk) {
    //   console.log('BODY: ' + chunk);
    // });
  }
};

module.exports = BaseScraper;