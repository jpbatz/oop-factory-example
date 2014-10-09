var http = require('http');

// CONSTRUCTOR
function BaseScraper() {
  console.log('base constructor');
}

// GETTER METHOD
Object.defineProperty(BaseScraper, "url", {
  get : function(){
    return this._url;
  }
});

// ADD METHODS TO CLASS

BaseScraper.prototype.request = function(){
  var options = {
    hostname: this.url,
    port: 80,
    path: '/',
    method: 'GET'
  };
  this.response();
};
BaseScraper.prototype.response = function(data){
  console.log('i am base class'); 
};

module.exports = BaseScraper;