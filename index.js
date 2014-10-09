var HipScraper = require('./modules/hip-scraper');
var DudeScraper = require('./modules/dude-scraper');

var scrapers = new Array(new HipScraper(), new DudeScraper());

scrapers.forEach(function(element, index, array){
  // console.log(element.url);
  // console.log(element.constructor.name);
  element.request();  
});
