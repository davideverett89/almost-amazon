import utilities from '../helpers/utilities.js';
import cartData from '../helpers/data/cartData.js';

const cartToDom = () => {
    let domString = "";
    const myCart = cartData.getCart();
    for (let i = 0; i < myCart.length; i++) {
        domString += `<h3>${myCart[i].name}</h3>`
    }
    utilities.printToDom("cart-container", domString);
}

const addToCart = (newBook) => {
    cartData.setCart(newBook);
    cartToDom();
}

export default { cartToDom, addToCart };