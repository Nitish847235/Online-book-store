import React from 'react'
import './Block2.css'
import { useDispatch, useSelector } from 'react-redux'
import { cartValue, deleteCart, findAllCart, removeItem } from '../../../redux/cartRedux'
import { useSnackbar } from 'notistack'

const Block2 = ({product,userId}) => {
  const cart = useSelector(cartValue)
  const dispatch = useDispatch();
  const {enqueueSnackbar} = useSnackbar();

  const handleRemove = async(index,item)=>{
    try {
      let data = {id:item?.id}
      const res = await dispatch(deleteCart(data))

      if(res && res?.status==="SUCCESS"){
        let data = {
          query: {"userId": userId ,"isDeleted":false},
          sort: {"name":1},
          populate: "",
          page: 1,
          limit: 10
        }

        const res1 = await dispatch(findAllCart(data));
        enqueueSnackbar("Product remove successfully from Cart", {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      }
      else{
        enqueueSnackbar(res.message, {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      }
      
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

    <div className='cartProductContainer' >

    <h1>Library Cart</h1>
  
  <table className='pc-table'>
    <thead>
      <tr >
        <th style={{width: '400px'}} >Title</th>
        <th>Author</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {product && product?.docs?.map((item,index)=>{
       return  <tr>
        <td style={{display:'flex',alignItems:'center',gap:'20px'}}>
        <div style={{width:'100px',height:'150px'}} className="cartItemImage">
               <img style={{width:'100px'}} src={item &&  item.imageLinks && item.imageLinks.smallThumbnail} alt='product item'/>
        </div>
        <p>{item && item.title}</p></td>
        
        <td>{item && item.authors && item.authors[0]}</td>
        <td>₹{item && item.listPrice && item.listPrice.amount}</td>
        <td><button onClick={()=>handleRemove(index,item)} class="remove-btn">Remove</button></td>
      </tr>
      })}
      
    </tbody>
    <tfoot>
      <tr class="total">
        <td colspan="2"></td>
        <td>Total:</td>
        <td>₹{cart && cart.total && cart.total.toFixed(2)}</td>
      </tr>
    </tfoot>
  </table>
  <div class="responsive-table">
  {product && product?.docs?.map((item, index) => {
      return (
        <div class="table-row" key={index}>
          <div>
          <div class="cart-item-image">
              <img
                src={
                  item &&
                  item.imageLinks &&
                  item.imageLinks.smallThumbnail
                }
                alt="product item"
              />
            </div>
          </div>
          <div style={{display:'flex',justifyContent:'center',alignItems:'flex-end',flexDirection:'column'}}>
          <div class="table-cell">{item  && item.title}</div>
          <div class="table-cell">{item && item.authors && item.authors.length>0 && item.authors[0]}</div>
          <div class="table-cell">₹{item && item.listPrice && item.listPrice.amount}</div>
          <div class="table-cell">
            <button onClick={() => handleRemove(index,item)} class="remove-btn">Remove</button>
          </div>
          </div>
        </div>
      );
    })}

  <div class="table-footer">
    <div class="total">Total: ₹{cart && cart.total && cart.total.toFixed(2)}</div>
  </div>
</div>

  <div className='Btn-container-main'>
  <a href="/checkout" class="checkout-btn">Checkout</a>
</div>
  </div>

  )
}

export default Block2
