const fetch = require('node-fetch');

fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-03-05&sortBy=publishedAt&apiKey=135e3a4a5846493ea19137d7157df39d')
  .then(response => response.json())
  .then(data => {
    console.log(data.articles[0].title);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });