import React, { useRef, useState } from 'react'
import './Style.css'
import { useNavigate } from 'react-router'
import { addSearchProduct, updateQuery } from '../../redux/SearchRedux';
import { useDispatch, useSelector } from 'react-redux';
import {BiHistory,BiLogOut} from 'react-icons/bi'
import {PiDotOutlineFill} from 'react-icons/pi'
import {MdAccountCircle,MdOutlineViewCompactAlt} from 'react-icons/md'



const NavBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const catMenu = useRef(null);
    const search = useSelector((state)=>state.search)
    const user = useSelector((state)=>state.user)
    const [value,setValue] = useState('')
    const [hide,setHide] = useState(true)
    const handleChange = (e)=>{
        setValue(e.target.value)
    }

    const handleEnter = (e)=>{
        if(e.target.value!=="" && e.key ==='Enter'){
            dispatch(updateQuery(e.target.value));
            if(window.location.pathname!=='/products'){
                navigate('/products');
            }
            dispatch(addSearchProduct(e.target.value))
            setHide(true)
        } 
    }

    const closeOpenMenus = (e)=>{
        if(catMenu.current && hide && !catMenu.current.contains(e.target)){
            setHide(true)
        }
    }
    document.addEventListener('mousedown',closeOpenMenus);

    const handleLogout = ()=>{
        localStorage.clear();
        navigate('/');
        window.location.reload();
    }
  return (
    <div className='navMainContainer'>
    <header>
        <div className="navTopContainer">
     <div onClick={()=>navigate('/')} className="logo_Container">
                <div className="logo">
                    <h2>
                        <span style={{color:'rgb(222 187 154)'}}>Book</span>
                        <span style={{color:'rgb(150 211 100)'}}>World</span>
                    </h2>
                </div>
            </div>
    
            <div className="search_container">
                <input ref={catMenu} onClick={()=>{setHide(false)}} onChange={(e)=>{handleChange(e)}} onKeyDown={(e)=>handleEnter(e)} className="search" placeholder="Search by Title, Author, Publisher..." type="text"/>
                <i className="fa-solid fa-magnifying-glass"></i>
                <div className="recent_search" style={{display: hide===false?'block':'none'}} ref={catMenu}>
                    {search && search.searchList && search.searchList.map((item,index)=>{ 
                    return <div key={index} onClick={()=>{dispatch(updateQuery(item)); navigate('/products'); setHide(true)}} className="recent_list">
                        <BiHistory/>
                        <p>{item}</p>
                    </div>
                    })}
                </div>
            </div>
    
             
            {(!user.currentUser || !user.currentUser.data) && <div className="loginbtn_container">
                <a href="/login">Login</a>
            </div>}

            {user.currentUser && user.currentUser.data && <div className="navbar_account_container">
                <div className="navbar_account_name"><PiDotOutlineFill style={{color:'#00ff00',fontSize:'21px'}}/>{user.currentUser && user.currentUser.data && user.currentUser.data.name && user.currentUser.data.name.split(' ')[0]}</div>
                <div className='navbar_account_line'></div>
                <div className="navbar_account_list">
                    <button className="navbar_account_listItem navbar_account_button1"><MdAccountCircle style={{fontSize:'20px'}}/>Account</button>
                    <button className="navbar_account_listItem navbar_account_button2"><MdOutlineViewCompactAlt style={{fontSize:'20px'}}/>Orders</button>
                    <button onClick={handleLogout} className="navbar_account_listItem navbar_account_button3"><BiLogOut style={{fontSize:'20px'}}/>Logout</button>
                </div>
            </div>}
                
    
            <div onClick={()=>navigate('/cart')} className="card_link">
                <i className="fa-solid fa-cart-shopping"></i>
                <p>Cart</p>
            </div>
            </div>
            <div className="navBottomContainer">
                <div className="search_bottom_container">
                    <input ref={catMenu} onClick={()=>{setHide(false)}} onChange={(e)=>{handleChange(e)}} onKeyDown={(e)=>handleEnter(e)} className="search" placeholder="Search by Title, Author, Publisher..." type="text"/>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    {/* <div className="recent_search" style={{display: hide===false?'block':'none'}} ref={catMenu}>
                        {search && search.searchList && search.searchList.map((item,index)=>{ 
                        return <div key={index} onClick={()=>{dispatch(updateQuery(item)); navigate('/products'); setHide(true)}} className="recent_list">
                            <BiHistory/>
                            <p>{item}</p>
                        </div>
                        })}
                    </div> */}
                </div>
            </div>
</header>

    </div>
  )
}

export default NavBar
