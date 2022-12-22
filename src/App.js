import { Fragment, useEffect } from 'react';
import './App.css';
import { useSelector } from 'react-redux'
import Notification from './components/Notification';
import Cart from './components/Cart';
import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer';
import { useDispatch } from 'react-redux';
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConf'
import { sendCartData } from './store/cart-slice';
import { loadCartData } from './store/cart-slice';
initializeApp(firebaseConfig);

let initial = true;

function App() {
  const dispatch = useDispatch()
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible)
  const showNotification = useSelector(state => state.ui.notification)
  const cart = useSelector(state => state.cart)
  useEffect(() => {
    if (initial) {
      dispatch(loadCartData())
      initial = false
      return
    }
    dispatch(sendCartData(cart))
  }, [dispatch, cart])
  return <Fragment>
    {showNotification && <Notification status={showNotification.status} title={showNotification.title} message={showNotification.message} />}
    <Header />
    {cartIsVisible && <Cart />}
    <Products />
    <Footer />
  </Fragment>
}

export default App;
