//import { classNames, settings } from '../settings.js';


class Products {
  constructor(element) {
    const thisProducts = this;

    thisProducts.render(element);
    thisProducts.initWidgets();
  }

  render(element) {
    const thisProducts = this;
    thisProducts.dom = {};
    thisProducts.dom.wrapper = element;
  }



}
export default Products;