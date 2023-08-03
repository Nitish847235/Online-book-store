import Home from "./pages/Home/Home";
import NavBar from "./component/navbar/NavBar";
import Checkout from "./pages/Checkout/Checkout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Products from "./pages/Products/Products";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";


import { useSelector } from "react-redux";
import { cartValue } from "./redux/cartRedux";
import { useEffect, useState } from "react";



function App() {
  const cart = useSelector(cartValue);
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1500);
  }, [window.location.pathname])
  
  return (
    <>
      
    <Router>
            <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home loader={loader}/>} />
        <Route exact path="/cart" element={<Cart/>} />
        {cart.products.length>0 && <Route exact path="/checkout" element={<Checkout/>} />}
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/login" element={<Login/>} />
      
      </Routes>
    </Router>
  
  </>
  );
}

export default App;
