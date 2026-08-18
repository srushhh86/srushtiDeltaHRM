export class ProductDetails{
      /**
       * @param {import('playwright').Page} page
       */
    constructor(page)
    {
        this.page=page;
        this.addToFav=page.locator("[id='btn-add-to-favorites']")
        this.addToCart=page.locator("#btn-add-to-cart")
        
    }
  
}