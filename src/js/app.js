import { settings } from './settings.js';
// import Home from './components/Home.js';
// import Product from './components/Product.js';

const app = {
  initData: function () {
    const url = settings.db.url + '/' + settings.db.product;
    this.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.data.products = parsedResponse;
      });
  },

  init: function () {
    const thisApp = this;
    thisApp.initData();
  },
};

app.init(); 