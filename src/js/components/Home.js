import { select, classNames } from '../settings.js';

class Home {
  constructor(element) {
    const thisHome = this;
    thisHome.render(element);
  }

  render(element) {
    const thisHome = this;
    thisHome.dom = {};
    thisHome.dom.wrapper = element;
  }

  clickedPage(pageId) {
    const thisHome = this;
    thisHome.pages = document.querySelector(select.containerOf.pages).children;
    thisHome.navLinks = document.querySelectorAll(select.nav.links);

    for (let page of thisHome.pages) {
      page.classList.add(classNames.pages.active, page.id == pageId);
      for (let link of thisHome.navLinks) {
        link.classList.toggle(
          classNames.nav.active,
          link.getAttribute('href') == '#/' + pageId
        );
      }
    }
  } 
}
export default Home;