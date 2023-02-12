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

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>      
      </Routes>
      
    
    </BrowserRouter>
  );
}

export default App;
