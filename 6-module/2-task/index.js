export default class ProductCard {
  elem
  constructor(product) {
    this.name = product.name; //*
    this.price = `€` + product.price.toFixed(2); // *
    this.category = product.category;
    this.image = '/assets/images/products/' + product.image; // *
    this.id = product.id;
    
    this.elem = document.createElement('div');
    this.elem.className = 'card';
    this.elem.innerHTML = `
      <div class="card__top">
        <img src="${this.image}" class="card__image" alt="product">
        <span class="card__price">${this.price}</span>
      </div>
      <div class="card__body">
        <div class="card__title">${this.name}</div>
        <button id="btn_1" type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    `;
    onclick = (ev) => {
      if(ev.target.className == 'card__button'){
        const myEvent = new CustomEvent('product-add',{
          detail: this.id,
          bubbles: true,
          cancelable: true,
          composed: false,
        });
        this.elem.dispatchEvent(myEvent);
      }
    }
  }
  get elem(){
    return this.elem
  }
}
