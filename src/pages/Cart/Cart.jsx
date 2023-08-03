import React from 'react'
import Block2 from '../../content/cart/block2/Block2'
import { useSelector } from 'react-redux'
import { cartValue } from '../../redux/cartRedux'
import {BsCartX} from 'react-icons/bs'
import { useNavigate } from 'react-router'

const Cart = () => {
  const cart = useSelector(cartValue)
  const navigate = useNavigate();
  return (
    <div>
      {cart.products.length>0 ? <Block2 product={cart.products}/>:
        <div style={{marginTop:'20vh',display:'flex',flexDirection:'column',gap:'40px',justifyContent:'center',alignItems:'center'}}>

          <BsCartX style={{fontSize:'100px'}}/>
          <p style={{fontSize:'25px',fontWeight:400}}>Your Shopping Cart is Empty</p>

          <button type='button' onClick={()=>{navigate('/')}} style={{display:'flex',alignItems:'center',color:'white',backgroundColor:'#0276FF',borderRadius:'5px',padding:'15px 20px',cursor:'pointer',boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',boxSizing:'border-box',borderStyle:'none',fontSize:'17px'}}>Continue Shopping</button>
        </div>
      }

    </div>
  )
}

export default Cart
