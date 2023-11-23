import API from './api.js';
import { createMarkup, updateNewsList } from './markup.js';

const form = document.getElementById('form');

form.addEventListener('submit', onSubmit);

async function onSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const inputValue = form.elements.news.value;

    try {

        const articles = await API.getNews(inputValue);

        if (articles.length === 0) {
            updateNewsList(`<p> Nu am gasit rezultate </p>`);
            return;
        }

        const markup = articles.reduce( (markup, article) => createMarkup(article) + markup, '');
        updateNewsList(markup);

    } catch (err) {
        onError(err);
    }
}

function onError(err) {
    console.error(err);
    updateNewsList(`<p> Nu am gasit rezultate </p>`);
}