import React from 'react'
import './Block2.css'
import { useDispatch, useSelector } from 'react-redux'
import { cartValue, removeItem } from '../../../redux/cartRedux'
import { useSnackbar } from 'notistack'

const Block2 = ({product}) => {
  const cart = useSelector(cartValue)
  const dispatch = useDispatch();
  const {enqueueSnackbar} = useSnackbar();

  const handleRemove = (index)=>{
    try {
      dispatch(removeItem(index))

      enqueueSnackbar("Product remove successfully from Cart", {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
  } catch (e) {
      enqueueSnackbar("Some Error Occourd", {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
  }
  }
  return (
    // <div style={{width:'60%',padding:'40px'}}>
    //     <div className="cartItemContainer">
    //         <div style={{width:'50%',height:'100%'}} className="cartItemImage">
    //             <img src='https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' alt='product item'/>
    //         </div>
    //         <div className='cart-item-description' style={{width:'50%',height:'100%',padding:'20px',fontSize:'25px'}}>
    //             <div className="cartItemTitle">Product Details : </div>
    //             <div className="cartItemAuther">Author Name : </div>
    //             <div className="cartItemPrice">Price : 100.0</div>
    //             <button className='Button-plus'> + </button>
    //             <div className="count-Number">2</div>
    //             <button className='Button-minus'> - </button>
    //             <div className="Remove-Item"><a href="#">Remove</a></div>
    //             <div className="save-For-Later"><a href="#">Save For Later</a></div>
                    
    //         </div>



    //     </div>
    // </div>

    <div style={{display:'flex',flexDirection:'column',margin:'20px 40px'}}>

    <h1>Library Cart</h1>
  
  <table>
    <thead>
      <tr >
        <th style={{width: '400px'}} >Title</th>
        <th>Author</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {product && product.map((item,index)=>{
       return  <tr>
      
        <td style={{display:'flex',alignItems:'center',gap:'20px'}}>
        <div style={{width:'100px',height:'150px'}} className="cartItemImage">
               <img style={{width:'100px'}} src={item && item.volumeInfo && item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail} alt='product item'/>
        </div>
        <p>{item && item.volumeInfo && item.volumeInfo.title}</p></td>
        
        <td>{item && item.volumeInfo && item.volumeInfo.authors && item.volumeInfo.authors[0]}</td>
        <td>₹{item &&item.saleInfo && item.saleInfo.listPrice && item.saleInfo.listPrice.amount}</td>
        <td><button onClick={()=>handleRemove(index)} class="remove-btn">Remove</button></td>
      </tr>
      })}
      {/* <tr>
        <td style={{display:'flex',alignItems:'center',gap:'20px'}}>
        <div style={{width:'100px',height:'150px'}} className="cartItemImage">
               <img src='https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' alt='product item'/>
        </div>
        Book 2</td>
        <td>Author 2</td>
        <td>$15.00</td>
        <td><button class="remove-btn">Remove</button></td>
      </tr> */}
      
    </tbody>
    <tfoot>
      <tr class="total">
        <td colspan="2"></td>
        <td>Total:</td>
        <td>₹{cart && cart.total && cart.total.toFixed(2)}</td>
      </tr>
    </tfoot>
  </table>
  <div className='Btn-container-main'>
  <a href="/checkout" class="checkout-btn">Checkout</a>
</div>
  </div>

  )
}

export default Block2
