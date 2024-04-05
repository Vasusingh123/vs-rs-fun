import React, { useState, useEffect } from 'react';

function Api() {
  const [articleData, setArticleData] = useState(null);

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-03-05&sortBy=publishedAt&apiKey=135e3a4a5846493ea19137d7157df39d')
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.articles.length);
        const firstArticle = data.articles[randomIndex];
        setArticleData({
          title: firstArticle.title,
          imageUrl: firstArticle.urlToImage
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {articleData && (
        <div>
          <h2>{articleData.title}</h2>
          {articleData.imageUrl && (
            <img src={articleData.imageUrl} alt="Article" style={{ maxWidth: '100%' }} />
          )}
        </div>
      )}
    </div>
  );
}

export default Api;
