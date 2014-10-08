var hipScraper = require('./modules/hip-scraper');
var dudeScraper = require('./modules/dude-scraper');

var scrapers = new Array(new hipScraper(), new dudeScraper());

scrapers.forEach(function(element, index, array){
  // console.log(element.url);
  // console.log(element.constructor.name);
  element.request();  
});