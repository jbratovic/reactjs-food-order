import { useContext } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Modal from './components/UI/Modal';
import CartItem from './components/Cart/CartItem';

import CartContext from './store/cart-context';


function App() {

    const cartCtx =  useContext(CartContext);
    console.log("cartCtx:", cartCtx);

    const onShowCartHandler = () => {
        console.log("cick");
        cartCtx.openModal();
    }



    return (
        <CartProvider>
            <Header onShowCart={onShowCartHandler} />

            

            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
