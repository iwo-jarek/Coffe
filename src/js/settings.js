export const select = {
  
  containerOf: {
    pages: '#pages',
    products: 'products-wrapper',
    contact: 'contact-wrapper',
  },

  // home: {
  //   order: '.order-online',
  //   book: '.book-table',
  // },

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

export const settings = {
  
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
    
  },

};