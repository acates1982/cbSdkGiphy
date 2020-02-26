var express = require('express');
var router = express.Router();
var GphApiClient = require('giphy-js-sdk-core');

var apiKey = process.env.apikey;
var rating = process.env.rating || "g";
var limit = process.env.limit || "50";

let client = GphApiClient(apiKey);

trendingResponse = [];

router.get('/', function(req, res) {
  client.trending("gifs", {
      "limit": limit,
      "rating" : rating
    })
    .then((response) => {
      var trendingResponse = response.data.filter(function(d) {
        if (d.images.preview_gif.url != null && d.images.original.webp != null) {
          return true; // only return if preview url exists
        }
        return false; // skip if no preview url
      }).map(function(r) {
        return {
          id: r.id,
          preview_url: r.images.preview_gif.url.substring(0, r.images.preview_gif.url.indexOf(".gif") + 4),
          webp_url: r.images.original.webp.substring(0, r.images.original.webp.indexOf(".webp") + 5)
        }
      });
      res.statusCode = 200;
      res.send(
        JSON.stringify(trendingResponse)
      );
    })
    .catch((err) => {
      console.log(err);
      res.statusCode = err.status;
      res.send(
        JSON.stringify(err)
      );
    })
});

module.exports = router;
