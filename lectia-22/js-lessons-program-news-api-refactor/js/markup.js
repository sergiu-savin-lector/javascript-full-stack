export function createMarkup({ author, title, description, url, urlToImage }) {
  return `
      <div class="article-card">
          <h2 class="article-title">${title}</h2>
          <h3 class="article-author">${author || 'Anonym'}</h3>
          <img src=${urlToImage} class="article-img">
          <p class="article-description">${description}</p>
          <a href=${url} class="article-link" target="_blank">Read more</a>
      </div>
      `;
}

export function updateNewsList(markup) {
  document.getElementById('articlesWrapper').innerHTML = markup;
}
