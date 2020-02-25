import utilities from '../helpers/utilities.js';
import bookData from '../helpers/data/bookData.js';

const addToCartEvent = () => {
    console.log("You clicked add to card");
    // let domString = "";
    // domString += 'THIS IS THE CART';
    // utilities.printToDom("cart-container", domString);
};

const makeStore = () => {
    const book = bookData.getBook();
    let domString = "";
    domString += `<h2>${book.name}</h2>`;
    domString += `<button id="add-to-cart-button" class="btn btn-dark">Add To Cart</button>`
    utilities.printToDom("store-container", domString);
    document.getElementById("add-to-cart-button").addEventListener("click", addToCartEvent);
};

export default { makeStore }