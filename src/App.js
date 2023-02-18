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
import Editproduct from './components/Editproduct/Editproduct';
import Genderproducts from './components/genderProducts/Genderproducts';
import Categoryproducts from './components/Categoryproducts/Categoryproducts';
import Genderprice from './components/genderprice/Genderprice';
import Search from './components/Search/Search';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Signin/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/products' element={<Products type={"products"}/>}/>
      <Route path='/filter/clothing/:clothing' element={<Genderproducts />}/>
      <Route path='/filter/categories/:category' element={<Categoryproducts/>}/>
      <Route path='/filter/genderprice/:clothing' element={<Genderprice/>}/>
      <Route path='/Searchproducts' element={<Search/>}/>      
      <Route path='/product/:id' element={<Product/>}/>
      <Route path='/wishlist/:id' element={<Wishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/> 
      <Route path='/address' element={<Address/>}/> 
      <Route path='/editproduct/:id' element={<Editproduct/>}/> 
      
      </Routes>
      
    
    </BrowserRouter>
  );
}

export default App;
