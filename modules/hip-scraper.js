var BaseScraper = require('./base-scraper');

function HipScraper() {
  console.log('sub constructor');
  this._url = "http://www.hipster.com";
}

HipScraper.prototype = Object.create(BaseScraper.prototype, {
  constructor: {
    value: HipScraper 
  }
});

HipScraper.prototype.response = function(){
  console.log('i am subclass');
  BaseScraper.prototype.response.call(this);
};

module.exports = HipScraper;