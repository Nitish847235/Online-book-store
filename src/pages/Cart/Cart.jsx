import React, { useEffect } from 'react'
import Block2 from '../../content/cart/block2/Block2'
import { useDispatch, useSelector } from 'react-redux'
import { cartValue, findAllCart } from '../../redux/cartRedux'
import {BsCartX} from 'react-icons/bs'
import { useNavigate } from 'react-router'
import { Link, useLocation } from 'react-router-dom'

const Cart = ({setLocation}) => {
  const cart = useSelector(cartValue)
  const user = useSelector((state)=>state.user)
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCart = async () =>{
        let data = {
          query: {"userId": user?.currentUser?.data?.id ,"isDeleted":false},
          sort: {"name":1},
          populate: "",
          page: 1,
          limit: 10
        }

        const res = await dispatch(findAllCart(data));
    }
    if(user.currentUser!==null && (user.currentUser.data && user.currentUser.data!==null))
      fetchCart();
    setLocation(location.pathname)
  }, [])
  
  return (
    <div>
      {(cart.products?.docs?.length>0 && user?.currentUser?.data) ? <Block2 product={cart.products} userId = {user?.currentUser?.data?.id} />:
        <div style={{marginTop:'20vh',display:'flex',flexDirection:'column',gap:'30px',justifyContent:'center',alignItems:'center'}}>

          <BsCartX style={{fontSize:'100px'}}/>
          <p style={{fontSize:'25px',fontWeight:400}}>Your Shopping Cart is Empty</p>
          {(user.currentUser===null || (user.currentUser.data && user.currentUser.data===null)) ? <div style={{fontSize:'18px',textAlign:'center'}}>Please <Link to={'/login'} style={{color:`#dede15`,textDecoration:'none',margin:'0 3px',fontSize:'20px'}}>Login</Link> To Check Saved Products</div> : null}
          <button type='button' onClick={()=>{navigate('/')}} style={{display:'flex',alignItems:'center',color:'white',backgroundColor:'#0276FF',borderRadius:'5px',padding:'15px 20px',cursor:'pointer',boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',boxSizing:'border-box',borderStyle:'none',fontSize:'17px'}}>Continue Shopping</button>
        </div>
      }

    </div>
  )
}

export default Cart
