import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faTwitch,faInstagram,faTiktok } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
/* --------------------------------------------
 -----Showing data for footer component------------
 ---------------------------------------------*/
const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <h2>Surgery Plus Inc.</h2>
        <p>Your health, Our responsibility</p>
        <div className="listdiv">
            <div>
          <ul className="footerlist">
             <li className="my-3">About Us </li>
             <li className="my-3">Contact Us </li>
             <li className="my-3">Help</li>
          </ul>
        </div>
        <div>
             <p>Follow us on social media</p>
        <FontAwesomeIcon className="mx-4" icon={faFacebook} size="2x" /> 
         <FontAwesomeIcon className="mx-4" icon={faTwitch} size="2x"/>
         <FontAwesomeIcon className="mx-4" icon={faInstagram} size="2x"/>
         <FontAwesomeIcon className="mx-4" icon={faTiktok} size="2x"/>
        </div>
       
        </div>
        </div>
        
        <br></br><br></br>
        <p>© 2021 All Rights Reserved</p>
        
        </footer>
    );
};

export default Footer;