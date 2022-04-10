import { select, activatePage } from './settings.js';
import Home from './components/Home.js';
// import Product from './components/Product.js';

const app = {

  initPages: function () {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');
    let pageMatchingHash = thisApp.pages[0].id;

    for (let page of thisApp.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }
    thisApp.activatePage(pageMatchingHash);

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();

        /* get page id from href attribute */
        const id = clickedElement.getAttribute('href').replace('#', '');
        /* run thisApp.activatePage with that id */
        thisApp.activatePage(id);
        /* change URL hash */
        window.location.hash = '#' + id;
      });
    }
   
  },

  activatePage: function (pageId) {
    const thisApp = this;
    let pagesToShow = [];
    if (pageId === 'home') {
      pagesToShow = activatePage.home;
    }
    else if (pageId === 'products') {
      pagesToShow = activatePage.products;
    }
    else if (pageId === 'contact') {
      pagesToShow = activatePage.contact;
    }

    for (let page of thisApp.pages) {
      if (pagesToShow.includes(page.id)) {
        page.classList.remove('hidden');
      }
      else {
        page.classList.add('hidden');
      }
    }
  },

  // initData: function () {
  //   const url = settings.db.url + '/';
  //   this.data = {};
  //   fetch(url)
  //     .then((rawResponse) => {
  //       return rawResponse.json();
  //     })
  //     .then((parsedResponse) => {
  //       this.data.products = parsedResponse;
  //     });
  // },

  init: function () {
    const thisApp = this;
    // thisApp.initData();
    thisApp.initPages();
    thisApp.initHome();
    thisApp.activatePage('home');
    
  },

  initHome: function () {
    const thisApp = this;

    const homeWidget = document.querySelector(select.containerOf.home);
    thisApp.Home = new Home(homeWidget);
  },
};

app.init(); 