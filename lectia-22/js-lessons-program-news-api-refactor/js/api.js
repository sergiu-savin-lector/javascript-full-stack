import { updateNewsList } from './markup.js';

const ENDPOINT = 'https://newsapi.org/v2/everything';
const API_KEY = 'af0e766a1ccf475588965f28a4346fe4';

const getNews = async query => {
    try {
        const res = await fetch(`${ENDPOINT}?apiKey=${API_KEY}&q=${query}`);
        console.dir(res);
        const response  = await res.json();
        console.dir(response);

        return response.articles;
    } catch (error) {
        updateNewsList(`<p>${error}</p>`);
        console.error(error);
    }
}

// async function getNews(query) {
//     const response = await axios.get(`${ENDPOINT}?apiKey=${API_KEY}&q=${query}`);

//     return response.data.articles;
// }

export default {getNews};



