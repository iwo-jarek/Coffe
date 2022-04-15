import { select, activatePage } from './settings.js';
import Home from './components/Home.js';

const app = {

  initPages: function () {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);


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
        thisApp.activatePage();
      });
    }
   
  },

  activatePage: function () {
    let pageId = window.location.hash.replace('#', '');
    if(!pageId){
      pageId ='home';
    }
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

  init: function () {
    const thisApp = this;
    thisApp.initPages();
    thisApp.initHome();
    thisApp.activatePage();
    
  },

  initHome: function () {
    const thisApp = this;

    const homeWidget = document.querySelector(select.containerOf.home);
    thisApp.Home = new Home(homeWidget);
  },
};

app.init(); 