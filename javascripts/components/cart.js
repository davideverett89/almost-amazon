import utilities from '../helpers/utilities.js';

const cartToDom = () => {
    let domString = "";
    domString += 'THIS IS THE CART';
    utilities.printToDom("cart-container", domString);
}

export default { cartToDom };