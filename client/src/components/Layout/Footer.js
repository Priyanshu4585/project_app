import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (   
    <div className="footer" >
            <section id="newsletter" className="section-p1">
        <div className="newstext">
          <h4>Sign Up For Newsletters</h4>
          <p>
            Get E-mail updates about our latest shop and{" "}
            <span>special offers.</span>
          </p>
        </div>
        <div className="form">
          <button className="normalBlue me-3">Rental</button>
          <button className="normal" onClick={()=>{navigate("/register")}} >Sign up</button>
        </div>
      </section>
      <footer className="section-p1">
      <div className="colm">
        <img
          src="/images/img.png"
          style={{ height: 100, marginTop: "-35px" }}
        />
        <Link to="/contact" className="heading4">
          Contact
        </Link>
        <p>
          <strong>Address:</strong>Nilmattha , Lucknow(UP)-226002
        </p>
        <p>
          <strong>Phone:</strong>123456789
        </p>
        <p>
          <strong>Hours:</strong>10:00 - 18:00 , Mon - Sat
        </p>
        <div className="follow">
          <h4>Follow us</h4>
          <div className="icon">

            <a href="https://www.facebook.com/" target="_blank">
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a href="https://twitter.com/" target="_blank">         
              <i className="fa-brands fa-twitter" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="https://www.pinterest.com/" target="_blank">            
              <i className="fa-brands fa-pinterest" />
            </a>
            <a href="https://www.youtube.com/" target="_blank">            
              <i className="fa-brands fa-youtube" />
            </a>

          </div>
        </div>
      </div>
      <div className="colm">
        <Link to="/about" className="heading4">
          About
        </Link>
        <a href="#">About us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms &amp; Conditions</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="colm">
        <Link to="/myAccount" className="heading4">
          My Account 
        </Link>
        <a href="#">Sign in</a>
        <a href="#">View Cart</a>
        <a href="#">My Wishlist</a>
        <a href="#">Track My Order</a>
        <a href="#">Help</a>
      </div>
      <div className="colm install">
        <Link className="heading4">
          Install App
        </Link>
        <p>From App Store or Google Play</p>
        <div className="rows">
          <a href="https://www.apple.com/app-store/" target="_blank">
            <img src="/images/footer/app.jpg" alt="" />
          </a>
          <a href="https://play.google.com/store" target="_blank">
            <img src="/images/footer/play.jpg" alt="" />
          </a>
        </div>
        <p>Secure Payment Gateways</p>
        <img src="/images/footer/pay.png" alt="" />
      </div>
      <div className="copyright">
        <Link to="/policy" className="heading4">
          Privacy Policy
        </Link>
        <p>© 2025 Tech2 etc - HTML CSS Ecommerce Template</p>
      </div>
    </footer>
    </div>
    

  );
};

export default Footer;
