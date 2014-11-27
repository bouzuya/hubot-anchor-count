# Description
#   A Hubot script that count a elements
#
# Configuration:
#   None
#
# Commands:
#   hubot anchor-count <url> - count a elements
#
# Author:
#   bouzuya <m@bouzuya.net>
#
module.exports = (robot) ->
  request = require 'request-b'
  cheerio = require 'cheerio'

  robot.respond /anchor-count (https?:\/\/.+)$/i, (res) ->
    url = res.match[1]
    request(url).then (r) ->
      $ = cheerio.load r.body
      res.send $('a').length
