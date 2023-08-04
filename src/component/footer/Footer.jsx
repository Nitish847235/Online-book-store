import React from "react";
import './footer.css';
import { useNavigate } from 'react-router'
import { useDispatch } from "react-redux";
import { updateQuery } from "../../redux/SearchRedux";


const Footer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (value)=>{
    dispatch(updateQuery(value))
    navigate('/products')
  }
  return (
    <>
      <div className="footer-container">
        <div className="footer-container-main">
          <div className="footer-logo-container">
              <div className="footer-logo">
                <h1>
                  <span style={{color:'rgb(222 187 154)'}}>Book</span>
                  <span style={{color:'rgb(150 211 100)'}}>World</span>
                </h1>
              </div>
              <p style={{fontFamily:'Roboto',fontSize:'14px',lineHeight:1.5,wordSpacing:'5px',textAlign:'justify'}}>Welcome to BookWorld, your one-stop online destination for literary delights. Immerse yourself in a vast collection of books spanning genres, from classics to contemporary bestsellers. Browse, buy, and embark on unforgettable reading journeys with us!</p>
              <div className="social-media">
            <a href="https://www.facebook.com/" target="_blank">
              <img
                style={{ width: "80px", height: "80px"}}
                src="/images/footer/fb-logo.png"
                alt="Facebook"
              />
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <img
                style={{ width: "60px", height: "55px"}}
                src="/images/footer/twitter-logo.png"
                alt="Twitter"
              />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <img
                style={{ width: "40px", height: "40px",marginLeft:'10px'}}
                src="https://upload.wikimedia.org/wikipedia/commons/f/f8/LinkedIn_icon_circle.svg"
                alt="LinkedIn"
              />
            </a>
          </div>
          </div>
          <div className="content-container">
            <h4 style={{color:'#3ba1bb'}}>Book Category</h4>
            <p onClick={()=>handleClick('Computer Science')}>Computer Science</p>
            <p onClick={()=>handleClick('Mathematics')}>Mathematics</p>
            <p onClick={()=>handleClick('Arts')}>Arts</p>
            <p onClick={()=>handleClick('History')}>History</p>
            <p onClick={()=>handleClick('Science Fiction & Fantasy')}>Science Fiction & Fantasy</p>
            
          </div>

          
        </div>
        <div style={{width:'100%',paddingBottom:'30px',borderTop:'1px solid #ccc',paddingTop:'5px'}}>
          <p style={{ color: "white", textAlign:'center' }}>
            © 2023 BookWorld. All rights reserved.
          </p></div>
      </div>

    </>
  );
};

export default Footer;
