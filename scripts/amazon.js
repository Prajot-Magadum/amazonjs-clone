// we will use array to store.
// we use objects {} as it allows multiple values together
// to genrate html we can looop throuh each element by array
import { cart, addToCart} from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';
// impoert anthor ways is:: 
//import * as cartModule from '../data/cart.js';
//cartModule.cart
//cartModule.addTocart('id');


let productsHTML = '';//combine this html together

products.forEach((product)=>{
    productsHTML += `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
           ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${formatCurrency(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
        `;
        
});
//put it on the web page (using dom)
document.querySelector('.js-products-grid').
    innerHTML= productsHTML; //we can change html inside elemnet  

// make it intractive.
function uqdateCartQuantity(){
    let cartQuantity = 0;
        cart.forEach((cartItem)=>{
          cartQuantity +=Number(cartItem.quantity)|| 0;
        });
        document.querySelector('.js-cart-quantity')
          .innerHTML = cartQuantity;
      
}

document.querySelectorAll('.js-add-to-cart')
    .forEach((button)=>{
        button.addEventListener('click',()=>{
        const productId = button.dataset.productId; 
        addToCart(productId);
        uqdateCartQuantity();
      });
    });

    //data attribute : just anthor html attribute 
    // allows us to attach any information to an element .
    // supersimple.dev/projects/amazonscripts/amazon.js

//modules 
// Get a variable out of a file
//: 1: add type ="module" attribute :: lets this file get varibles out of other files.
//2: export
//3: import
// advantages of modules.
//1:reduce the naming conflict using modules
//2: we dont have to worry about our order of our files.

