import Home from "./pages/Home/Home";
import NavBar from "./component/navbar/NavBar";
import Checkout from "./pages/Checkout/Checkout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Products from "./pages/Products/Products";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";


import { useSelector } from "react-redux";
import { cartValue } from "./redux/cartRedux";
import { useEffect, useState } from "react";
import Loader from "./component/loader/Loader";



function App() {
  const cart = useSelector(cartValue);
  const [loader, setLoader] = useState(true)
  const [location,setLocation] = useState('/');

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false)
    }, 1500);
  }, [location])
  
  return (
    <div style={{position:'relative'}}>
      
    <Router>
            <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home setLocation={setLocation}/>} />
        <Route exact path="/cart" element={<Cart setLocation={setLocation}/>} />
        {cart.products.length>0 && <Route exact path="/checkout" element={<Checkout setLocation={setLocation}/>} />}
        <Route exact path="/products" element={<Products setLocation={setLocation}/>} />
        <Route exact path="/signup" element={<Signup setLocation={setLocation}/>} />
        <Route exact path="/login" element={<Login setLocation={setLocation}/>} />
      
      </Routes>
      {loader && <Loader/>}
    </Router>
  
  </div>
  );
}

export default App;
