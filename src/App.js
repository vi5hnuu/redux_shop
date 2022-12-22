import { Fragment } from 'react';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return <Fragment>
    <Header />
    <Cart />
    <Products />
    <Footer />
  </Fragment>
}

export default App;
