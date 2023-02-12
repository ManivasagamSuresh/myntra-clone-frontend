import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/Products/Products';
import Wishlist from './components/Wishlist/Wishlist';
import Cart from './components/Cart/Cart';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import Product from './components/Product/Product';
import Addproduct from './components/addproduct/Addproduct';
import Address from './components/Address/Address';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/product/:id' element={<Product/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/> 
      <Route path='/address' element={<Address/>}/>      
      </Routes>
      
    
    </BrowserRouter>
  );
}

export default App;
