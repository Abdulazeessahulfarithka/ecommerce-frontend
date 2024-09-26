
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import ShopNow from './Pages/shopNow';
import Home from './Pages/user/Home';
import ProductDetail from './Pages/ProductDetail';
import CartPage from './Pages/CartPage';

function App() {
  return (
    <div className="App">
     
<Routes>
  <Route path="/" element=<Home/>/>
  <Route path="/login" element={<Login/>} />
  <Route path="/register" element={<Register />} />
  <Route path="/shop-now" element={<ShopNow/>}/>
  <Route path="/products/:slug" element={<ProductDetail/>} />
  <Route path="/cart" element={<CartPage />} />
</Routes>



    </div>
  );
}

export default App;
