// Description
//   A Hubot script that count a elements
//
// Configuration:
//   None
//
// Commands:
//   hubot anchor-count <url> - count a elements
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  var cheerio, request;
  request = require('request-b');
  cheerio = require('cheerio');
  return robot.respond(/anchor-count (https?:\/\/.+)$/i, function(res) {
    var url;
    url = res.match[1];
    return request(url).then(function(r) {
      var $;
      $ = cheerio.load(r.body);
      return res.send($('a').length);
    });
  });
};
