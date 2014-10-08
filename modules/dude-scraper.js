var BaseScraper = require('./base-scraper');

function DudeScraper(){
  console.log('sub constructor');
  this._url = "http://www.dude.com";
}

DudeScraper.prototype = Object.create(BaseScraper.prototype, {
  constructor: {
    value: DudeScraper
  }
});

DudeScraper.prototype.response = function(){
  BaseScraper.prototype.response.call(this);
  console.log('i am subclass');
};

module.exports = DudeScraper;