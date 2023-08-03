import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div
        style={{
          height: "400px",
          width: "100%",
          marginTop: "40px",
          background: "black",
        }}
      >
        <div className="footer-container-main">
          <div className="content-container">
            <h4 className="{{margin:'5px'}}">Book Category</h4>
            <p>Computer Science</p>
            <p>Mathematics</p>
            <p>Arts</p>
            <p>History</p>
            <p>Science Fiction & Fantasy</p>
            
          </div>

          <p style={{ color: "white", textAlign:'center' }}>
            © 2023 BookWorld.com All rights reserved.
          </p>
          <div className="searchBox-container">
            <input
              style={{ height: "30px", width: "200px" }}
              type="text"
              placeholder="Give youe Email"
            />
            <button style={{ marginLeft: "15px" }}>SignUp</button>
          </div>

          <div className="social-media">
            <a href="https://www.facebook.com/" target="_blank">
              <img
                style={{ width: "130px", height: "120px", margin: "5px" }}
                src="/images/footer/fb-logo.png"
                alt="Facebook"
              />
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <img
                style={{ width: "100px", height: "90px", margin: "5px" }}
                src="/images/footer/twitter-logo.png"
                alt="Twitter"
              />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <img
                style={{ width: "80px", height: "80px", margin: "5px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/f/f8/LinkedIn_icon_circle.svg"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
