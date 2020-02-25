import utilities from '../helpers/utilities.js';
import bookData from '../helpers/data/bookData.js';
import cart from './cart.js';

const addToCartEvent = () => {
    cart.cartToDom();
};

const makeStore = () => {
    const book = bookData.getBook();
    let domString = "";
    domString += `<h2>${book.name}</h2>`;
    domString += `<button id="add-to-cart-button" class="btn btn-dark">Add To Cart</button>`
    utilities.printToDom("store-container", domString);
    document.getElementById("add-to-cart-button").addEventListener("click", addToCartEvent);
};

export default { makeStore };