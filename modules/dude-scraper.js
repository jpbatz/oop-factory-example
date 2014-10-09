var BaseScraper = require('./base-scraper');

// CONSTRUCTOR
function DudeScraper(){
  console.log('sub constructor DudeScraper');
  this._url = "http://www.dude.com";
}

// EXTEND BASE CLASS
DudeScraper.prototype = Object.create(BaseScraper.prototype, {
  constructor: {
    value: DudeScraper
  }
});

// OVERRIDE RESPONSE METHOD
DudeScraper.prototype.response = function(){
  BaseScraper.prototype.response.call(this);
  console.log('i am subclass');
};

module.exports = DudeScraper;