import React from "react";
import "../styles/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch, faGlobe } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <footer className="footer icon-container">
      <div className="footer__content">
      <FontAwesomeIcon icon={faSearch} size="3x" style={{ color: 'gray' }} className="centered-icon"/>
      <p></p>
        <h4>Search for Recipes </h4>
        <p>Enter an ingredient, dish name, or use filters to discover delicious recipes.</p>
      </div>
      <div className="footer__content">
      <FontAwesomeIcon  icon={faHeart} size="3x" style={{ color: 'red' }} />
      <p></p>
      <h4>Send Your Recipe Ideas</h4>
<p>Have a unique recipe idea in mind? Share it with us!<br></br>
   You can send us a message or email with your recipe ideas, and we'll consider implementing them on our website. We love hearing from our community!</p>
      </div>
      <div className="footer__content">
      <FontAwesomeIcon icon={faGlobe} size="3x" style={{ color: 'green' }}/>
      <p></p>
        <h4>Explore! </h4>
        <p>Enjoy a culinary journey and savor the flavors of various cuisines!</p>
      </div>
    </footer>
  );
};

export default Footer;