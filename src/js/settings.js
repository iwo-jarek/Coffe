export const select = {

  containerOf: {
    pages: '#pages',
    products: 'products-wrapper',
    about: 'about-wrapper',
    home: '#home',
  },

  nav: {
    links: '.main-nav a',
  },
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  }
};

export const activatePage = {
  home: ['products-page', 'about-us-page'],
  products : ['products-page'],
  contact: ['contact-page']
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
  },

};