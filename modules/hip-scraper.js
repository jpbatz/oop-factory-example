var BaseScraper = require('./base-scraper');

// CONSTRUCTOR
function HipScraper() {
  console.log('sub constructor hipster scraper');
  this._url = "http://www.hipster.com";

  // CALL SUPER CONSTRUCTOR 
  BaseScraper.call(this);
}

// EXTENDS SUPER CLASS
HipScraper.prototype = Object.create(BaseScraper.prototype, {
  constructor: {
    value: HipScraper 
  }
});

// ADD METHODS TO CLASS

HipScraper.prototype.response = function(){
  console.log('i am subclass');
  BaseScraper.prototype.response.call(this);
};







module.exports = HipScraper;