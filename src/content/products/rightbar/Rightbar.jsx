import React, { useEffect, useState } from 'react'
import './rightbar.css'
// import {Star} from '@mui/icons-material'
import {AiFillStar} from 'react-icons/ai'
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, addToCart } from '../../../redux/cartRedux';

const Rightbar = ({product,setProduct}) => {
    const { enqueueSnackbar } = useSnackbar();
    const search = useSelector((state)=>state.search)
    const user = useSelector((state)=>state.user)
    const dispatch = useDispatch();
    const [sort, setSort] = useState('')
    // useEffect(() => {
    //     const sortedBooks = product && product.sort((a, b) => {
    //         if (sort === 'title') {
    //           return a.volumeInfo.title.localeCompare(b.volumeInfo.title);
    //         } else if (sort === 'author') {
    //           return a.volumeInfo.authors[0].localeCompare(b.volumeInfo.authors[0]);
    //         } else if (sort === 'subject') {
    //           return a.volumeInfo && a.volumeInfo.categories && a.volumeInfo.categories[0].localeCompare(b.volumeInfo && b.volumeInfo.categories && b.volumeInfo.categories[0]);
    //         } else if (sort === 'publishDate') {
    //           return new Date(a.volumeInfo.publishedDate) - new Date(b.volumeInfo.publishedDate);
    //         }
    //         return 0;
    //     });
    //     setProduct(sortedBooks);
    // }, [sort])

    const handleCart = async(item)=>{
        try {
            // dispatch(addProduct(item))
            let data = {
              "userId": user?.currentUser?.data?.id,
              "title": item && item.volumeInfo && item.volumeInfo.title,
              "subtitle": item && item.volumeInfo && item.volumeInfo.subtitle,
              "authors": item && item.volumeInfo && item.volumeInfo.authors,
              "publisher": item && item.volumeInfo && item.volumeInfo.publisher,
              "publishedDate": item && item.volumeInfo && item.volumeInfo.publishedDate,
              "description": item && item.volumeInfo && item.volumeInfo.description,
              "pageCount": item && item.volumeInfo && item.volumeInfo.pageCount,
              "imageLinks": {
                  "smallThumbnail": item && item.volumeInfo && item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail,
                  "thumbnail": item && item.volumeInfo && item.volumeInfo.authors && item.volumeInfo.imageLinks.thumbnail
              },
              "listPrice":{
                  "amount": item &&item.saleInfo && item.saleInfo.listPrice && item.saleInfo.listPrice.amount,
                  "currencyCode": item &&item.saleInfo && item.saleInfo.listPrice && item.saleInfo.listPrice.currencyCode
              }
          }
          const res = await  dispatch(addToCart(data))
          console.log(res);
            if(res && res?.data){
              enqueueSnackbar("Product Added successfully in Cart", {
                variant: "success",
                anchorOrigin: {
                  vertical: "top",
                  horizontal: "right",
                },
              });
            }
            else{
              enqueueSnackbar((res?.message)?(res?.message):"product already in your cart", {
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
    <div className="rightbar-mainContainer1">
        <div className='sortingProductContainer'>
        <p style={{ color: "#000", fontWeight: "500", fontSize: "16px", paddingRight: "5px" }}>Sort By</p>
        <p style={{ "&:hover": { borderBottom: "1px solid #289BCC" }, cursor: "pointer",color: sort==="title"?'#289BCC':'#000' }} onClick={(e) => setSort("title")} >Title</p>

        <p style={{ "&:hover": { borderBottom: "1px solid #289BCC", color: "#289BCC" }, cursor: "pointer",color: sort==="author"?'#289BCC':'#000' }} onClick={(e) => setSort("author")} >Author</p>

        <p style={{ "&:hover": { borderBottom: "1px solid #289BCC", color: "#289BCC" }, cursor: "pointer",color: sort==="subject"?'#289BCC':'#000' }} onClick={(e) => setSort("subject")} >Subject</p>

        <p style={{ "&:hover": { borderBottom: "1px solid #289BCC", color: "#289BCC" }, cursor: "pointer",color: sort==="publishedDate"?'#289BCC':'#000' }} onClick={(e) => setSort("publishedDate")} >Publish Date</p>
      </div>
      <div style={{margin:'20px 0',fontSize:'20px',fontWeight:400,display:'flex',alignItems:'center',justifyContent:'center'}}>Results For “{search.query}”</div>
    <div className='rightbarContainer1'>
        {product && product.sort((a, b) => {
            if (sort === 'title') {
              return a.volumeInfo && a.volumeInfo.title && a.volumeInfo.title.localeCompare(b.volumeInfo && b.volumeInfo.title && b.volumeInfo.title);
            } else if (sort === 'author') {
              return a.volumeInfo && a.volumeInfo.authors && a.volumeInfo.authors[0].localeCompare(b.volumeInfo && b.volumeInfo.authors && b.volumeInfo.authors[0]);
            } else if (sort === 'subject') {
              return a.volumeInfo && a.volumeInfo.categories && a.volumeInfo.categories[0].localeCompare(b.volumeInfo && b.volumeInfo.categories && b.volumeInfo.categories[0]);
            } else if (sort === 'publishedDate') {
              return new Date(a.volumeInfo && a.volumeInfo.publishedDate) - new Date(b.volumeInfo && b.volumeInfo.publishedDate);
            }
            return 0;
        }).map((item)=>{
            return <div className="rightInnerContainer1">
            <div className="productItemImg1">
                <img src={item && item.volumeInfo && item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail} alt='product item'/>
            </div>
            <div className="productItemDesc">
                <div className="productItemTitle1">{item && item.volumeInfo && item.volumeInfo.title}</div>
                <div style={{display:'flex',alignItems:'center'}}>
                {item && item.volumeInfo && item.volumeInfo.authors && item.volumeInfo.authors.map((i)=>{
                    return <p className="productItemAauth1"> {i},</p>  
                })}
                </div>
            
                <div style={{display:'flex',alignItems:'center',gap:'3px'}}>
                    <div className="productItemRating1" style={{display: "flex", justifyContent: 'center', alignItems: "center", background: "green", color: "white", width: '40px', height: "25px", borderRadius: "5px", fontSize: '14px'}}>{item.volumeInfo.averageRating}<AiFillStar style={{ fontSize: '13px', color: "white", paddingLeft: "3px" }} />
                    </div>
                    <div>({item && item.volumeInfo && item.volumeInfo.ratingsCount})</div>
                </div>
                {item.saleInfo.saleability==='FOR_SALE' && <div className='productItemPrice1'>₹{item &&item.saleInfo && item.saleInfo.listPrice && item.saleInfo.listPrice.amount}</div>}

                {item.saleInfo.saleability==='NOT_FOR_SALE' && <div className='productItemPrice1'>This Book is Not for sale</div>}
               <button  onClick={()=>handleCart(item)} disabled={((!item || !item.saleInfo || !item.saleInfo.listPrice || !item.saleInfo.listPrice.amount) && (item.saleInfo.saleability==='NOT_FOR_SALE'))?true:false} class="productItem-add-to-cart1">Add to Cart</button>
            </div>
        </div>
        })}
{/*         

        <div className="rightInnerContainer1">
            <div className="productItemImg1">
                <img src='/images/product/item.jpg' alt='product item'/>
            </div>
            <div className="productItemDesc">
                <div className="productItemTitle1">sdsbcjkbdjcbdk</div>
                <div className="productItemAauth1">dvj dgjkb</div>
                <div className="productItemRating1" style={{display: "flex", justifyContent: 'center', alignItems: "center", background: "green", color: "white", width: '40px', height: "25px", borderRadius: "5px", fontSize: '14px'}}>4        <AiFillStar style={{ fontSize: '13px', color: "white", paddingLeft: "3px" }} />
                </div>
                <div className='productItemPrice1'>₹645</div>
                <button class="productItem-add-to-cart1">Add to Cart</button>
            </div>
        </div> */}
        
        
    </div>
    </div>
    
  )
}

export default Rightbar