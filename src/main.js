function getTrending() {
 console.log("searched again...");
 let client = GphApiClient("oI06uPemYRW1y6DQOsk264TrdDwzJDwp")

/// Trending Gifs
client.trending("gifs", {})
  .then((response) => {
		console.log(response);
  })
  .catch((err) => {
		console.log(err);
  })
}

// Start Event Handlers
$('#search')
  .click(getTrending)
