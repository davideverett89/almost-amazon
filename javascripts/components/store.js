import utilities from '../helpers/utilities.js';
import bookData from '../helpers/data/bookData.js';
import cart from './cart.js';
import inputData from '../helpers/data/inputData.js';

const addToCartEvent = () => {
    const book = bookData.getBook();
    let randomNum = Math.floor(Math.random() * book.name.length);
    cart.addToCart(book.name[randomNum]);
};

const getInput = (e) => {
    if (e.which === 13) {
        const inputValue = document.getElementById("input").value;
        inputData.setInput(inputValue);
        document.getElementById("input").value = "";
        inputToDom();
    }
}

const inputToDom = () => {
    let domString = "";
    const myInput = inputData.getInput();
    for (let i = 0; i < myInput.length; i++) {
        domString += `<h3>${myInput[i]}</h3>`;
    }
    utilities.printToDom("input-container", domString);
}


const makeStore = () => {
    const book = bookData.getBook();
    let randomNum = Math.floor(Math.random() * book.name.length);
    let domString = "";
    domString += `<h2>${book.name[randomNum]}</h2>`;
    domString += '<input id="input" type="text">';
    domString += '<button id="add-to-cart-button" class="btn btn-dark">Add To Cart</button>';
    utilities.printToDom("store-container", domString);
    document.getElementById("add-to-cart-button").addEventListener("click", addToCartEvent);
    document.addEventListener("keypress", getInput);
};

export default { makeStore };