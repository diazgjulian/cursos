const apiKey = "AIzaSyA7qqFUvyAT65v6xGolwcOpaFS5C3NLUAY";
const googleAPIUrl = "https://www.googleapis.com/youtube/v3/search";

const searchButton = document.getElementById('searchButton');
const resultsDiv = document.getElementById('results');

searchButton.addEventListener('click', (e) => {
  const searchTerm = document.getElementById('searchQuery').value;
  const apiPrefix = '&key='
  const searchQuery = '?part=snippet&q=' + searchTerm + apiPrefix + apiKey;
  const url = googleAPIUrl + searchQuery;
  fetch(url)
    .then(response => response.json())
    .then((results) => {
      results.items.forEach(item => {
        console.log(item.id.videoId);
        if (item.id.videoId != undefined) {
          const link = `https://www.youtube.com/watch?v=${item.id.videoId}`;
          console.log(item);
          resultsDiv.innerHTML += `<a href='${link}'><img src="${item.snippet.thumbnails.high.url}">${item.snippet.title}</a><br>`
        }
      })
    })
});