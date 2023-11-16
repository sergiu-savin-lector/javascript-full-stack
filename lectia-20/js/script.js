import LoadMoreBtn from "./components/LoadMoreBtn.js";
import NewsApi from "./NewsApi.js";

const form = document.getElementById('form');

// const loadMoreBtn = new LoadMoreBtn({
//     selector: '#loadMoreBtn',
//     isHidden: true
// });

const newsApi = new NewsApi();

form.addEventListener('submit', onSubmit);
// loadMoreBtn.button.addEventListener('click', fetchNews);

function onSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    newsApi.searchQuerry = form.elements.news.value.trim();
    clearNewsList();
    newsApi.resetPage()
    // loadMoreBtn.show();
    fetchNews().finally(() => form.reset());
}

function fetchNews() {
    // loadMoreBtn.disable();
    return newsApi.getNews()
        .then(({ articles }) => {
            if (articles?.length === 0) {
                throw new Error('No Data');
            }
            return articles.reduce((markup, article) => createMarkup(article) + markup, '');
        })
        .then(markup => {
            updateNewsList(markup);
            // loadMoreBtn.enable();
        })
        .catch(onError)
}

function createMarkup(article) {
    const { author, title, description, url, urlToImage } = article;

    return `
    <div class="article-card">
      <h2 class="article-title">${title}</h2>
      <h3 class="article-author">${author || 'Anonym'}</h3>
      <img src=${urlToImage} class="article-img">
      <p class="article-description">${description}</p>
      <a href=${url} class="article-link" target="_blank">Read more</a>
    </div>`;
}

function clearNewsList() {
    document.getElementById('articlesWrapper').innerHTML = '';
}

function updateNewsList(markup) {
    document.getElementById('articlesWrapper').insertAdjacentHTML('beforeend', markup);
}

function onError(err) {
    console.error(err);
}

let throttlePause;
const throttle = (callback, time) => {
    if (throttlePause) return;

    throttlePause = true;

    setTimeout(() => {
        callback();

        throttlePause = false;
    }, time)
}

const handleInfiniteScroll = () => {
    console.dir(document.documentElement);
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
        fetchNews()
    }

}

window.addEventListener('scroll', () => {
    throttle(handleInfiniteScroll, 250)
});

