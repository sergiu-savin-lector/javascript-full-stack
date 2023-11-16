const ENDPOINT = 'https://newsapi.org/v2/everything';
const API_KEY = 'af0e766a1ccf475588965f28a4346fe4';

export default class NewsApi {
  constructor() {
    this.querryPage = 1;
    this.searchQuerry = '';
  }

  getNews() {
    const url = `${ENDPOINT}?q=${this.searchQuerry}&pageSize=5&page=${this.querryPage}`;
    const options = {
      headers: {
        'X-Api-Key': API_KEY
      }
    }

    return fetch(url, options)
    .then(res => res.json())
    .then(data => {
      this.incrementPage();
      return data;
    })
  }

  resetPage() {
    this.querryPage = 1;
  }

  incrementPage() {
    this.querryPage += 1;
  }
}